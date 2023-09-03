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
        <div className="flex flex-col items-center mx-4 mt-12 md:mt-0 lg:mt-0">
            <div className="bg-white shadow-2xl p-4 rounded-2xl h-[65vh] w-[25vw] min-w-[326px] flex flex-col items-center">
                <img src={imageSrc} alt={title} className="w-[13rem] h-[18rem] object-cover mb-4 rounded-md" />
                <h2 className="text-xl font-bold mb-2">{title}</h2>
                <p>{description}</p>
            </div>
            <div className="mt-[-1.25rem]">
                <GreenButton text="Comprar" onClick={handleButtonClick} />
            </div>
        </div>
    );
  };
  
  export default Card;