"use client"

import { useState } from "react"
import Image from "next/image"
import { Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [magicOn, setMagicOn] = useState(false)

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* B/W background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-evangelion.jpg"
          alt="Cuadro LED apagado - escena monocromatica"
          fill
          className={`object-cover transition-all duration-1000 ease-in-out ${
            magicOn ? "opacity-0" : "opacity-100 grayscale brightness-[0.45]"
          }`}
          priority
        />
      </div>

      {/* Color background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-evangelion-color.jpg"
          alt="Cuadro LED encendido - escena a todo color con efecto neon"
          fill
          className={`object-cover transition-all duration-1000 ease-in-out ${
            magicOn ? "opacity-100" : "opacity-0"
          }`}
          priority
        />
      </div>

      {/* Neon glow overlay when magic is on */}
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ${
          magicOn
            ? "opacity-100"
            : "opacity-0"
        }`}
        style={{
          background: magicOn
            ? "radial-gradient(ellipse at center, rgba(123,198,126,0.15) 0%, transparent 60%), linear-gradient(180deg, transparent 40%, rgba(29,78,137,0.25) 100%)"
            : "none",
        }}
      />

      {/* Dark base overlay for readability */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          magicOn ? "bg-foreground/10" : "bg-foreground/50"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
          <span className="text-sm font-medium text-white/90">
            Sublimacion Sostenible
          </span>
        </div>

        <h1 className="font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl text-balance">
          Arte que{" "}
          <span
            className={`transition-all duration-700 ${
              magicOn
                ? "text-[#7BC67E] drop-shadow-[0_0_20px_rgba(123,198,126,0.6)]"
                : "text-white"
            }`}
          >
            cobra vida
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 sm:text-xl text-pretty leading-relaxed">
          Cuadros LED que transforman tus recuerdos con un click.
          Regalos personalizados eco-friendly que sorprenden.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            onClick={() => setMagicOn(!magicOn)}
            className={`rounded-2xl px-8 py-6 text-base font-bold uppercase tracking-wide transition-all duration-500 ${
              magicOn
                ? "bg-[#7BC67E] text-[#0a2e0a] hover:bg-[#7BC67E]/90 shadow-[0_0_40px_rgba(123,198,126,0.5)]"
                : "bg-white/10 text-white backdrop-blur-md border border-white/30 hover:bg-white/20"
            }`}
          >
            <Zap size={20} className={`mr-2 ${magicOn ? "fill-current" : ""}`} />
            {magicOn ? "Magia Encendida" : "Encender Magia"}
          </Button>

          <Button
            asChild
            size="lg"
            className="rounded-2xl bg-[#1D4E89] px-8 py-6 text-base font-semibold text-white hover:bg-[#1D4E89]/90"
          >
            <a href="#productos">Ver Productos</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/50 uppercase tracking-widest">Explorar</span>
          <div className="h-10 w-px bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  )
}
