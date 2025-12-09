import { useOrder } from '@/context/OrderContext';
import { sizes, jerseyPrice } from '@/data/footballData';
import { ChevronLeft } from 'lucide-react';
import { JerseyPreview2D } from '@/components/jersey/JerseyPreview2D';

export function SizeScreen() {
  const { club, jerseyType, size, setSize, setStep, goBack, getJerseyConfig } = useOrder();

  const jerseyConfig = getJerseyConfig();

  const handleContinue = () => {
    if (size) {
      setStep('customize');
    }
  };

  if (!club || !jerseyConfig) return null;

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <button onClick={goBack} className="back-button mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="page-title mb-6">CHOOSE YOUR SIZE</h1>

        <div className="jersey-canvas mb-6 flex items-center justify-center fade-in">
          <div className="w-48 h-48">
            <JerseyPreview2D
              config={jerseyConfig}
              clubLogo={club.logo}
              size="large"
            />
          </div>
        </div>

        <div className="text-center mb-6">
          <h3 className="font-semibold text-lg text-foreground">{club.name}</h3>
          <p className="text-primary font-display text-2xl">£{jerseyPrice.toFixed(2)}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-center gap-2 flex-wrap">
            {sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`size-btn ${size === s ? 'selected' : ''}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleContinue}
          disabled={!size}
          className="btn-primary w-full"
        >
          CONTINUE
        </button>
      </div>
    </div>
  );
}
