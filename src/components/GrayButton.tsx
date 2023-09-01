
interface ButtonProps {
    text: string;
    onClick: () => void;
  }

const GrayButton = ({ text, onClick }: ButtonProps) => {
    return (
      <button
        onClick={onClick}
        className="bg-primary-gray hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-3xl w-4/5 md:w-36 lg:w-26 mt-6"
      >
        {text}
      </button>
    );
  };
  
  export default GrayButton;