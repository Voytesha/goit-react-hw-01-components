import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './profile/Profile';
import { Statistics } from './statistics/Statistics';
import {FriendsList} from './friends/FriendsList';
import {TransactionHistory} from './transactions/TransactionHistory';
import appCSS from './App.module.css';

export const App = () => {
  return (<div className={appCSS.container}>
    <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
    <Statistics title="Upload stats" stats={data} />
    <FriendsList friends={friends}/>
    <TransactionHistory transactions={transactions} />
  </div>);
};