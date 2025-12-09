import { useOrder } from '@/context/OrderContext';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { LeagueScreen } from './screens/LeagueScreen';
import { ClubScreen } from './screens/ClubScreen';
import { KitScreen } from './screens/KitScreen';
import { SizeScreen } from './screens/SizeScreen';
import { CustomizeScreen } from './screens/CustomizeScreen';
import { ConfirmScreen } from './screens/ConfirmScreen';
import { BillScreen } from './screens/BillScreen';

export function JerseyCustomizer() {
  const { step } = useOrder();

  const screens = {
    welcome: <WelcomeScreen />,
    league: <LeagueScreen />,
    club: <ClubScreen />,
    kit: <KitScreen />,
    size: <SizeScreen />,
    customize: <CustomizeScreen />,
    confirm: <ConfirmScreen />,
    bill: <BillScreen />,
  };

  return (
    <div className="min-h-screen overflow-auto no-scrollbar">
      {screens[step]}
    </div>
  );
}
