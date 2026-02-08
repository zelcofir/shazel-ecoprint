'use client';

import { useSyncExternalStore } from "react"

export interface CartItem {
  id: string
  name: string
  category: string
  size: string
  material: string
  quantity: number
}

let cart: CartItem[] = []
let listeners: (() => void)[] = []

function emitChange() {
  for (const listener of listeners) {
    listener()
  }
}

export function addToCart(item: Omit<CartItem, "quantity">) {
  const existing = cart.find(
    (c) => c.id === item.id && c.size === item.size && c.material === item.material
  )
  if (existing) {
    cart = cart.map((c) =>
      c === existing ? { ...c, quantity: c.quantity + 1 } : c
    )
  } else {
    cart = [...cart, { ...item, quantity: 1 }]
  }
  emitChange()
}

export function removeFromCart(id: string, size: string, material: string) {
  cart = cart.filter((c) => !(c.id === id && c.size === size && c.material === material))
  emitChange()
}

export function clearCart() {
  cart = []
  emitChange()
}

export function getCart() {
  return cart
}

export function getCartCount() {
  return cart.reduce((sum, item) => sum + item.quantity, 0)
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener]
  return () => {
    listeners = listeners.filter((l) => l !== listener)
  }
}

export function useCart() {
  return useSyncExternalStore(subscribe, getCart, getCart)
}

export function useCartCount() {
  return useSyncExternalStore(subscribe, getCartCount, getCartCount)
}
