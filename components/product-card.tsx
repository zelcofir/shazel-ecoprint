"use client"

import { useState } from "react"
import Image from "next/image"
import { Sparkles, Zap, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { ProductModal } from "@/components/product-modal"

interface ProductCardProps {
  product: Product
  featured?: boolean
}

export function ProductCard({ product, featured }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const [ledActive, setLedActive] = useState(false)

  const isLed = product.category === "anime" || product.category === "kpop"

  const categoryLabel: Record<string, string> = {
    anime: "Anime Edition",
    kpop: "K-Pop Universe",
    tocuyo: "Eco-Tocuyo",
    polos: "Polos & Textiles",
  }

  return (
    <>
      <div
        className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className={`object-cover transition-all duration-700 ${
              isLed && ledActive
                ? "grayscale-0 brightness-110 saturate-[1.3]"
                : isLed
                  ? "grayscale brightness-75"
                  : "group-hover:scale-105 transition-transform duration-500"
            }`}
          />
          {/* LED glow overlay */}
          {isLed && ledActive && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#7BC67E]/20 via-transparent to-[#1D4E89]/15 animate-pulse" />
          )}
          {product.badge && (
            <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground border-0 font-semibold">
              {product.badge}
            </Badge>
          )}
          {/* Night-light indicator for LED products */}
          {isLed && (
            <div className="absolute top-3 right-3">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-500 ${
                  ledActive
                    ? "bg-[#7BC67E] shadow-[0_0_16px_rgba(123,198,126,0.6)]"
                    : "bg-foreground/30 backdrop-blur-sm"
                }`}
              >
                <Zap size={14} className={`text-white ${ledActive ? "fill-current" : ""}`} />
              </div>
            </div>
          )}
          {/* Video link for tocuyo */}
          {product.videoUrl && (
            <a
              href={product.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-xl bg-foreground/70 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white transition-all hover:bg-foreground/90"
            >
              <Play size={12} className="fill-current" />
              Ver video
            </a>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-3 p-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              {categoryLabel[product.category]}
            </p>
            <h3 className="mt-1 font-heading text-lg font-semibold text-card-foreground">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.description}
          </p>

          <div className="mt-auto flex items-center gap-2 pt-2">
            {isLed && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLedActive(!ledActive)}
                className={`rounded-xl text-xs transition-all duration-300 bg-transparent ${
                  ledActive
                    ? "border-[#7BC67E] text-[#0a2e0a] bg-[#7BC67E]/10"
                    : "border-border"
                }`}
              >
                <Zap
                  size={14}
                  className={`mr-1 ${ledActive ? "fill-current text-[#7BC67E]" : ""}`}
                />
                {ledActive ? "LED ON" : "Light it up"}
              </Button>
            )}
            <Button
              size="sm"
              onClick={() => setModalOpen(true)}
              className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 ml-auto"
            >
              <Sparkles size={14} className="mr-1" />
              Personalizar
            </Button>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </>
  )
}
