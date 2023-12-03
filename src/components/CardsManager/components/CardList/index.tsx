import React, { ReactElement } from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '../Card';
import { useAppContext } from '../../../../context/AppContext';

interface CardListProps {
    setCurrentCardIndex: (index: number) => void;
    cardIndex: number;
}

const CardList = ({setCurrentCardIndex, cardIndex}: CardListProps): ReactElement => {
    const { userCards } = useAppContext();

    return (
        <Carousel index={cardIndex} autoPlay={false} changeOnFirstRender onChange={(now) => {
            if (now !== undefined) {
                setCurrentCardIndex(now);
            }
        }}>
            {
                userCards.map((cardData) => <Card key={cardData.id} cardData={cardData} />)
            }
        </Carousel>
    );
}

export default CardList;