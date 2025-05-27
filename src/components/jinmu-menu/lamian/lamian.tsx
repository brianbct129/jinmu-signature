import Image from "next/image";

export default function LamianMenu() {

    const imageCount = 17;
    const images = Array.from({ length: imageCount }, (_, i) => `/PNG-Daytime/${i + 1}.webp`).slice(13,17);


    return (
        <div className="">
            {images.map((src, index) => (
                <Image
                    priority
                    key={index}
                    src={src}
                    alt="Lamian - Jinmu Menu"
                    width={1200}
                    height={0}
                    layout="intrinsic"
                />
            ))}
        </div>
    )
}