import SortDropdown from "./Dropdown";
import ArrowDown from "./icons/ArrowDown";

interface ControlBarProps {
    productCount: number;
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

export default function ControlBar({ productCount, isSidebarOpen, toggleSidebar }: ControlBarProps) {
    return (
        <div className="w-full py-1 lg:py-6 border-y border-gray-200 mb-3">

            {/* Desktop Layout */}
            <div className="hidden lg:flex justify-between items-center w-full">
                <div className="flex items-center gap-12">
                    <span className="text-[18px] font-bold text-gray-900 tracking-wider">
                        {productCount} ITEMS
                    </span>
                    <button
                        onClick={toggleSidebar}
                        className="flex items-center gap-2 text-[16px] text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        <ArrowDown
                            direction={!isSidebarOpen ? "left" : "right"}
                            className="w-4 h-4 block"
                        />
                        <span className="underline mt-1 font-caslon decoration-gray-300 underline-offset-4">
                            {isSidebarOpen ? 'HIDE FILTER' : 'SHOW FILTER'}
                        </span>
                    </button>
                </div>

                <div className="hidden lg:block">
                    <SortDropdown />
                </div>
            </div>

            {/* Small Screen Layout */}
            <div className="flex lg:hidden w-full justify-between items-center text-[14px] font-bold">
                <button
                    onClick={toggleSidebar}
                    className="font py-2 border-b border-transparent hover:border-black w-1/2 text-center text-gray-900"
                >
                    FILTERS
                </button>

                <span className="text-gray-300 mx-2 text-lg font-light">|</span>

                <button className="py-2 w-1/2 text-center text-gray-900 flex justify-center items-center gap-2">
                    RECOMMENDED <ArrowDown direction="down" />
                </button>
            </div>

        </div>
    );
}