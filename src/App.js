import React, { Component } from 'react';
import {transactions} from '../src/data/data';
import Transactions from './Transactions';
import filterBasedKey from './utils/filterUniqueColumnValues';
import AccountTypeSelection from './AccountTypeSelections';
import TransactionTypeSelection from './TransactionTypeSelections';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstFilterCriteria: filterBasedKey(transactions, 'accountName'), 
      secondFilterCriteria: filterBasedKey(transactions, 'transactionType')
    }
  };

  handleToggleAccountfilter = (accountFilterObject)=>{
    this.setState({firstFilterCriteria: accountFilterObject})
  };

  handleToggleTransactionfilter = (transactionFilterObject)=>{
    this.setState({secondFilterCriteria: transactionFilterObject})
  };

  render(){
      return(
        <div style={{margin:'auto', width: '80%', backgroundColor: '#ffffff'}}> 
         <h3 style={{margin:'15px 0px 15px 0px'}}>My Transactions</h3>
         <hr />
         <div style={{display:"flex"}}>
            <div style={{width: '20%', fontSize: '10px' }}>
              <div style={{marginBottom:'8px'}}><strong>Filters</strong></div>
              <div style={{backgroundColor: '#e0e1e2', marginLeft:'4px'}}>
                <div style={{marginLeft:'4px', marginTop:'4px'}}>Account Name</div>
                <div style={{marginBottom:'4px'}}>
                  <AccountTypeSelection handleToggleAccountfilter={this.handleToggleAccountfilter}/>
                </div>
              </div>
              <div style={{backgroundColor: '#e0e1e2', marginLeft:'4px', marginTop: "8px", marginBottom:'6px'}}>
                <div style={{marginTop:'8px', marginTop:'4px'}}>Transaction Type</div>
                <div style={{marginBottom:'4px'}}>
                  <TransactionTypeSelection handleToggleTransactionfilter={this.handleToggleTransactionfilter}/>
                </div>
              </div>
            </div>
            <Transactions transactions={transactions} filters={this.state}/>
         </div>
        </div>
      );
    };
};

export default App;
