import Image from "next/image";
import Link from "next/link";
import ig from "@/assets/instagram.png";
import fb from "@/assets/facebook.png";
import { Inter } from 'next/font/google'
import { Form } from "./Form";

export function Footer() {

    const handleButtonClick = () => {
        console.log("Botão clicado!");
      };

    return(
        <div className="bg-primary-gray h-[60rem] md:h-[68rem] lg:h-[50rem]">
           
           <div className="flex items-center justify-evenly h-4/5">
                <div>
                    <h1 className="text-white text-4xl font-bold">Fale Conosco.</h1>
                    <div className='flex h-10 items-center'>
                        <Link href='#' className='mr-1 h-10 flex items-center justify-center'>
                            <Image src={fb.src} alt='Facebook Logo' width={18} height={18}/>
                        </Link>
                        <Link href='#' className='ml-1 h-10 flex items-center justify-center'>
                            <Image src={ig.src} alt='Instagram Logo' width={18} height={18}/>  
                        </Link>
                        <p className="inter.className text-white ml-3">{" | "}</p>
                        <p className="inter.className text-white ml-3">{" REDES SOCIAIS"}</p>
                    </div>
                </div>
                <div>
                    <Form />
                </div>
           </div>
        </div>
    )
}