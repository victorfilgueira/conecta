
interface ButtonProps {
    text: string;
    onClick: () => void;
  }

const GreenButton = ({ text, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="bg-primary-green hover:bg-secondary-green text-white font-semibold py-2 px-4 rounded-3xl w-full md:w-36 lg:w-26"
      >
        {text}
      </button>
    );
  };
  
  export default GreenButton;