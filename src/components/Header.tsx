import Image from 'next/image';
import bg from '@/assets/bg-image.jpg';
import logo from '@/assets/conecta-logo.png';
import fb from '@/assets/facebook.png';
import ig from '@/assets/instagram.png';
import Link from 'next/link';

export function Header() {

    return(
        <header className="bg-cover w-screen h-screen"
            style={{backgroundImage: `url(${bg.src})`}}
        >
            <div className='pt-5'>
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
            </div>
        </header>
    )
}