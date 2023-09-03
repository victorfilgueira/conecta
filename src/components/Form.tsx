import { Roboto, Inter } from "next/font/google"
import GreenButtonFooter from "./GreenButtonFooter";
import SelectComponent from "./Select";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700', '900'] 
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700', '900'] 
});

export function Form() {

    const handleButtonClick = () => {};

    return(
        <form className="flex flex-col mx-auto p-4 md:w-[31rem]">
            <div className="mb-4">
                <label htmlFor="name" className={`${roboto.className} mb-2 font-normal text-xs opacity-30 text-white`}>
                NOME
                </label>
                <input
                type="text"
                placeholder="Insira seu Nome"
                id="name"
                name="name"
                className={`${inter.className} w-full text-base opacity-50 px-3 py-2 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`}
                />
            </div>
            <div className="mb-4 flex flex-col md:flex-col lg:flex-row">
                <div className="w-full  md:w-full lg:w-40 mr-6">
                    <label htmlFor="email" className={`${roboto.className} mb-2 font-normal text-xs opacity-30 text-white`}>
                        TELEFONE
                    </label>
                    <input
                    type="tel"
                    placeholder="(99) 99999-9999"
                    id="phone"
                    name="phone"
                    className={`${inter.className} w-full px-3 py-2 opacity-50 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`}
                    />
                </div>
                <div>
                    <label htmlFor="email" className={`${roboto.className} mb-2 font-normal text-xs opacity-30 text-white`}>
                        E-MAIL
                    </label>
                    <input
                    type="email"
                    placeholder="email@email.com.br"
                    id="email"
                    name="email"
                    className={`${inter.className} w-full px-3 py-2 opacity-50 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`}
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="name" className={`${roboto.className} mb-2 font-normal text-xs opacity-30 text-white`}>
                ASSUNTO
                </label>
                {/* <select
                id="subject"
                value="Selecione um Assunto"
                name="subject"
                className={`${inter.className} w-full px-3 py-2 opacity-50 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`}
                /> */}
                <SelectComponent />
            </div>
            <div className="mb-6">
                <label htmlFor="message" className={`${roboto.className} mb-2 font-normal text-xs opacity-30 text-white`}>
                MENSAGEM
                </label>
                <textarea
                id="message"
                name="message"
                className={`${inter.className} w-full h-32 resize-none opacity-50 px-3 py-2 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`}
                ></textarea>
            </div>
            <div className="flex justify-end">
                <GreenButtonFooter onClick={handleButtonClick} text={"Enviar"} />
            </div>
        </form>
    )
}

