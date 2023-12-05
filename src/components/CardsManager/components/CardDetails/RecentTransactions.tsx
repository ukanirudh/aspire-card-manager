import React, { ReactElement } from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useAppContext } from '../../../../context/AppContext';
import { TransactionType } from '../../../../types';

interface RecentTransactionsProps {
    cardIndex: number;
}

const RecentTransactions = ({ cardIndex }: RecentTransactionsProps): ReactElement => {
    const { userCards } = useAppContext();
    const currentCard = userCards[cardIndex];

    return (
        <List className='recent-transactions-list'>
            {
                currentCard.transactions.map((tarnsaction) => {
                    const { transactionId, transactionDate, thirdPartName, comments, type, value } = tarnsaction;
                    const isCredit = type === TransactionType.CREDIT;
                    return (
                        <div key={transactionId}>
                            <ListItem alignItems="flex-start">
                                <ListItemAvatar>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                </ListItemAvatar>
                                <div className='transaction-data-item'>
                                    <ListItemText
                                        primary={thirdPartName}
                                        secondary={
                                        <React.Fragment>
                                            <p>
                                                <Typography
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary"
                                                >
                                                    {new Date(transactionDate).toDateString()}
                                                </Typography>
                                            </p>
                                            {comments}
                                        </React.Fragment>
                                        }
                                    />
                                    <p className={isCredit ? 'credit-item' : ''}>{isCredit ? '+' : '-'}{value}</p>
                                </div>
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    )
                })
            }
      </List>
    )
}

export default RecentTransactions;