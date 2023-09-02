import Image from "next/image";
import Link from "next/link";
import ig from "@/assets/instagram.png";
import fb from "@/assets/facebook.png";
import { Form } from "./Form";
import logo from "@/assets/conecta-logo.png";
import { Inter } from "next/font/google"

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700', '900'] 
});

export function Footer() {

    const handleButtonClick = () => {
        console.log("Botão clicado!");
    };

    return(
        <div className="bg-primary-gray h-[60rem] md:h-[68rem] lg:h-[50rem]">
           
           <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between mx-[2rem] md:mx-[2rem] lg:mx-[12rem] h-4/5">
                <div className="mt-24 md:mt-24 lg:mt-0">
                    <h1 className="text-white text-4xl font-bold">Fale Conosco.</h1>
                    <div className='flex h-10 items-center'>
                        <Link href='#' className='mr-1 h-10 flex items-center justify-center'>
                            <Image src={fb.src} alt='Facebook Logo' width={18} height={18}/>
                        </Link>
                        <Link href='#' className='ml-1 h-10 flex items-center justify-center'>
                            <Image src={ig.src} alt='Instagram Logo' width={18} height={18}/>  
                        </Link>
                        <p className="text-white ml-3">{" | "}</p>
                        <p className="text-white ml-3">{" REDES SOCIAIS"}</p>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
           </div>
           <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between md:mx-[12rem] lg:mx-[12rem] mt-[3rem]">
                <p className={`${inter.className} text-white text-xs opacity-30`}>
                    Todos os direitos reservados @ 2020 Conecta
                </p>
                <div className="flex items-center justify-center">
                    <p className={`${inter.className} text-white text-[9px] opacity-30`}>PROJETADO POR</p>
                    <Image className="w-16" src={logo} alt="Conecta" />
                </div>
            </div>
        </div>
    )
}