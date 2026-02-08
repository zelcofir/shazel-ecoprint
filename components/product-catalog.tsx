"use client"

import { useState } from "react"
import { Sparkles, Music, Leaf, Shirt, Frame } from "lucide-react"
import { products } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

const categories = [
  { id: "all", label: "Todos", icon: null },
  { id: "anime", label: "Anime Edition", icon: Sparkles },
  { id: "kpop", label: "K-Pop Universe", icon: Music },
  { id: "cuadros", label: "Cuadros Aluminio", icon: Frame },
  { id: "tocuyo", label: "Eco-Tocuyo", icon: Leaf },
  { id: "polos", label: "Polos & Textiles", icon: Shirt },
] as const

export function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory)

  return (
    <section id="productos" className="py-20 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Catalogo
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-foreground sm:text-4xl text-balance">
            Productos Eco-Friendly
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto text-pretty">
            Cuadros LED, bolsas de tocuyo sublimadas, cuadros de aluminio y textiles personalizados.
            Materiales responsables, impresion de alta calidad.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {Icon && <Icon size={16} />}
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Tocuyo intro banner */}
        {(activeCategory === "tocuyo" || activeCategory === "all") && (
          <div className="mb-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center max-w-2xl mx-auto">
            <Leaf size={24} className="mx-auto mb-3 text-accent-foreground" />
            <p className="text-sm leading-relaxed text-muted-foreground text-pretty">
              En Shazel Ecoprint entendemos que tu marca es importante, y tambien lo es el planeta.
              Nuestras bolsas de tocuyo son la alternativa perfecta al plastico.
            </p>
          </div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              featured={index === 0 && activeCategory !== "all"}
            />
          ))}
        </div>

        {/* Tocuyo video CTA */}
        {(activeCategory === "all" || activeCategory === "tocuyo") && (
          <div className="mt-8 flex justify-center">
            <a
              href="https://youtu.be/IMjJ-d38vTk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-accent/15 border border-accent/30 px-6 py-4 transition-all hover:bg-accent/25 hover:shadow-md"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <Leaf size={20} className="text-accent-foreground" />
              </div>
              <div className="text-left">
                <span className="text-sm font-semibold text-foreground block">
                  El Secreto Revelado: Sublimacion en Tocuyo Natural
                </span>
                <span className="text-xs text-muted-foreground">
                  Mira el video y descubre como logramos colores vibrantes en algodon organico
                </span>
              </div>
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
