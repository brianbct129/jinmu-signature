import Image from "next/image";

export default function Pork() {

const start = 35;
const end = 41;

const images = [];
for (let i = start; i <= end; i++) {
  if (i === 40) continue; // Skip nomor 40
  images.push(`/PNG-Main-Menu/${i}.png`);
}
    
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