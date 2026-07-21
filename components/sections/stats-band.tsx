import { getStats } from "@/lib/db/queries";
import { iconMap } from "@/components/common/icon-map";

export async function StatsBand() {
  const stats = await getStats();
  return (
    <section className="relative z-10 mt-6 md:-mt-16">
      <div className="container">
        <div className="glass-solid grid grid-cols-2 gap-6 rounded-lg p-8 shadow-elevated md:grid-cols-5 md:gap-4">
          {stats.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="flex items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {Icon && <Icon className="size-5" />}
                </span>
                <div>
                  <p className="font-heading text-xl text-primary md:text-2xl">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
