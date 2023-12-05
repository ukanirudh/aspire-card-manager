import React, { ReactElement } from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '../Card';
import { useAppContext } from '../../../../context/AppContext';
import { CardsReducerAction } from '../../../../types';

const CardList = (): ReactElement => {
    const { userCards, cardIndex, dispatchAction } = useAppContext();

    return (
        <Carousel index={cardIndex} autoPlay={false} changeOnFirstRender onChange={(now) => {
            if (now !== undefined) {
                dispatchAction({
                    type: CardsReducerAction.SET_CARD_INDEX,
                    payload: { cardIndex: now }
                })
            }
        }}>
            {
                userCards.map((cardData) => <Card key={cardData.id} cardData={cardData} />)
            }
        </Carousel>
    );
}

export default CardList;