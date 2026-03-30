"use client";

import { useState, useEffect } from 'react';
import ControlBar from './ControlBar';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';

export default function ShopLayout({ products }: { products: any[] }) {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  return (
    <section className='w-full px-1 lg:px-24'>
      <ControlBar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <div className="flex flex-col lg:flex-row gap-8 px-2 lg:p-0">
        
        {isSidebarOpen && (
          <aside className="w-full lg:w-75 shrink-0 animate-fade-in">
            <FilterSidebar />
          </aside>
        )}

        <div id='shop' className="flex-1">
          <ProductGrid products={products} />
        </div>
      </div>
    </section>
  );
}