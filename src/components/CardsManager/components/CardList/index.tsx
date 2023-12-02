import React, { ReactElement } from 'react'
import Carousel from 'react-material-ui-carousel'
import Card from '../Card';

const CardList = (): ReactElement => {
    return (
        <Carousel>
            <Card />
            <Card />
        </Carousel>
    );
}

export default CardList;