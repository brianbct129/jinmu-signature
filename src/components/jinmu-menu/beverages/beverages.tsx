import Image from "next/image";

export default function BeveragesMenu() {
    
    const imageCount = 89;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`).slice(80,89);

    return (
        <div className="">
            {images.map((src, index) => (
                <Image
                    priority
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