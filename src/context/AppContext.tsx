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

interface AppContextProviderValue {
    userCards: Array<CardData>;
    dispatchAction: Dispatch<CardsAction>;
}



const AppContext = createContext<AppContextProviderValue>({
    userCards: [],
    dispatchAction: () => {} 
});

export const useAppContext = (): AppContextProviderValue =>
  useContext(AppContext);

const reducer = (state: { userCards: Array<CardData> }, action: CardsAction) => {
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
            console.log("action.payload.cardIndex", action.payload.cardIndex)
            const cardToBeDeleted = state.userCards[action.payload.cardIndex];
            if (cardToBeDeleted) {
               const filteredCards = state.userCards.filter((card, index) => index !== action.payload.cardIndex);
               return { ...state, userCards: filteredCards };
            }
            return state;

        default:
            return state;
    }
};

const AppContextProvider = ({children}: AppContextProps): ReactElement => {
    const [appState, dispatch] = useReducer(reducer, { userCards: cardsData });

    return (
        <AppContext.Provider value={{
            userCards: appState.userCards,
            dispatchAction: dispatch
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;