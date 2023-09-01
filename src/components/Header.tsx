'use client';

import Image from 'next/image';
import bg from '@/assets/bg-image.jpg';
import logo from '@/assets/conecta-logo.png';
import fb from '@/assets/facebook.png';
import ig from '@/assets/instagram.png';
import Link from 'next/link';
import can from '@/assets/can.png';
import GreenButton from './GreenButton';

export function Header() {

    const handleButtonClick = () => {
        console.log("Botão clicado!");
      };

    return(
        <header className="bg-scroll bg-cover w-screen h-screen"
            style={{backgroundImage: `url(${bg.src})`}}
        >
            <div className='pt-5 min-h-[46rem]'>
                <div className="h-10 flex justify-between items-center ml-[12vw] mr-[12vw]">
                    <Image src={logo.src} alt='Conecta Logo' quality={100} width={134} height={51}/>
                    <div className='flex h-10 items-center'>
                        <Link href='#' className='mr-3 h-10 flex items-center justify-center'>
                            <Image src={fb.src} alt='Facebook Logo' width={18} height={18}/>
                        </Link>
                        <Link href='#' className='ml-3 h-10 flex items-center justify-center'>
                            <Image src={ig.src} alt='Instagram Logo' width={18} height={18}/>  
                        </Link>
                    </div>
                </div>

                <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-between items-center ml-[12vw] mr-[12vw]  min-h-[35rem]'>
                    <div className='flex flex-col items-center md:items-start lg:items-start md:ml-4 lg:ml-4'>
                        <h1 className='h-36 w-18 text-white text-[3rem] leading-tight whitespace-nowrap'>
                            Aqui um título<br/>de duas linhas
                        </h1>
                        <GreenButton text='Aqui um CTA' onClick={handleButtonClick}/>
                    </div>
                    <Image className='mt-18 md:mt-0 lg:mt-0 md:mr-10 lg:mr-32 w-[20vw] min-w-[13.25rem]' src={can} alt='Can Image'/>
                </div>
            </div>
        </header>
    )
}