import { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router';

export const ReservationPage = () => {
  const [reservation, setReservation] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchTicketDetail = async () => {
      const response = await fetch(
        `https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${params.id}`,
      );
      const responseData = await response.json();
      const data = responseData.results;
      setReservation(data);
    };
    fetchTicketDetail();
  }, []);

  console.log('Co je v data', reservation);

  return (
    reservation && (
      <div className="reservation container">
        <h2>Vaše e-jízdenka č. {reservation.reservationId}</h2>
        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Datum cesty: </p>
            <p>Odjezd:</p>
            <p>Příjezd:</p>
            <p>Sedadlo:</p>
          </div>
          <div className="reservation__info">
            <p>{reservation.date}</p>
            <p>
              {reservation.fromCity.name}, {reservation.fromCity.time}
            </p>
            <p>
              {reservation.toCity.name}, {reservation.toCity.time}
            </p>
            <p>{reservation.seatNumber}</p>
          </div>
        </div>
      </div>
    )
  );
};
