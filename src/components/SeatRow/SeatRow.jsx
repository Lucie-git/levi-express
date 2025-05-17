import { Seat } from '../Seat/Seat';

export const SeatRow = ({ row }) => {
  return (
    <div className="seat-row">
      {row.map((seat) => {
        return <Seat key={seat.number} number={seat.number} isOcupied={seat.isOccupied} />;
      })}
    </div>
  );
};
