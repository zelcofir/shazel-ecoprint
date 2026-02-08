"use client"

import Image from "next/image"
import { useState } from "react"
import { Check, ShoppingBag } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products"
import { addToCart } from "@/lib/cart-store"

interface ProductModalProps {
  product: Product
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProductModal({ product, open, onOpenChange }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0])
  const [added, setAdded] = useState(false)

  function handleAdd() {
    addToCart({
      id: product.id,
      name: product.name,
      category: product.category,
      size: selectedSize,
      material: selectedMaterial,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg rounded-2xl p-0 overflow-hidden">
        <div className="relative aspect-video">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground border-0">
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="p-6">
          <DialogHeader>
            <DialogTitle className="font-heading text-xl">{product.name}</DialogTitle>
            <DialogDescription className="text-muted-foreground leading-relaxed">
              {product.description}
            </DialogDescription>
          </DialogHeader>

          {/* Size selection */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-card-foreground mb-2">Tamano</p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`rounded-xl border px-3 py-1.5 text-sm transition-all ${
                    selectedSize === size
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Material selection */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-card-foreground mb-2">Material</p>
            <div className="flex flex-wrap gap-2">
              {product.materials.map((material) => (
                <button
                  key={material}
                  onClick={() => setSelectedMaterial(material)}
                  className={`rounded-xl border px-3 py-1.5 text-sm transition-all ${
                    selectedMaterial === material
                      ? "border-primary bg-primary/10 text-primary font-medium"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {material}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <Button
            onClick={handleAdd}
            className={`mt-6 w-full rounded-2xl py-5 text-base font-semibold transition-all duration-300 ${
              added
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground hover:bg-primary/90"
            }`}
          >
            {added ? (
              <>
                <Check size={18} className="mr-2" />
                Agregado al carrito
              </>
            ) : (
              <>
                <ShoppingBag size={18} className="mr-2" />
                Agregar al carrito
              </>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
