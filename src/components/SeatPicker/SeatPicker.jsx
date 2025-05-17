import { Seat } from '../Seat/Seat';
import './style.css';

export const SeatPicker = () => {
  return (
    <div class="seat-picker container">
      <h2>Vyberte sedadlo</h2>
      <div class="seats">
        <Seat number="1" />
        <Seat number="11" />
        <Seat number="2" />
        <Seat number="22" />
      </div>
    </div>
  );
};
