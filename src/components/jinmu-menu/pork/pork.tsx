import Image from "next/image";

export default function Pork() {

    const imageCount = 41;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`).slice(34,41);
    
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
    )
}