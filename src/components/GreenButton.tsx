import { Inter } from "next/font/google"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'] 
});

const GreenButton = ({ text, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`${inter.className} bg-primary-green text-sm hover:bg-secondary-green text-black font-semibold py-2 px-4 rounded-3xl w-full md:w-40 h-12 lg:w-26`}
      >
        {text}
      </button>
    );
  };
  
  export default GreenButton;