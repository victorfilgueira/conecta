import { Inter } from "next/font/google"

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700', '900'] 
});


const GrayButton = ({ text, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className={`${inter.className} bg-primary-gray hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-3xl w-4/5 md:w-38 h-12 lg:w-26 mt-6`}
      >
        {text}
      </button>
    );
  };
  
  export default GrayButton;