import { jugadores } from "../data/mockData";
import { User } from "lucide-react";

const grupos = ["Porteros", "Defensas", "Centrocampistas", "Delanteros"] as const;

export default function Plantilla() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 font-display text-3xl font-bold uppercase tracking-wide text-foreground">
        Plantilla
      </h1>

      {grupos.map((grupo) => {
        const jugadoresGrupo = jugadores.filter((j) => j.grupo === grupo);
        return (
          <section key={grupo} className="mb-10">
            <h2 className="mb-4 border-b-2 border-secondary pb-2 font-display text-xl font-bold uppercase text-secondary">
              {grupo}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {jugadoresGrupo.map((j) => (
                <div
                  key={j.dorsal}
                  className="group flex items-center gap-4 rounded-lg border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-card-foreground">
                      <span className="mr-2 text-secondary">#{j.dorsal}</span>
                      {j.nombre}
                    </p>
                    <p className="text-sm text-muted-foreground">{j.posicion}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
