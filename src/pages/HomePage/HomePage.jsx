import { useState } from 'react';
import { JourneyPicker } from '../../components/JourneyPicker/JourneyPicker';

// Upravte komponentu HomePage tak, aby v případě, kdy ve stavu journey je nějaké spojení, vypsala pod vyhledávací formulář text „Nalezeno spojení s id …“. Místo tří teček bude journeyId z dat o nalezeném spojení.

// Ověřte, že funguje výběr měst a data, že po zadání všech třech údajů můžete kliknout na „Vyhledat spoj“ a že se po kliknutí vyhledá spojení a vypíše se do stránky jeho id.

// Odstraňte pomocné výpisy do konzole, pokud vám v komponentách zůstaly.

// Commitněte změny.

export const HomePage = () => {
  const [journey, setJourney] = useState(null);

  const handleJourneyChange = (journeyData) => {
    setJourney(journeyData);
    console.log(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}
    </main>
  );
};
