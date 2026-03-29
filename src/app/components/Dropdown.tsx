"use client";

import { useState, useRef, useEffect } from 'react';
import ArrowDown from './icons/ArrowDown';

const sortOptions = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE : HIGH TO LOW',
  'PRICE : LOW TO HIGH',
];

export default function SortDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(sortOptions[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[14px] lg:text-[16px] font-bold text-gray-900 flex items-center gap-2 uppercase"
      >
        {selected} 
        <span className={`text-gray-500 text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
         <ArrowDown direction='down'/>
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-58.75 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 z-50 py-6">
          {sortOptions.map((option) => (
            <button
              key={option}
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
              className={`w-full text-right px-6 py-4 text-[18px] flex justify-end items-center gap-3 hover:bg-gray-50 transition-colors ${
                selected === option ? 'font-semibold text-gray-900' : 'text-black-500'
              }`}
            >
              {/* Conditionally render the checkmark strictly for the selected item */}
              {selected === option && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M3 8l3 3 7-7" />
                </svg>
              )}
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}