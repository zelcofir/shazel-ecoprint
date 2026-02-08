import { Leaf, Droplets, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Materiales Responsables",
    description:
      "Tocuyo organico, aluminio reciclable y textiles de bajo impacto ambiental. Cada material es elegido pensando en el planeta.",
  },
  {
    icon: Droplets,
    title: "Tintas de Bajo Impacto",
    description:
      "Utilizamos tintas de sublimacion eco-solventes que minimizan la huella hidrica y no generan residuos toxicos.",
  },
  {
    icon: Award,
    title: "Acabados de Alta Calidad",
    description:
      "Tecnologia de sublimacion de ultima generacion que garantiza colores vibrantes y durabilidad excepcional.",
  },
]

export function EcoDifference() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground/90">
            Nuestro Compromiso
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold sm:text-4xl text-balance">
            La Eco-Diferencia
          </h2>
          <p className="mt-3 text-primary-foreground/70 max-w-lg mx-auto text-pretty">
            Cada producto que creamos refleja nuestro compromiso con la calidad y la sostenibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center gap-4 rounded-2xl bg-primary-foreground/10 p-8 text-center backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15">
                <feature.icon size={28} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
