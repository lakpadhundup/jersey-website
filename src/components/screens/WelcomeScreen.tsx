import { useOrder } from '@/context/OrderContext';
import { QrCode } from 'lucide-react';
import { useState } from 'react';
import QRCode from 'react-qr-code';

export function WelcomeScreen() {
  const { setStep } = useOrder();
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="screen-container justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-6 fade-in z-10">
        <div className="text-center space-y-2">
          <h1 className="font-display text-4xl text-primary tracking-wider leading-tight">
            JERSEY PASAL
          </h1>
          <p className="font-display text-2xl text-accent tracking-widest">
            NEPAL
          </p>
        </div>

        {/* Jersey Icon */}
        <div className="relative my-4">
          <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 flex items-center justify-center pulse-glow">
            <svg viewBox="0 0 100 100" className="w-16 h-16">
              <defs>
                <linearGradient id="jerseyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFD700" />
                  <stop offset="100%" stopColor="#FFA500" />
                </linearGradient>
              </defs>
              <path
                d="M50 15 L70 20 L80 35 L75 40 L65 35 L65 85 L35 85 L35 35 L25 40 L20 35 L30 20 Z"
                fill="url(#jerseyGrad)"
                stroke="#FFD700"
                strokeWidth="2"
              />
              <path d="M45 15 L50 22 L55 15" fill="none" stroke="#1a2744" strokeWidth="3" />
            </svg>
          </div>
        </div>

        <p className="text-muted-foreground text-center max-w-xs">
          Design your perfect football jersey with custom name & number
        </p>

        <button
          onClick={() => setStep('league')}
          className="btn-primary text-xl tracking-wide mt-4"
        >
          START CUSTOMIZING
        </button>

        {/* QR Code Button */}
        <button
          onClick={() => setShowQR(!showQR)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mt-2"
        >
          <QrCode className="w-5 h-5" />
          <span className="text-sm">Scan QR to Order</span>
        </button>

        {/* QR Code Modal */}
        {showQR && (
          <div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 fade-in"
            onClick={() => setShowQR(false)}
          >
            <div
              className="selection-card p-6 text-center slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="font-display text-xl text-primary mb-4">SCAN TO ORDER</h3>
              <div className="w-48 h-48 bg-foreground p-3 rounded-lg mx-auto">
                {/* QR Code placeholder - simple pattern */}
                <div className="h-full w-full bg-white p-2">
                  <QRCode
                    value={window.location.href}
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Jersey Pasal Nepal
              </p>
              <button
                onClick={() => setShowQR(false)}
                className="mt-4 text-primary hover:underline text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}

        <p className="text-muted-foreground text-xs mt-4">
          For educational purposes only
        </p>
      </div>
    </div>
  );
}
