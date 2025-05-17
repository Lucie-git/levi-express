import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker/JourneyPicker';
import { JourneyDetail } from '../../components/JourneyDetail/JourneyDetail';
import { SelectedSeat } from '../../components/SelectedSeat/SelectedSeat';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);
  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && (
        <>
          <JourneyDetail journey={journey} />
          <SelectedSeat number={journey.autoSeat} />
        </>
      )}
    </main>
  );
};
