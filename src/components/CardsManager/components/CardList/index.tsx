import React, { ReactElement } from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '../Card';
import { useAppContext } from '../../../../context/AppContext';

const CardList = (): ReactElement => {
    const { userCards } = useAppContext();

    return (
        <Carousel>
            {
                userCards.map((cardData) => <Card key={cardData.id} cardData={cardData} />)
            }
        </Carousel>
    );
}

export default CardList;