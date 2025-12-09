import { useOrder } from '@/context/OrderContext';
import { jerseyPrice, customizationPrice } from '@/data/footballData';
import { ChevronLeft, Check } from 'lucide-react';
import { Jersey3DPreview } from '@/components/jersey/Jersey3DPreview';

export function ConfirmScreen() {
  const { 
    club, 
    jerseyType, 
    size, 
    playerName, 
    playerNumber, 
    setStep, 
    goBack,
    getJerseyConfig 
  } = useOrder();

  const jerseyConfig = getJerseyConfig();
  const hasCustomization = playerName || playerNumber;
  const total = jerseyPrice + (hasCustomization ? customizationPrice : 0);

  const handleConfirmOrder = () => {
    setStep('bill');
  };

  if (!club || !jerseyConfig) return null;

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <button onClick={goBack} className="back-button mb-4">
          <ChevronLeft className="w-6 h-6" />
        </button>

        <h1 className="page-title mb-4">CONFIRM ORDER</h1>

        <div className="jersey-canvas mb-4 h-52">
          <Jersey3DPreview
            config={jerseyConfig}
            playerName={playerName}
            playerNumber={playerNumber}
          />
        </div>

        <div className="selection-card mb-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Club</span>
              <span className="font-medium text-foreground">{club.name}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Kit Type</span>
              <span className="font-medium capitalize text-foreground">{jerseyType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Size</span>
              <span className="font-medium text-foreground">{size}</span>
            </div>
            {playerName && (
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Name</span>
                <span className="font-medium font-display tracking-wider text-foreground">{playerName}</span>
              </div>
            )}
            {playerNumber && (
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Number</span>
                <span className="font-medium font-display text-xl text-foreground">{playerNumber}</span>
              </div>
            )}
          </div>

          <div className="border-t border-border mt-4 pt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Jersey</span>
              <span className="text-foreground">£{jerseyPrice.toFixed(2)}</span>
            </div>
            {hasCustomization && (
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Customization</span>
                <span className="text-foreground">£{customizationPrice.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between items-center text-lg font-semibold">
              <span className="text-foreground">Total</span>
              <span className="text-primary">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={handleConfirmOrder}
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Check className="w-5 h-5" />
          CONFIRM ORDER
        </button>
      </div>
    </div>
  );
}
