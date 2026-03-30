import ProductCard from './ProductCard';

export default function ProductGrid({ products }: { products: any[] }) {
  console.log(products)
  // If the API fails or is loading
  if (!products || products.length === 0) {
    return <div className="text-center py-20 font-bold">No products found.</div>;
  }

  return (
    // 2 columns on mobile, 3 on tablets, 4 on large screens
    <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-8 lg:gap-y-16">
      {products.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}