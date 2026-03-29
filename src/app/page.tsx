import type { Metadata } from "next"
import Header from "./components/Header"
import Hero from "./components/Hero"
import ShopLayout from "./components/ShopLayout"

export const metadata: Metadata = {
  title: "Discover Our Products | Premium Store",
  description:
    "Browse our premium product collection. Filter by category, style, and preference.",
}

/*
 Server-side product fetching
 Improves SEO + performance
*/
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 3600 }, // cache for 1 hour
  })

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}

export default async function Home() {
  const products = await getProducts()

  /*
   Structured data for Google
   Helps search engines understand this page is product listing
  */
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
      {/* JSON-LD Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <div className="min-h-screen bg-white flex flex-col">
        {/* navbar */}
        <Header />
        <main className="flex-1">
          <Hero />
          <ShopLayout products={products} />
        </main>

      </div>
    </>
  )
}