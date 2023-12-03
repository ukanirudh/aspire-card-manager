export enum TransactionType {
    DEBIT = 'DEBIT',
    CREDIT = 'CREDIT'
}

export enum CardType {
    VISA = 'VISA',
    MASTER = 'MASTER'
}

export interface Transactions {
    transactionId: string;
    thirdPartName: string;
    type: TransactionType;
    transactionDate: string;
    destination: string;
}

export interface CardData {
    id: string;
    name: string;
    number: string;
    expiry: string;
    cvv: number;
    frozen: boolean;
    cardType: CardType;
    transactions: Array<Transactions>
}

/* Reducer types*/
export enum CardsReducerAction {
    ADD_CARD = 'ADD_CARD',
    FREEZE_CARD = 'FREEZE_CARD',
    REMOVE_CARD = 'REMOVE_CARD'
}

export interface CardsAction {
    type: CardsReducerAction;
    payload: any;
}
/* Reducer types end */