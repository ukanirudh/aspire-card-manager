import { CardData, CardType, TransactionType } from "../../types";

const cardsData: Array<CardData> = [
    {
        id: 'XID123',
        name: 'Mark Henry',
        number: '4490020355672020',
        expiry: '2030-12-30T18:30:00.000Z',
        cvv: 123,
        frozen: false,
        cardType: CardType.VISA,
        transactions: [
            {
                transactionId: 'TID123',
                transactionDate: '2030-12-30T18:30:00.000Z',
                thirdPartName: 'Hamleys',
                comments: 'Refund on Debit card',
                type: TransactionType.CREDIT,
                value: 150
            },
            {
                transactionId: 'TID900',
                transactionDate: '2030-10-30T18:30:00.000Z',
                thirdPartName: 'Hamleys',
                comments: 'Debit on Credit card',
                type: TransactionType.DEBIT,
                value: 120
            }
        ]
    },
    {
        id: 'XID576',
        name: 'John Doe',
        number: '4791021395672908',
        expiry: '2030-12-30T18:30:00.000Z',
        cvv: 123,
        frozen: false,
        cardType: CardType.VISA,
        transactions: [
            {
                transactionId: 'TID999',
                transactionDate: '2030-11-31T18:30:00.000Z',
                thirdPartName: 'Hamleys',
                comments: 'Refund on Credit card',
                type: TransactionType.CREDIT,
                value: 200
            }
        ]
    }
]

export default cardsData;