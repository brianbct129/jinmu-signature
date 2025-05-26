import Image from "next/image";

export default function OthersMenu() {
    
    const imageCount = 50;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`).slice(48,50);

    return (
        <div className="">
            {images.map((src, index) => (
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
    );
}