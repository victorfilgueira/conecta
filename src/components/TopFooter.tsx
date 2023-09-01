import GrayButton from "./GrayButton";
import can from "@/assets/can.png";
import Image from "next/image";
import { Footer } from "./Footer";

export function TopFooter() {


    const handleButtonClick = () => {
        console.log("Botão clicado!");
      };

    return(
        <div>
            <div className="bg-primary-green h-[23rem] md:h-[18rem] lg:h-[18rem] mt-24 flex items-center justify-center relative">
                <Image className="w-[5rem] transform rotate-[15deg] mb-[15rem]" src={can.src} width={195} height={343} alt="Can Image" />
                <Image className="w-[12rem] transform -rotate-[15deg] mt-36 z-0" src={can.src} width={195} height={343} alt="Can Image" />
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-black font-extrabold text-2xl">
                        Quer Experimentar?
                    </h1>
                    <GrayButton text="Aqui um CTA" onClick={handleButtonClick} />
                </div>
                <Image className="w-[16rem] transform rotate-[15deg] z-0" src={can.src} width={195} height={343} alt="Can Image" />
            </div>
            <div className="relative z-50">
                <Footer />
            </div>
        </div>
    )
}