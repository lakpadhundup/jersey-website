import { useOrder } from '@/context/OrderContext';
import { leagues } from '@/data/footballData';
import { ChevronLeft } from 'lucide-react';

// Local fallback images for league logos
const leagueIcons: Record<string, string> = {
  'premier-league': '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'la-liga': '🇪🇸',
  'bundesliga': '🇩🇪',
  'serie-a': '🇮🇹',
  'ligue-1': '🇫🇷',
};

export function LeagueScreen() {
  const { setLeague, setStep, goBack } = useOrder();

  const handleSelectLeague = (league: typeof leagues[0]) => {
    setLeague(league);
    setStep('club');
  };

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <button onClick={goBack} className="back-button mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="page-title mb-8">
          CHOOSE A LEAGUE &<br />START CUSTOMIZING
        </h1>

        <div className="space-y-4">
          {leagues.map((league, index) => (
            <button
              key={league.id}
              onClick={() => handleSelectLeague(league)}
              className="selection-card w-full flex items-center gap-4 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-secondary/50 rounded-lg flex items-center justify-center overflow-hidden p-2 relative">
                <img
                  src={league.logo}
                  alt={league.name}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <span className="hidden text-3xl items-center justify-center absolute inset-0">
                  {leagueIcons[league.id] || '⚽'}
                </span>
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-lg text-foreground">{league.name}</h3>
                <p className="text-sm text-muted-foreground">{league.country}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
