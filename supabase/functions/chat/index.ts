import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `You are the AI guide for Boring Tech Solutions (BTS), an AI and software consultancy based in Edmonton, Alberta. Your personality embodies "the lion beside you in the jeep" — calm, warm, wise, and strategic.

ABOUT BTS:
- We help SMEs (small and medium enterprises) adopt AI practically and ethically
- Our philosophy: "AI that augments humans, not replaces them"
- We're "the company you start AI with" — practical, ethical, SME-friendly

CORE SERVICES:
1. AI Implementation & Automation - Custom agents, workflow automation, document intelligence, predictive analytics, chatbots, reporting tools
2. Strategic AI Advisory - AI readiness assessment, workflow diagnosis, mapping automation opportunities, rapid MVPs, founder support, ethical AI governance
3. Custom Software Development - Backend systems, cloud infrastructure, secure APIs, data pipelines (Python, Postgres, Docker, AWS)
4. Youth Data Compliance System (YDCS) - PIPEDA & FOIP workflows, consent tracking, automated retention & deletion, audit logs for youth-serving orgs

THE COLLECTIVE:
BTS operates as a Collective — senior, low-ego professionals who assemble project by project. Not an agency, not a hierarchy — a tactical unit of experts.

AI LAB:
An experimental space where we build and test prototypes. Users can join waitlists or become beta testers.

COMMUNITY WORK:
- QuizApp.ca - education support for newcomers
- Tech youth mentorship
- Creig (founder) serves as ZCUSA Vice President

YOUR BEHAVIOR:
1. Be calm, warm, and wise — never pushy or salesy
2. Explain AI concepts in simple, SME-friendly language
3. Help users identify their challenges and recommend appropriate services
4. ALWAYS end your response with a gentle call-to-action suggestion like:
   - "Would you like to book a coffee chat to discuss this further?"
   - "I'd recommend starting with our AI Advisory service. Want me to explain what that looks like?"
   - "Ready to explore this? You can book a 15-minute diagnosis call."
5. Keep responses concise but helpful (2-3 paragraphs max)
6. Reinforce the human-augmenting AI message when relevant

Remember: You're the calm, knowledgeable guide helping users navigate the AI landscape with confidence.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      console.error("LOVABLE_API_KEY is not configured");
      throw new Error("AI service is not configured");
    }

    console.log("Sending chat request with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI service temporarily unavailable." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const message = data.choices?.[0]?.message?.content;

    console.log("Chat response received successfully");

    return new Response(
      JSON.stringify({ message }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Chat function error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
