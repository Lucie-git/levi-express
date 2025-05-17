import { SeatRow } from '../SeatRow/SeatRow';
import './style.css';

// Uvnitř komponenty SeatPicker projděte pole seats pomocí funkce map, a pro každý řádek pole vytvořte jednu komponentu SeatRow. I komponenty SeatRow potřebují prop key. Zde bohužel nemáme žádnou rozumnou datovou položku, kterou bychom jako klíč mohli použít. Vzpomeňme si však, že funkce vložená do funkce map může mít dva parametry, druhý parametr je pořadové číslo (takzvaný index) aktuálního prvku. V tomto případě jej výjimečně můžeme použít jako key pro SeatRow.

export const SeatPicker = ({ seats }) => {
  return (
    <div className="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div className="seats">
        {seats.map((seatRow, index) => {
          return <SeatRow row={seatRow} key={index} />;
        })}
      </div>
    </div>
  );
};
