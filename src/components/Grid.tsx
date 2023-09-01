import club from "@/assets/club-img.png";
import barman from "@/assets/barman.png";
import Image from "next/image";
import Carousel from "./Carousel";

export function Grid() {
    return(
        <div className="grid md:grid-rows-2 md:grid-flow-col lg:grid-rows-2 lg:grid-flow-col mx-2 md:mx-[2rem] lg:mx-[9rem] mt-[11rem] sm:h-[69rem] md:h-[50rem]">
            <Image className="row-span-2 w-full h-full object-cover" quality={100} src={club} alt="Club Image"/>
            <div className="row-span-1 bg-primary-gray flex items-center justify-center min-h-[18rem]">
                <Carousel />
            </div>
            <Image className="row-span-1 h-full w-full object-cover" quality={100} src={barman} alt="Barman Image" />
        </div>
    )
}