import { useOrder } from '@/context/OrderContext';
import { clubs } from '@/data/footballData';
import { ChevronLeft } from 'lucide-react';

export function ClubScreen() {
  const { league, setClub, setStep, goBack } = useOrder();

  const leagueClubs = clubs.filter(club => club.leagueId === league?.id);

  const handleSelectClub = (club: typeof clubs[0]) => {
    setClub(club);
    setStep('kit');
  };

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <button onClick={goBack} className="back-button mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="page-title mb-8">PICK YOUR CLUB</h1>

        <div className="grid grid-cols-3 gap-4">
          {leagueClubs.map((club, index) => (
            <button
              key={club.id}
              onClick={() => handleSelectClub(club)}
              className="selection-card flex flex-col items-center gap-2 p-4 slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div 
                className="w-16 h-16 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${club.primaryColor}20` }}
              >
                <img
                  src={club.logo}
                  alt={club.name}
                  className="w-12 h-12 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-xs text-center text-foreground font-medium leading-tight line-clamp-2">
                {club.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
