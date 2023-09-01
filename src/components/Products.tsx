'use client';

import Card from "./Card";
import bottle from "@/assets/bottle350.png";
import can from "@/assets/can100.png"; 

export function Products() {

    return(
        <div className="h-[232rem]">
            <div className="mt-20 mx-12 h-22 flex flex-col items-center">
                <h1 className="text-primary-black font-bold text-2xl">
                    Produtos
                </h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris semper, tortor sed vehicula.
                </p>
            </div>

            <div className="flex mx-[16rem] justify-around mt-20">
                <Card imageSrc={bottle.src} title="Garrafa 350ml" description="Lorem ipsum dolor sit amet" />
                <Card imageSrc={can.src} title="Garrafa 100ml" description="Lorem ipsum dolor sit amet" />
            </div>
        </div>
    )
}
