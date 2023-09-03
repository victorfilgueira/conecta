'use client';

import Card from "./Card";
import bottle from "@/assets/bottle350.png";
import can from "@/assets/can100.png"; 
import { Grid } from "./Grid";
import { TopFooter } from "./TopFooter";

export function Products() {

    return(
        <div className="h-[106rem]">
            <div className="mt-20 mx-12 h-22 flex flex-col items-center md:mx-[5rem] lg:mx-[14rem]">
                <h1 className="text-primary-black font-bold text-2xl">
                    Produtos
                </h1>
                <p className="text-center">
                Preparamos cuidadosamente dois tamanhos de garrafas para atender às suas necessidades de energia, mantendo-o em seu melhor desempenho, seja no trabalho, nos estudos ou nas aventuras da vida..
                </p>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row md:mx-[5rem] lg:mx-[14rem] justify-around mt-20">
                <Card imageSrc={bottle.src} title="Garrafa 350ml" description="Impulso energético prolongado" />
                <Card imageSrc={can.src} title="Garrafa 100ml" description="Versão compacta para o seu dia-a-dia" />
            </div>

            <Grid />
            <TopFooter />
        </div>
    )
}
