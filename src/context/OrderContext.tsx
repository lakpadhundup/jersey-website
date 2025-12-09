import React, { createContext, useContext, useState, ReactNode } from 'react';
import { League, Club, JerseyConfig } from '@/data/footballData';

export type JerseyType = 'home' | 'away' | 'third';
export type OrderStep = 'welcome' | 'league' | 'club' | 'kit' | 'size' | 'customize' | 'confirm' | 'bill';

interface OrderState {
  step: OrderStep;
  league: League | null;
  club: Club | null;
  jerseyType: JerseyType | null;
  size: string | null;
  playerName: string;
  playerNumber: string;
}

interface OrderContextType extends OrderState {
  setStep: (step: OrderStep) => void;
  setLeague: (league: League) => void;
  setClub: (club: Club) => void;
  setJerseyType: (type: JerseyType) => void;
  setSize: (size: string) => void;
  setPlayerName: (name: string) => void;
  setPlayerNumber: (number: string) => void;
  getJerseyConfig: () => JerseyConfig | null;
  resetOrder: () => void;
  goBack: () => void;
}

const initialState: OrderState = {
  step: 'welcome',
  league: null,
  club: null,
  jerseyType: null,
  size: null,
  playerName: '',
  playerNumber: '',
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const stepOrder: OrderStep[] = ['welcome', 'league', 'club', 'kit', 'size', 'customize', 'confirm', 'bill'];

export function OrderProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OrderState>(initialState);

  const setStep = (step: OrderStep) => setState(prev => ({ ...prev, step }));
  
  const setLeague = (league: League) => setState(prev => ({ ...prev, league }));
  
  const setClub = (club: Club) => setState(prev => ({ ...prev, club }));
  
  const setJerseyType = (jerseyType: JerseyType) => setState(prev => ({ ...prev, jerseyType }));
  
  const setSize = (size: string) => setState(prev => ({ ...prev, size }));
  
  const setPlayerName = (playerName: string) => setState(prev => ({ ...prev, playerName }));
  
  const setPlayerNumber = (playerNumber: string) => setState(prev => ({ ...prev, playerNumber }));

  const getJerseyConfig = (): JerseyConfig | null => {
    if (!state.club || !state.jerseyType) return null;
    return state.club.jerseys[state.jerseyType];
  };

  const resetOrder = () => setState(initialState);

  const goBack = () => {
    const currentIndex = stepOrder.indexOf(state.step);
    if (currentIndex > 0) {
      setStep(stepOrder[currentIndex - 1]);
    }
  };

  return (
    <OrderContext.Provider
      value={{
        ...state,
        setStep,
        setLeague,
        setClub,
        setJerseyType,
        setSize,
        setPlayerName,
        setPlayerNumber,
        getJerseyConfig,
        resetOrder,
        goBack,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
}
