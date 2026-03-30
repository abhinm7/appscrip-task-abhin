import type { Metadata } from "next"
import { GET } from "./api/products/route"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ShopLayout from "./components/ShopLayout"
import Footer from "./components/Footer"

export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "Discover Our Products | Premium Store",
  description:
    "Browse our premium product collection. Filter by category, style, and preference.",
}

export default async function Home() {
  const res = await GET()
  const products = await res.json()

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: products.map((product: any, index: number) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://yourdomain.com/product/${product.id}`,
      name: product.title,
      image: product.image,
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <ShopLayout products={products} />
        </main>
        <Footer />
      </div>
    </>
  )
}