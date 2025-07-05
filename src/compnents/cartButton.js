"use client"
import React from 'react'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

export default function CartButton({ product }) {
  const { addToCart } = useCart()
  const router = useRouter()

  const handleClick = () => {
    addToCart(product)
    router.push("/cart")
  }

  return (
    <button
      onClick={handleClick}
      className="bg-[#8B4513] text-white text-[0.8rem] md:text-[1rem] px-2 md:px-4 mt-2 py-1 md:py-2 mb-2 md:mb-0 rounded-[0.3rem] md:rounded-xl hover:bg-[#91572d] transition"
    >
      Add to Cart
    </button>
  )
}
