"use client"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart-drawer"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Productos", href: "#productos" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Shazel Ecoprint"
            width={44}
            height={44}
            className="rounded-full"
          />
          <span className="font-heading text-lg font-bold text-primary hidden sm:inline">
            Shazel Ecoprint
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <CartDrawer />
          <Button
            asChild
            className="rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <a
              href="https://wa.me/51961735984"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar ahora
            </a>
          </Button>
        </div>

        {/* Mobile right side */}
        <div className="flex items-center gap-2 md:hidden">
          <CartDrawer />
          <button
            className="p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menu" : "Abrir menu"}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-6 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button
            asChild
            className="mt-4 w-full rounded-2xl bg-primary text-primary-foreground"
          >
            <a
              href="https://wa.me/51961735984"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cotizar ahora
            </a>
          </Button>
        </div>
      )}
    </nav>
  )
}
