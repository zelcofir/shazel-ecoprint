import { Printer, Lightbulb, Leaf, HeartHandshake } from "lucide-react"

const pillars = [
  {
    icon: Printer,
    title: "Maestria en Sublimacion",
    description:
      "Dominamos el arte de la sublimacion con equipos de ultima generacion que garantizan colores vibrantes y durabilidad excepcional en cada pieza.",
  },
  {
    icon: Lightbulb,
    title: "Innovacion Constante",
    description:
      "Exploramos nuevas tecnicas y materiales continuamente para ofrecer productos unicos que superan las expectativas del mercado.",
  },
  {
    icon: Leaf,
    title: "Compromiso Ecologico",
    description:
      "Cada decision que tomamos prioriza el medio ambiente: materiales reciclables, tintas eco-solventes y procesos de bajo impacto.",
  },
  {
    icon: HeartHandshake,
    title: "Atencion Personalizada",
    description:
      "Trabajamos contigo de inicio a fin para asegurar que cada producto refleje tu vision con el acabado perfecto.",
  },
]

export function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Nosotros
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            La Esencia de Shazelecoprint: Innovacion, Calidad y Sostenibilidad
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed text-pretty">
            En Shazelecoprint, somos mas que una empresa de impresion; somos visionarios en el arte
            de transformar ideas en realidades tangibles y vibrantes. Nuestra mision es empoderar a
            nuestros clientes brindandoles productos que no solo destacan por su acabado excepcional,
            sino tambien por su compromiso con practicas sostenibles. Creemos en la impresion que deja
            una huella duradera en la mente, no en el planeta.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon size={28} />
              </div>
              <h3 className="font-heading text-base font-semibold text-card-foreground">
                {pillar.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
