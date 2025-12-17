import { ArrowRight, HelpCircle, TrendingDown, Database, Lightbulb } from "lucide-react";
const cards = [{
  icon: HelpCircle,
  statement: "I'm a small business and I don't know where to start.",
  action: "Start with AI Advisory",
  color: "from-primary/20 to-primary/5"
}, {
  icon: TrendingDown,
  statement: "I want to reduce costs but don't know what to automate.",
  action: "Explore Automation",
  color: "from-accent/20 to-accent/5"
}, {
  icon: Database,
  statement: "I have a lot of data but no idea how it can help me.",
  action: "Discover Data Insights",
  color: "from-primary/15 to-primary/5"
}, {
  icon: Lightbulb,
  statement: "I'm exploring AI and want to try a prototype.",
  action: "Visit the AI Lab",
  color: "from-accent/15 to-accent/5"
}];
const SelfIdentificationCards = () => {
  return <section className="relative py-[75px]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            Where Are You on Your <span className="text-gradient">AI Journey</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Every business starts somewhere. Find your path and we'll guide you through the terrain.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => <div key={index} className="group card-premium cursor-pointer relative overflow-hidden" style={{
          animationDelay: `${index * 100}ms`
        }}>
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <card.icon className="text-primary" size={24} />
                </div>

                {/* Statement */}
                <p className="text-xl font-display font-medium mb-6 flex-grow">
                  "{card.statement}"
                </p>

                {/* Action */}
                <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                  <span>{card.action}</span>
                  <ArrowRight className="ml-2" size={18} />
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default SelfIdentificationCards;