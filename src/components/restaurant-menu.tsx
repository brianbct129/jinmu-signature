import { menuItems } from "@/data/menu-data"
import { Star, Award, Flame } from "lucide-react"
import { RestaurantMenuProps } from "@/types/menu";


export default function RestaurantMenu({ 
    onSeeMenuClick, } : RestaurantMenuProps) {

    // Tag components
    const TagIcon = ({ tag }: { tag: string }) => {
        switch (tag) {
            case "chef":
            return (
                <div className="tooltip cursor-pointer" data-tip="Chef's Recommendation">
                    <Award size={20} className="text-amber-600" />
                </div>
            )
            case "favorite":
            return (
                <div className="tooltip cursor-pointer" data-tip="Customer Favorite">
                    <Star size={20} className="text-amber-500" />
                </div>
            )
            case "spicy":
            return (
                <div className="tooltip cursor-pointer" data-tip="Spicy">
                    <Flame size={20} className="text-red-500" />
                </div>
            )
            default:
            return null
        }
    }

    return (
        <div className="bg-white bg-[url('/Bg-menu-jinmu.png')] bg-opacity-95 bg-fixed bg-cover max-w-screen-xl w-full mx-auto">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* restaurant logo */}

                 <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-5xl text-[#e9cd92] mb-8 tracking-wide">JINMU SIGNATURE</h1>

                <div className="text-center mb-12">
                    <div className="inline-block h-0.5 w-16 bg-amber-500 mx-2"></div>
                    <span className="text-[#e9cd92] font-light tracking-widest text-sm">MENU CATEGORY JINMU</span>
                    <div className="inline-block h-0.5 w-16 bg-amber-500 mx-2"></div>
                </div>

                {/* menu section */}
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-3">
                    {menuItems.map((menu, index) => (
                        <div key={index} className="mb-10">
                            <div className="relative mb-8">
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