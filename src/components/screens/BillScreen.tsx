import { useOrder } from '@/context/OrderContext';
import { jerseyPrice, customizationPrice } from '@/data/footballData';
import { CheckCircle, Download, RotateCcw } from 'lucide-react';

export function BillScreen() {
  const { 
    club, 
    jerseyType, 
    size, 
    playerName, 
    playerNumber, 
    resetOrder 
  } = useOrder();

  const hasCustomization = playerName || playerNumber;
  const subtotal = jerseyPrice + (hasCustomization ? customizationPrice : 0);
  const tax = subtotal * 0.2;
  const total = subtotal + tax;

  const orderNumber = `JL${Date.now().toString().slice(-8)}`;
  const orderDate = new Date().toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <div className="screen-container">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 fade-in">
          <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-500" />
          </div>
          <h1 className="page-title">ORDER CONFIRMED!</h1>
          <p className="text-muted-foreground mt-2">Thank you for your order</p>
        </div>

        <div className="selection-card slide-up">
          <div className="text-center border-b border-border pb-4 mb-4">
            <p className="text-sm text-muted-foreground">Order Number</p>
            <p className="font-display text-2xl tracking-wider text-primary">{orderNumber}</p>
            <p className="text-sm text-muted-foreground mt-1">{orderDate}</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Item</span>
              <span className="text-foreground">{club?.name} {jerseyType} Jersey</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Size</span>
              <span className="text-foreground">{size}</span>
            </div>
            {playerName && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Name</span>
                <span className="font-display tracking-wider text-foreground">{playerName}</span>
              </div>
            )}
            {playerNumber && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Number</span>
                <span className="font-display text-foreground">{playerNumber}</span>
              </div>
            )}
          </div>

          <div className="border-t border-border mt-4 pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Jersey</span>
              <span className="text-foreground">£{jerseyPrice.toFixed(2)}</span>
            </div>
            {hasCustomization && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Customization</span>
                <span className="text-foreground">£{customizationPrice.toFixed(2)}</span>
              </div>
            )}
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="text-foreground">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">VAT (20%)</span>
              <span className="text-foreground">£{tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold pt-2 border-t border-border">
              <span className="text-foreground">Total</span>
              <span className="text-primary">£{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button className="flex-1 btn-primary flex items-center justify-center gap-2 bg-muted text-foreground hover:bg-muted/80">
            <Download className="w-4 h-4" />
            Save Receipt
          </button>
          <button 
            onClick={resetOrder}
            className="flex-1 btn-primary flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            New Order
          </button>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-6">
          For educational purposes only. Not a real order.
        </p>
      </div>
    </div>
  );
}
