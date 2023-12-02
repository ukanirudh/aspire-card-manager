import React, { ReactElement } from 'react'
import Paper from '@mui/material/Paper';
import './Card.scss'

//show card num
//logo
//cust name
//card num
//thru
//cvv
//card type

const Card = (): ReactElement => {
    return (
        <Paper variant="outlined" className='aspire-card'>
            <div>My Card</div>
        </Paper>
    )
}

export default Card;