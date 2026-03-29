import ArrowDown from "./icons/ArrowDown";

function FilterAccordion({ title }: { title: string }) {
  return (
    <details className="group border-b border-gray-200 py-5 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex justify-between items-center cursor-pointer list-none select-none">
        <div className="flex flex-col">
          <span className="font-bold text-gray-900 text-[14px] lg:text-[18px] tracking-wide uppercase">
            {title}
          </span>
          <span className="text-gray-500 text-[14px] lg:text-[18px] mt-1">All</span>
        </div>
        
        <span className="transition-transform duration-300 group-open:rotate-180 text-gray-900">
          <ArrowDown direction='down'/>
        </span>
      </summary>
      
      <div className="pt-6 pb-2 text-sm text-gray-600 flex flex-col gap-4">
        <span className="text-gray-400 underline cursor-pointer hover:text-gray-900 w-fit mb-2">Unselect all</span>
        {['Men', 'Women', 'Baby & Kids'].map((option) => (
          <label key={option} className="flex items-center gap-3 font-medium cursor-pointer">
            <input type="checkbox" className="w-4 h-4 accent-black border-gray-300 rounded-sm cursor-pointer" /> 
            <span className="text-[14px] text-gray-800">{option}</span>
          </label>
        ))}
      </div>
    </details>
  );
}

export default function FilterSidebar() {
  const filterCategories = [
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern"
  ];

  return (
    <div className="w-full pt-4 pr-0 lg:pr-8">
      <label className="flex items-center gap-3 cursor-pointer border-b border-gray-200 pb-6">
        <input 
          type="checkbox" 
          className="w-5 h-5 accent-black border-gray-300 rounded-sm cursor-pointer" 
        />
        <span className="font-bold text-gray-900 text-[14px] tracking-wide uppercase">
          Customizable
        </span>
      </label>

      {filterCategories.map((category) => (
        <FilterAccordion key={category} title={category} />
      ))}
    </div>
  );
}