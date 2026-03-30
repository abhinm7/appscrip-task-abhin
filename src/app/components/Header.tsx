import Link from 'next/link';
import LogoIcon from './icons/LogoIcon';
import SearchIcon from './icons/SearchIcon';
import HeartIcon from './icons/HeartIcon'; 
import BagIcon from './icons/BagIcon';
import ProfileIcon from './icons/ProfileIcon';
import ArrowDown from './icons/ArrowDown';
import Hamburger from './icons/Hamburger';

export default function Header() {
  return (
    <>
      <header className="w-full bg-white">
        <div className="w-full px-4.25 lg:px-24 h-16 md:h-20 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-2 shrink-0">
            <button aria-label="Open Menu" className="block lg:hidden text-black">
              <Hamburger />
            </button>

            <LogoIcon className="text-black w-5 h-5 lg:w-9 lg:h-9" />
          </div>

          {/* Center */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link
              href="/"
              className="font-inter font-extrabold tracking-[1px] text-black text-[20px] lg:text-[36px]"
            >
              LOGO
            </Link>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3 lg:gap-6 shrink-0">
            <SearchIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            <HeartIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            <BagIcon className="w-5 h-5 lg:w-6 lg:h-6" />
            <ProfileIcon className="hidden lg:block w-6 h-6" />

            <span className="hidden lg:flex items-center gap-1 text-sm font-semibold cursor-pointer">
              ENG <ArrowDown direction="down" />
            </span>
          </div>

        </div>

        <nav
          className="hidden lg:flex w-full justify-center py-4 border-b border-gray-100 px-24"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-16 text-sm font-bold leading-[100%] tracking-[1px] text-[20px]  text-gray-900">
            <li><Link href="#shop" className="hover:text-gray-600 transition-colors">SHOP</Link></li>
            <li><Link href="/" className="hover:text-gray-600 transition-colors">SKILLS</Link></li>
            <li><Link href="/" className="hover:text-gray-600 transition-colors">STORIES</Link></li>
            <li><Link href="#contact" className="hover:text-gray-600 transition-colors">ABOUT</Link></li>
            <li><Link href="#contact" className="hover:text-gray-600 transition-colors">CONTACT US</Link></li>
          </ul>
        </nav>

      </header>

      <div className="w-full px-4.25 py-4 lg:hidden">
        <span className="text-gray-400 text-xs tracking-widest">HOME</span>
        <span className="text-gray-300 text-xs mx-2">|</span>
        <span className="text-black text-xs tracking-widest">SHOP</span>
      </div>
    </>
  );
}