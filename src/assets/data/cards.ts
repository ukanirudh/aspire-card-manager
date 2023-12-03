import { CardData, CardType } from "../../types";

const cardsData: Array<CardData> = [
    {
        id: 'XID123',
        name: 'Mark Henry',
        number: '4490020355672020',
        expiry: '2030-12-30T18:30:00.000Z',
        cvv: 123,
        frozen: false,
        cardType: CardType.VISA,
        transactions: []
    },
    {
        id: 'XID576',
        name: 'John Doe',
        number: '4791021395672908',
        expiry: '2030-12-30T18:30:00.000Z',
        cvv: 123,
        frozen: false,
        cardType: CardType.VISA,
        transactions: []
    }
]

export default cardsData;