import Link from 'next/link';
import GpayIcon from './icons/GpayIcon';
import InstagramIcon from './icons/InstagramIcon';
import UsaFlagIcon from './icons/UsaFlagIcon';
import LinkedinIcon from './icons/LinkedinIcon';
import MaterCard from './icons/MaterCard';
import Paypal from './icons/Paypal';
import AmexIcon from './icons/AmexIcon';
import ApplePay from './icons/ApplePay';
import ShopPay from './icons/ShopPay';
import ArrowDown from './icons/ArrowDown';

export default function Footer() {
    return (
        <footer id='contact' className="w-full bg-black text-white pt-12 lg:pt-16 mt-10 pb-6 px-4.25 lg:px-24">

            {/* --- TOP SECTION --- */}
            <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">

                <div className="w-full lg:w-1/2 flex flex-col gap-4">
                    <h3 className="font-bold text-[16px] lg:text-[20px] uppercase tracking-wide">
                        Be the first to know
                    </h3>
                    <p className="text-[14px] text-white/80 hidden lg:block">
                        Sign up for updates from mettā muse.
                    </p>
                    <p className="text-[14px] text-white/80 block lg:hidden">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
                    </p>

                    <div className="flex items-center gap-4 mt-2">
                        <input
                            type="email"
                            placeholder="Enter your e-mail..."
                            className="px-4 py-3 w-full max-w-70 bg-white text-black outline-none"
                        />
                        <button className="px-6 py-3 border border-white/50 rounded-sm text-white/50 hover:text-white hover:border-white transition-colors uppercase font-semibold text-[14px]">
                            Subscribe
                        </button>
                    </div>
                </div>

                {/* Right: Contact & Currency */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-8 lg:pl-24">

                    <div className="flex flex-col gap-2 border-b border-[#E5E5E5] lg:border-none pb-6 lg:pb-0">
                        <h3 className="font-bold text-[16px] lg:text-[20px] uppercase tracking-wide block lg:hidden mb-2">
                            Call Us
                        </h3>
                        <h3 className="font-bold text-[16px] lg:text-[20px] uppercase tracking-wide hidden lg:block">
                            Contact Us
                        </h3>
                        <div className="flex font-simplon flex-row items-center gap-2 lg:gap-4 text-[14px]">
                            <span>+44 221 133 5360</span>
                            <span className="hidden lg:block">|</span>
                            <span className="block lg:hidden text-white/60 text-[10px]">♦</span>
                            <span>customercare@mettamuse.com</span>
                        </div>
                    </div>

                    {/* Currency Block */}
                    <div className="flex flex-col gap-2 border-b-2 border-white lg:border-none pb-6 lg:pb-0">
                        <h3 className="font-bold text-[16px] lg:text-[20px] uppercase tracking-wide">
                            Currency
                        </h3>
                        <div className="flex items-center gap-2 font-bold text-[14px]">
                            <UsaFlagIcon /> <span className="text-[10px] block lg:hidden">♦</span> USD
                        </div>
                        <p className="text-[12px] text-white/60 mt-1 hidden lg:block">
                            Transactions will be completed in Euros and a currency reference is available on hover.
                        </p>
                    </div>
                </div>
            </div>

            <hr className="border-white my-8 hidden lg:block" />

            {/* DESKTOP LAYOUT (Grid) */}
            <div className="hidden lg:flex justify-between items-start">
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-[20px] tracking-wide">mettā muse</h3>
                    <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Stories</Link></li>
                        <li><Link href="#">Artisans</Link></li>
                        <li><Link href="#">Boutiques</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">EU Compliances Docs</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-[16px] uppercase tracking-wide">Quick Links</h3>
                    <ul className="flex flex-col gap-3 text-[14px] text-white/80">
                        <li><Link href="#">Orders & Shipping</Link></li>
                        <li><Link href="#">Join/Login as a Seller</Link></li>
                        <li><Link href="#">Payment & Pricing</Link></li>
                        <li><Link href="#">Return & Refunds</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[16px] uppercase tracking-wide">Follow Us</h3>
                        <div className="flex items-center gap-4">
                            <InstagramIcon />
                            <LinkedinIcon />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[16px] uppercase tracking-wide">mettā muse Accepts</h3>
                        <div className="flex items-center gap-2 flex-wrap">
                            <GpayIcon /> <MaterCard /> <Paypal /> <AmexIcon /> <ApplePay /> <ShopPay />
                        </div>
                    </div>
                </div>
            </div>

            {/* MOBILE LAYOUT (Accordions) */}
            <div className="flex flex-col lg:hidden w-full">
                <details className="group border-b border-[#E5E5E5] py-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex justify-between items-center font-bold text-[16px] uppercase tracking-wide cursor-pointer">
                        mettā muse
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowDown direction="down" />
                        </span>
                    </summary>
                    <ul className="pt-4 flex flex-col gap-3 text-[14px] text-white/80">
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Stories</Link></li>
                        <li><Link href="#">Artisans</Link></li>
                        <li><Link href="#">Boutiques</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">EU Compliances Docs</Link></li>
                    </ul>
                </details>

                <details className="group border-b border-[#E5E5E5] py-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex justify-between items-center font-bold text-[16px] uppercase tracking-wide cursor-pointer">
                        Quick Links
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowDown direction="down" />
                        </span>
                    </summary>
                    <ul className="pt-4 flex flex-col gap-3 text-[14px] text-white/80">
                        <li><Link href="#">Orders & Shipping</Link></li>
                        <li><Link href="#">Join/Login as a Seller</Link></li>
                        <li><Link href="#">Payment & Pricing</Link></li>
                        <li><Link href="#">Return & Refunds</Link></li>
                        <li><Link href="#">FAQs</Link></li>
                        <li><Link href="#">Privacy Policy</Link></li>
                        <li><Link href="#">Terms & Conditions</Link></li>
                    </ul>
                </details>

                <details className="group border-b border-[#E5E5E5] py-4 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex justify-between items-center font-bold text-[16px] uppercase tracking-wide cursor-pointer">
                        Follow Us
                        <span className="transition-transform duration-300 group-open:rotate-180">
                            <ArrowDown direction="down" />
                        </span>
                    </summary>
                    <div className="pt-4 flex items-center gap-4">
                        <InstagramIcon />
                        <LinkedinIcon />
                    </div>
                </details>

                {/* Payment Icons (Static on mobile) */}
                <div className="flex flex-col gap-4 mt-6">
                    <h3 className="font-bold text-[16px] uppercase tracking-wide">mettā muse Accepts</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                        <GpayIcon /> <MaterCard /> <Paypal /> <AmexIcon /> <ShopPay />
                    </div>
                </div>
            </div>

            {/* --- COPYRIGHT --- */}
            <div className="text-center mt-12 mb-4 text-[12px] text-white/60">
                Copyright © 2023 mettamuse. All rights reserved.
            </div>

        </footer>
    );
}