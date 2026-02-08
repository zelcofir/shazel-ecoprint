"use client"

import { ShoppingBag, Trash2, X, MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart, useCartCount, removeFromCart, clearCart } from "@/lib/cart-store"

export function CartDrawer() {
  const cart = useCart()
  const count = useCartCount()

  function buildWhatsAppMessage() {
    const lines = cart.map(
      (item) => `- ${item.name} (${item.size}, ${item.material}) x${item.quantity}`
    )
    const message = `Hola Shazel Ecoprint! 🎨 Quiero personalizar mi cuadro/tote. Mi carrito incluye:\n\n${lines.join("\n")}\n\nGracias!`
    return `https://wa.me/51961735984?text=${encodeURIComponent(message)}`
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="relative p-2 text-foreground/80 hover:text-primary transition-colors"
          aria-label="Ver carrito"
        >
          <ShoppingBag size={22} />
          {count > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
              {count}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-heading text-lg">Tu Carrito ({count})</SheetTitle>
        </SheetHeader>

        {cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-muted-foreground">
            <ShoppingBag size={48} strokeWidth={1} />
            <p className="text-sm">Tu carrito esta vacio</p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              <div className="flex flex-col gap-3">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}-${item.material}`}
                    className="flex items-start gap-3 rounded-xl border border-border bg-muted/50 p-3"
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm text-card-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {item.size} &middot; {item.material}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Cantidad: {item.quantity}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id, item.size, item.material)}
                      className="p-1 text-muted-foreground hover:text-destructive transition-colors"
                      aria-label={`Eliminar ${item.name}`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 flex flex-col gap-2">
              <Button
                asChild
                className="w-full rounded-2xl bg-[#25D366] text-white hover:bg-[#25D366]/90 py-5 font-semibold"
              >
                <a href={buildWhatsAppMessage()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle size={18} className="mr-2" fill="white" />
                  Cotizar por WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full rounded-2xl bg-transparent"
              >
                Vaciar carrito
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
