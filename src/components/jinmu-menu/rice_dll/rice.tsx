import Image from "next/image";

export default function RiceMenu() {

    const imageCount = 76;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`).slice(50,60);

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