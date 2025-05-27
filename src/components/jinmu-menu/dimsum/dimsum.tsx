import Image from "next/image";

export default function Dimsum() {

    const imageCount = 13;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Daytime/${i + 1}.png`);

    return (
        <div className="">
            {images.slice(4,13).map((src, index) => (
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