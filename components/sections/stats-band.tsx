import { stats } from "@/data/stats";

export function StatsBand() {
  return (
    <section className="relative z-10 -mt-16">
      <div className="container">
        <div className="glass-solid grid grid-cols-2 gap-6 rounded-lg p-8 shadow-elevated md:grid-cols-5 md:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl tracking-wide text-primary md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
