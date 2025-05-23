import Head from "next/head";
import Image from "next/image";
import RestaurantMenu from "@/components/restaurant-menut";
import Dumpling from "@/components/jinmu-menu/dumpling/dumpling";
import Dimsum from "@/components/jinmu-menu/dimsum/dimsum";
import { useRef } from 'react';
import { menuItems } from "@/data/menu-data";


export default function Home() {
  const home1 = "/PNG-Main-Menu/90.png";
  const home2 = "/PNG-Main-Menu/93.png";
  const home3 = "/PNG-Main-Menu/94.png";

  
  // menuref
  const menuRef = useRef<HTMLDivElement>(null);
  const toMenu = () => {
    menuRef.current?.scrollIntoView({ behavior: 'smooth'})
  }

  // scroll
  const dumplingRef = useRef<HTMLDivElement>(null);
  const dimsumRef = useRef<HTMLDivElement>(null);
    
  return (
    <>
    <Head>
      <title>JINMU SIGNATURE</title>
      <meta name="description" content="Refinning the comfort your Chinnese dinning experience" />
    </Head>
    <div className="flex flex-col items-center justify-center  gap-3">

      <div className="fixed bottom-10 right-2 z-50">
        <button onClick={toMenu} className="bg-gradient-to-r from-[#c7a459] to-[#e6d3a1] text-[#0f2e2d] font-serif tracking-widest px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          MENU
        </button>
      </div>

      <Image
        src={home1}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />
      <Image
        src={home2}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />
      <Image
        src={home3}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />

      {/* restaurant menu */}
      <div ref={menuRef} className="w-full xl:w-[79%]">
        <RestaurantMenu onSeeMenuClick={(category : any) => {
          if (category === 'Dumpling') {
            dumplingRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Dim Sum') {
            dimsumRef.current?.scrollIntoView({ behavior: 'smooth'})
          }
        }} />
      </div>
      {/* restaurant menu */}

      <div ref={dumplingRef} className="">
        <Dumpling />
      </div>

      <div ref={dimsumRef} className="">
        <Dimsum />
      </div>

    </div>
    </>
  );
}
