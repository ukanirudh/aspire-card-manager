import { v4 as uuidv4 } from 'uuid';
import { CardData, CardType } from '../types';

export const generateRandomExpiry = (): string => {
    const now = new Date();

    return new Date(
        now.getTime() +
        Math.random() * (now.getTime()),
    ).toISOString();
}

export const generateRandomNumber = () => { 
    var minm = 1000000000000000; 
    var maxm = 9999999999999999; 
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

export const generateNewCard = (name: string): CardData => {
    return {
        id: uuidv4(), 
        name,
        number: generateRandomNumber().toString(),
        cvv: 123,
        expiry: generateRandomExpiry(),
        frozen: false,
        cardType: CardType.VISA,
        transactions: []
    }
}