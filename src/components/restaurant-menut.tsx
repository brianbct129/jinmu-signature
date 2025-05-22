import { menuItems } from "@/data/menu-data"
import { Star, Award, Flame } from "lucide-react"


export default function RestaurantMenu() {

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
        <div className="bg-white bg-[url('/bamboo-pattern.svg')] bg-opacity-95 bg-fixed bg-repeat w-[1200px]">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                {/* restaurant logo */}

                 <h1 className="text-center font-serif text-4xl md:text-5xl text-red-800 mb-8 tracking-wide">JINMU SIGNATURE</h1>

                <div className="text-center mb-12">
                    <div className="inline-block h-0.5 w-16 bg-amber-500 mx-2"></div>
                    <span className="text-amber-800 font-light tracking-widest text-sm">AUTHENTIC CUISINE</span>
                    <div className="inline-block h-0.5 w-16 bg-amber-500 mx-2"></div>
                </div>

                {/* menu section */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {menuItems.map((menu, index) => (
                        <div key={index} className="mb-10">
                            <div className="relative mb-8">
                                <div className="flex justify-between ">
                                    <div className="flex">
                                        <h2 className={`font-serif text-2xl font-bold text-red-800 tracking-wider px-2 py-1 ${index % 2 !== 0 ? "text-end " : "" }`}>
                                            {menu.category}
                                        </h2>
                                        <div className="flex space-x-1 pt-3">
                                            {menu.tags.map((tag, tagIndex) => (
                                                <TagIcon key={tagIndex} tag={tag} />
                                            ))}
                                        </div>
                                    </div>

                                    <button className="text-white px-5 py-1 bg-red-800 rounded-xl cursor-pointer hover:bg-red-700 transition-colors duration-200">see menu</button>
                                </div>
                                <div className="border-b border-amber-300 w-full mt-2"></div>
                                {/* <div className={`absolute -bottom-1 h-0.5 w-12 bg-red-800 right-0`}></div> */}
                            </div>
                        </div>
                    ))}
                 </div>
            </div>
        </div>
    )
}