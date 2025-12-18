const partners = [
  { name: "Partner 1" },
  { name: "Partner 2" },
  { name: "Partner 3" },
  { name: "Partner 4" },
  { name: "Partner 5" },
  { name: "Partner 6" },
];

const PartnerLogos = () => {
  return (
    <section className="py-16 border-y border-border bg-surface-dark">
      <div className="section-container">
        <div className="text-center mb-10">
          <p className="text-muted-foreground text-sm uppercase tracking-widest">
            Trusted by Forward-Thinking Organizations
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-32 h-12 rounded-lg bg-muted/30 border border-border flex items-center justify-center text-muted-foreground text-sm font-medium opacity-50 hover:opacity-80 transition-opacity"
            >
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
