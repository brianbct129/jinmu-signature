import Head from "next/head";
import Image from "next/image";
import RestaurantMenu from "@/components/restaurant-menu";
import Dumpling from "@/components/jinmu-menu/dumpling/dumpling";
import Dimsum from "@/components/jinmu-menu/dimsum/dimsum";
import { useRef } from 'react';
import SaladSoup from "@/components/jinmu-menu/salad_soup/salad_soup";
import SeaFood from "@/components/jinmu-menu/seafood/seafood";
import Poultry from "@/components/jinmu-menu/poultry/poultry";
import Pork from "@/components/jinmu-menu/pork/pork";
import Beef from "@/components/jinmu-menu/beef/beef";
import Tofu from "@/components/jinmu-menu/tofu/tofu";
import OthersMenu from "@/components/jinmu-menu/others/others";
import RiceMenu from "@/components/jinmu-menu/rice_dll/rice";
import VegetableMenu from "@/components/jinmu-menu/vegetable/vegetable";
import DessertMenu from "@/components/jinmu-menu/dessert/dessert";
import BeveragesMenu from "@/components/jinmu-menu/beverages/beverages";
import LamianMenu from "@/components/jinmu-menu/lamian/lamian";


export default function Home() {
  const home1 = "/PNG-Main-Menu/90.webp";
  const home2 = "/PNG-Main-Menu/93.webp";
  const home3 = "/PNG-Main-Menu/94.webp";

  const kondisiScroll = useRef<string>('Dumpling')
  // menuref
  const menuRef = useRef<HTMLDivElement>(null);
  const toMenu = () => {
    if(
      kondisiScroll.current === "Dumpling" || kondisiScroll.current === "Dim Sum" || kondisiScroll.current === "Salad & Soup" || kondisiScroll.current === "Seafood" || kondisiScroll.current === "Poultry" || kondisiScroll.current === "Pork" || kondisiScroll.current === "Beef"
    ){
      menuRef.current?.scrollIntoView({ behavior: 'smooth'})
    } else {
      menuRef.current?.scrollIntoView({ behavior: 'instant'})
    }
  }

  // scroll
  const dumplingRef = useRef<HTMLDivElement>(null);
  const dimsumRef = useRef<HTMLDivElement>(null);
  const saladSoupRef = useRef<HTMLDivElement>(null);
  const seafoodRef = useRef<HTMLDivElement>(null);
  const poultryRef = useRef<HTMLDivElement>(null);
  const porkRef = useRef<HTMLDivElement>(null);
  const beefRef = useRef<HTMLDivElement>(null);
  const tofuRef = useRef<HTMLDivElement>(null);
  const othersRef = useRef<HTMLDivElement>(null);
  const lamianRef = useRef<HTMLDivElement>(null);
  const riceRef = useRef<HTMLDivElement>(null);
  const vegetableRef = useRef<HTMLDivElement>(null);
  const dessertRef = useRef<HTMLDivElement>(null);
  const beveragesRef = useRef<HTMLDivElement>(null);


    
  return (
    <>
    <Head>
      <title>JINMU SIGNATURE</title>
      <meta name="description" content="Refinning the comfort your Chinnese dinning experience" />
    </Head>
    <div className="flex flex-col items-center justify-center">

      <div className="fixed bottom-10 right-2 z-50">
        <button onClick={toMenu} className="bg-gradient-to-r from-[#c7a459] to-[#e6d3a1] text-[#0f2e2d] font-serif tracking-widest px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
          MENU
        </button>
      </div>

      <Image
        priority
        src={home1}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />
      <Image
        priority
        src={home3}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />

      {/* restaurant menu */}
      <div ref={menuRef} className="w-full" style={{ maxWidth: '1200px'}}>
        <RestaurantMenu onSeeMenuClick={(category : string) => {
          if (category === 'Dumpling') {
            kondisiScroll.current = category
            dumplingRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Dim Sum') {
            kondisiScroll.current = category
            dimsumRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Salad & Soup') {
            kondisiScroll.current = category
            saladSoupRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Seafood') {
            kondisiScroll.current = category
            seafoodRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Poultry') {
            kondisiScroll.current = category
            poultryRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Pork') {
            kondisiScroll.current = category
            porkRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Beef') {
            kondisiScroll.current = category
            beefRef.current?.scrollIntoView({ behavior: 'smooth'})
          } else if (category === 'Tofu') {
            kondisiScroll.current = category
            tofuRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'Others') {
            kondisiScroll.current = category
            othersRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'La Mian') {
            kondisiScroll.current = category
            lamianRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'Rice') {
            kondisiScroll.current = category
            riceRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'Vegetable') {
            kondisiScroll.current = category
            vegetableRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'Dessert') {
            kondisiScroll.current = category
            dessertRef.current?.scrollIntoView({ behavior: 'instant'})
          } else if (category === 'Beverages') {
            kondisiScroll.current = category
            beveragesRef.current?.scrollIntoView({behavior: 'instant'})
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

      <div ref={saladSoupRef} className="">
        <SaladSoup />
      </div>

      <div ref={seafoodRef} className="">
        <SeaFood />
      </div>

      <div ref={poultryRef} className="">
        <Poultry />
      </div>

      <div ref={porkRef} className="">
        <Pork />
      </div>

      <div ref={beefRef} className="">
        <Beef />
      </div>

      <div ref={tofuRef} className="">
        <Tofu />
      </div>

      <div ref={othersRef} className="">
        <OthersMenu />
      </div>

      <div ref={lamianRef} className="">
        <LamianMenu />
      </div>

      <div ref={riceRef} className="">
        <RiceMenu />
      </div>

      <div ref={vegetableRef} className="">
        <VegetableMenu />
      </div>

      <div ref={dessertRef} className="">
        <DessertMenu />
      </div>

      <div ref={beveragesRef} className="">
        <BeveragesMenu />
      </div>

      <Image
        priority
        src={home2}
        alt="Menu Jinmu"
        width={1200}
        height={0}
        layout="intrinsic"
      />

    </div>
    </>
  );
}
