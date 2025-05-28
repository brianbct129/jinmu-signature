import { menuItems } from "@/data/menu-data"
import { RestaurantMenuProps } from "@/types/menu";


export default function RestaurantMenu({ onSeeMenuClick, } : RestaurantMenuProps) {

    return (
        <div className="bg-[url('/Bg-menu-jinmu.png')] bg-opacity-95 bg-fixed bg-contain md:bg-cover mx-auto ">
            <div className="mx-auto px-4 py-12" >
                {/* restaurant logo */}

                 <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-5xl text-[#e9cd92] mb-8 tracking-wide">Jin Mu Signature</h1>

                <div className="text-center mb-12">
                    <div className="inline-block h-0.5 w-10 md:w-16 bg-amber-500 mx-2"></div>
                    <span className="text-[#e9cd92] font-light tracking-widest text-sm">MENU CATEGORY</span>
                    <div className="inline-block h-0.5 w-10 md:w-16 bg-amber-500 mx-2"></div>
                </div>

                {/* menu section */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-1 md:gap-3">
                    {menuItems.map((menu, index) => (
                        <div key={index} className="">
                            <div className="relative mb-3 md:mb-5">
                                <div className="">
                                    <button 
                                    onClick={() => onSeeMenuClick(menu.category)}
                                    className="text-[#2a4442] py-2 bg-[#e9cd92] rounded-xl cursor-pointer transition-colors duration-200 w-full font-semibold">{menu.category}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}