"use client"

import { MessageCircle } from "lucide-react"
import { useCart } from "@/lib/cart-store"

export function WhatsAppButton() {
  const cart = useCart()

  function buildWhatsAppMessage() {
    if (cart.length === 0) {
      const message = "Hola Shazel Ecoprint! Tengo una consulta sobre vuestros productos."
      return `https://walink.co/06b0a0?text=${encodeURIComponent(message)}`
    }

    const lines = cart.map(
      (item) => `- ${item.name} (${item.size}, ${item.material}) x${item.quantity}`
    )
    const message = `Hola Shazel Ecoprint! 🎨 Quiero personalizar mis productos. Mi carrito incluye:\n\n${lines.join("\n")}\n\n¿Cuál es el proximo paso?`
    return `https://walink.co/06b0a0?text=${encodeURIComponent(message)}`
  }

  return (
    <a
      href={buildWhatsAppMessage()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-200 hover:shadow-xl"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  )
}

