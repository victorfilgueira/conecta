import GreenButton from "./GreenButton";

interface CardProps {
    imageSrc: string;
    title: string;
    description: string;
  }

const Card = ({ imageSrc, title, description }: CardProps) => {

    const handleButtonClick = () => {
        console.log("Botão clicado!");
      };

    return (
        <div className="flex flex-col items-center">
            <div className="bg-white shadow-2xl p-4 rounded-2xl h-[30rem] w-[22.5rem] flex flex-col items-center">
                <img src={imageSrc} alt={title} className="w-[13rem] h-[18rem] object-cover mb-4 rounded-md" />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="mt-[-1.25rem]">
                <GreenButton text="Aqui um CTA" onClick={handleButtonClick} />
            </div>
        </div>
    );
  };
  
  export default Card;