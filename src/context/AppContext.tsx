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