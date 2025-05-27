import Image from "next/image"

export default function Dumpling() {

    const imageCount = 4;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Main-Menu/${i + 1}.png`);

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
    )
}