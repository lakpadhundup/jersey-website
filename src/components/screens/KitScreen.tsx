import { useOrder, JerseyType } from '@/context/OrderContext';
import { ChevronLeft } from 'lucide-react';
import { JerseyPreview2D } from '@/components/jersey/JerseyPreview2D';

export function KitScreen() {
  const { club, setJerseyType, setStep, goBack, jerseyType } = useOrder();

  const kitTypes: { type: JerseyType; label: string }[] = [
    { type: 'home', label: 'HOME' },
    { type: 'away', label: 'AWAY' },
    { type: 'third', label: 'THIRD' },
  ];

  const handleSelectKit = (type: JerseyType) => {
    setJerseyType(type);
  };

  const handleContinue = () => {
    if (jerseyType) {
      setStep('size');
    }
  };

  if (!club) return null;

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <button onClick={goBack} className="back-button mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="page-title mb-6">CHOOSE YOUR KIT</h1>

        <div className="space-y-4 mb-8">
          {kitTypes.map((kit, index) => (
            <button
              key={kit.type}
              onClick={() => handleSelectKit(kit.type)}
              className={`selection-card w-full flex items-center gap-4 slide-up ${
                jerseyType === kit.type ? 'selected' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="font-display text-xl tracking-wider w-20 text-foreground">
                {kit.label}
              </span>
              <div className="flex-1 flex justify-end">
                <div className="w-24 h-24">
                  <JerseyPreview2D
                    config={club.jerseys[kit.type]}
                    clubLogo={club.logo}
                    size="small"
                  />
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!jerseyType}
          className="btn-primary w-full"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
