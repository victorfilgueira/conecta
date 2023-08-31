import Image from 'next/image';
import bg from '@/assets/bg-image.jpg';
import logo from '@/assets/conecta-logo.png';
import fb from '@/assets/facebook.png';
import ig from '@/assets/instagram.png';

export function Header() {
    return(
        <header className="bg-scroll bg-cover bg-center h-[750px]"
            style={{backgroundImage: `url(${bg.src})`}}
        >
            <div className='pt-5'>
                <div className='h-10 flex justify-center'>
                    <Image src={logo.src} alt='Conecta Logo' quality={100} width={134} height={51}/>
                    <div className='flex w-14 h-10 ml-[960px] items-center justify-center'>
                        <button className='mr-3 h-10'>
                            <Image src={fb.src} alt='Facebook Logo' width={18} height={18}/>
                        </button>
                        <button className='ml-3 h-10'>
                            <Image src={ig.src} alt='Instagram Logo' width={18} height={18}/>  
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}