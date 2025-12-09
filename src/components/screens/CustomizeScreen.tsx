import { useOrder } from '@/context/OrderContext';
import { ChevronLeft } from 'lucide-react';
import { Jersey3DPreview } from '@/components/jersey/Jersey3DPreview';
import { useState } from 'react';

const popularNames = ['MESSI', 'RONALDO', 'HAALAND', 'MBAPPE'];

export function CustomizeScreen() {
  const {
    club,
    playerName,
    playerNumber,
    setPlayerName,
    setPlayerNumber,
    setStep,
    goBack,
    getJerseyConfig
  } = useOrder();

  const [activeInput, setActiveInput] = useState<'name' | 'number'>('name');

  const jerseyConfig = getJerseyConfig();

  const handleNameChange = (value: string) => {
    const sanitized = value.toUpperCase().replace(/[^A-Z\s]/g, '').slice(0, 12);
    setPlayerName(sanitized);
  };

  const handleNumberChange = (value: string) => {
    const sanitized = value.replace(/[^0-9]/g, '').slice(0, 2);
    setPlayerNumber(sanitized);
  };

  const handleContinue = () => {
    setStep('confirm');
  };

  if (!club || !jerseyConfig) return null;

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={goBack} className="back-button">
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>

        <h1 className="page-title mb-4 slide-down">CUSTOMIZE YOUR JERSEY</h1>

        <div className="jersey-canvas mb-4 h-[450px] slide-up">
          <Jersey3DPreview
            config={jerseyConfig}
            playerName={playerName}
            playerNumber={playerNumber}
          />
        </div>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setActiveInput('name')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeInput === 'name'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
              }`}
          >
            Aa Edit Name
          </button>
          <button
            onClick={() => setActiveInput('number')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeInput === 'number'
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground'
              }`}
          >
            123 Edit Number
          </button>
        </div>

        {activeInput === 'name' && (
          <div className="space-y-3 slide-up">
            <input
              type="text"
              value={playerName}
              onChange={(e) => handleNameChange(e.target.value)}
              placeholder="Enter name"
              className="input-field text-center text-xl font-display tracking-wider"
              maxLength={12}
            />
            <div className="flex gap-2 flex-wrap justify-center">
              {popularNames.map((name) => (
                <button
                  key={name}
                  onClick={() => setPlayerName(name)}
                  className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium text-foreground hover:bg-muted/80 transition-colors"
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        )}

        {activeInput === 'number' && (
          <div className="slide-up">
            <input
              type="text"
              value={playerNumber}
              onChange={(e) => handleNumberChange(e.target.value)}
              placeholder="Enter number (1-99)"
              className="input-field text-center text-3xl font-display tracking-wider"
              maxLength={2}
            />
          </div>
        )}

        <button
          onClick={handleContinue}
          className="btn-primary w-full mt-6"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
