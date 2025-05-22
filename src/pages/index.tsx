import Head from "next/head";
import Image from "next/image";
import RestaurantMenu from "@/components/restaurant-menut";

export default function Home() {
  const home1 = "/PNG-Main-Menu/90.png";
  const home2 = "/PNG-Main-Menu/93.png";
  const home3 = "/PNG-Main-Menu/94.png";

  const imageCount = 89;
  const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`);
  
  return (
    <>
    <Head>
      <title>JINMU SIGNATURE</title>
      <meta name="description" content="Refinning the comfort your Chinnese dinning experience" />
    </Head>
    <div className="flex flex-col items-center justify-center py-8 gap-3">
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
      <RestaurantMenu />
      {/* restaurant menu */}

      <div className="">
        {images.slice(0,4).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Menu Jinmu"
            width={1200}
            height={0}
            layout="intrinsic"
          />
        ))}
      </div>

    </div>
    </>
  );
}
