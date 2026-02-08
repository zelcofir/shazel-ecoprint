import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Soluciones sostenibles para emprendedores y fans del arte. Acabados de alta calidad en textil y rigidos.",
    author: "Cliente verificado",
    role: "Emprendedor",
  },
  {
    quote:
      "Los cuadros LED de anime son increibles. El efecto de luz transforma cualquier habitacion. Mi coleccion de Evangelion luce espectacular.",
    author: "Fan del anime",
    role: "Coleccionista",
  },
  {
    quote:
      "Las bolsas de tocuyo sublimadas son perfectas para mi marca. Mis clientes aman el detalle eco-friendly y los colores vibrantes.",
    author: "Emprendedora",
    role: "Marca de ropa",
  },
]

const socials = [
{
  name: "TikTok",
  handle: "@shazelecoprint",
  url: "https://www.tiktok.com/@shazelecoprint",
  color: "group-hover:bg-[#000000] group-hover:text-white",
  icon: (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      fill="currentColor" 
      className="h-5 w-5"
    >
      {/* Este es el path exacto de Font Awesome Brands para TikTok */}
      <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
    </svg>
  ),
},
  {
    name: "Instagram",
    handle: "@shazelecoprint",
    url: "https://www.instagram.com/shazelecoprint/",
    color: "group-hover:bg-gradient-to-br group-hover:from-[#833AB4] group-hover:via-[#FD1D1D] group-hover:to-[#F77737] group-hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "Shazel Ecoprint",
    url: "https://www.facebook.com/profile.php?id=61583767568616",
    color: "group-hover:bg-[#1877F2] group-hover:text-white",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
]

export function SocialProof() {
  return (
    <section id="portafolio" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Testimonios
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-20">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`star-${t.author}-${i}`}
                    size={16}
                    className="fill-[#F59E0B] text-[#F59E0B]"
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground italic">
                {`"${t.quote}"`}
              </p>
              <div className="mt-auto">
                <p className="text-sm font-semibold text-card-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Cards */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Comunidad
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Siguenos en Redes
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-pretty">
            Descubre nuestras creaciones, tutoriales y detras de camaras.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 ${social.color}`}
              >
                {social.icon}
              </div>
              <div className="text-center">
                <p className="font-heading text-lg font-semibold text-card-foreground">
                  {social.name}
                </p>
                <p className="text-sm text-muted-foreground">{social.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
