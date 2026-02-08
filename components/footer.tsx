import Image from "next/image"
import { Clock, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Shazel Ecoprint" width={48} height={48} className="rounded-full" />
              <div>
                <p className="font-heading text-lg font-bold text-card-foreground">Shazel Ecoprint</p>
                <p className="text-xs text-muted-foreground">Sublimacion Sostenible</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground max-w-xs">
              Lideres en sublimacion eco-friendly. Transformamos tus ideas en productos personalizados que cuidan el planeta.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading text-sm font-semibold text-card-foreground uppercase tracking-wider mb-4">
              Navegacion
            </p>
            <nav className="flex flex-col gap-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Productos", href: "#productos" },
                { label: "Portafolio", href: "#portafolio" },
                { label: "Contacto", href: "#contacto" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <p className="font-heading text-sm font-semibold text-card-foreground uppercase tracking-wider mb-4">
              Contacto
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Clock size={16} className="text-muted-foreground shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Lun - Sab: 8:00am - 6:00pm
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-muted-foreground shrink-0" />
                <a
                  href="mailto:shazelecoprint@gmail.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  shazelecoprint@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            {new Date().getFullYear()} Shazel Ecoprint. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
