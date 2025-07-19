import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function AutoScrollLogos() {
     return (
          <Marquee gradient={false} speed={50} className="items-center">
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/logo.png'} alt="calvin" width={150} height={150} />
               <Image className="mx-4" src={'/dotsoft.png'} alt="calvin" width={150} height={150} />

          </Marquee>
     );
}