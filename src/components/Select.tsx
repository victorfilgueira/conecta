
import { Inter } from "next/font/google"
import React, { useState } from 'react';

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700', '900'] 
});

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para armazenar a opção selecionada
  const options = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4']; // Substitua com suas opções reais

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <select className={`${inter.className} w-full px-3 py-2 opacity-50 border text-white border-white border-t-2 border-r-2 border-b-0 border-l-0 focus:border-primary-green focus:outline-none bg-primary-gray focus:bg-secondary-gray`} value={selectedOption} onChange={handleChange}>
        <option value="">Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p>Você selecionou: {selectedOption}</p>
    </div>
  );
};

export default SelectComponent;
