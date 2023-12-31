import React, { 
    createContext, 
    ReactNode, 
    ReactElement,
    useContext,
    useReducer,
    Dispatch
} from 'react'
import cardsData from '../assets/data/cards';
import { CardData, CardsAction, CardsReducerAction } from '../types';
import { generateNewCard } from '../utils/generateRandom';

interface AppContextProps {
    children: ReactNode;
}

interface AppContextState {
    userCards: Array<CardData>;
    cardIndex: number;
}

interface AppContextProviderValue extends AppContextState {
    dispatchAction: Dispatch<CardsAction>;
}

const AppContext = createContext<AppContextProviderValue>({
    userCards: [],
    cardIndex: 0,
    dispatchAction: () => {} 
});

export const useAppContext = (): AppContextProviderValue =>
  useContext(AppContext);

const reducer = (state: AppContextState, action: CardsAction) => {
    switch (action.type) {
        case CardsReducerAction.ADD_CARD:
            const newCard = generateNewCard(action.payload.name);
            return {...state, userCards: [...state.userCards, newCard]};

        case CardsReducerAction.FREEZE_CARD:
            const cardFound = state.userCards[action.payload.cardIndex];
            if (cardFound) {
                const copyCard = {...cardFound, frozen: !cardFound.frozen}
                const updatedUserCards = Object.assign([], state.userCards, { [action.payload.cardIndex]: copyCard });
                return { ...state, userCards: updatedUserCards };
            }
            return state;
        
        case CardsReducerAction.REMOVE_CARD:
            const cardToBeDeleted = state.userCards[action.payload.cardIndex];
            if (cardToBeDeleted) {
               const filteredCards = state.userCards.filter((card, index) => index !== action.payload.cardIndex);
               return { ...state, userCards: filteredCards, cardIndex: 0 };
            }
            return state;

        case CardsReducerAction.TOGGLE_CARD_NUMBER_DISPLAY:
            const cardMatch = state.userCards[action.payload.cardIndex];
            if (cardMatch) {
                const copyCard = {...cardMatch, showNumber: !!!cardMatch.showNumber}
                const updatedUserCards = Object.assign([], state.userCards, { [action.payload.cardIndex]: copyCard });
                return { ...state, userCards: updatedUserCards };
            }
            return state;

        case CardsReducerAction.SET_CARD_INDEX:
            return { ...state, cardIndex: action.payload.cardIndex };

        default:
            return state;
    }
};

const AppContextProvider = ({children}: AppContextProps): ReactElement => {
    const [appState, dispatch] = useReducer(reducer, { userCards: cardsData, cardIndex: 0 });

    return (
        <AppContext.Provider value={{
            userCards: appState.userCards,
            cardIndex: appState.cardIndex,
            dispatchAction: dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;