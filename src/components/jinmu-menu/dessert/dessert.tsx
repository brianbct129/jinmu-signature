import Image from "next/image";

export default function DessertMenu() {

    const imageCount = 80;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`).slice(76,80);

    return (
        <div className="">
            {images.map((src, index) => (
                <Image
                    priority
                    key={index}
                    src={src}
                    alt="Dessert Menu Jinmu"
                    width={1200}
                    height={0}
                    layout="intrinsic"
                />
            ))}
        </div>
    );

}