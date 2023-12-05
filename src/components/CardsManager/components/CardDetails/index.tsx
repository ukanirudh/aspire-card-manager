import React, { ReactElement } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { ReactComponent as CardDetailsIcon } from '../../../../assets/icons/CardDetails.svg';
import { ReactComponent as TransactionSummaryIcon } from '../../../../assets/icons/TransactionsSummary.svg';
import './CardDetails.scss'
import RecentTransactions from './RecentTransactions';

interface CardDetailsProps {
    cardIndex: number;
}

const CardDetails = ({ cardIndex }: CardDetailsProps): ReactElement => {
    return (
        <>
            <Accordion>
                <AccordionSummary
                    className='accordion-header'
                    expandIcon={<ExpandCircleDownIcon className='accordion-icon' />}
                >
                    <div className='header-content'>
                        <CardDetailsIcon />
                        <Typography>Card Details</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails></AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary
                    className='accordion-header'
                    expandIcon={<ExpandCircleDownIcon className='accordion-icon' />}
                >
                    <div className='header-content'>
                        <TransactionSummaryIcon />
                        <Typography>Recent transactions</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <RecentTransactions cardIndex={cardIndex} />
                </AccordionDetails>
            </Accordion>
        </>
    )
}

export default CardDetails;