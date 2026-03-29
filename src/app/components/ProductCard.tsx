import Image from 'next/image';
import HeartIcon from './icons/HeartIcon';

export default function ProductCard({ product }: { product: any }) {
  return (
    <article className="flex flex-col gap-4">
      <div className="relative w-full aspect-3/4 bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
        <Image 
          src={product.image} 
          alt={product.title} 
          fill 
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-6 hover:scale-105 transition-transform duration-300" 
        />
      </div>
      
      {/* Title, Subtext & Heart Layout */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex flex-col gap-2 overflow-hidden">
          <h2 className="text-[14px] lg:text-[18px] font-bold text-gray-900 truncate uppercase">
            {product.title}
          </h2>
          <p className="text-[12px] text-gray-500 truncate">
            <a href="#" className="text-gray-900 underline decoration-gray-400">Sign in</a> or Create an account to see pricing
          </p>
        </div>
        
        {/* The Heart Icon */}
        <button aria-label="Favorite" className="shrink-0 mt-1">
          <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-800 hover:text-red-500 transition-colors" />
        </button>
      </div>
    </article>
  );
}