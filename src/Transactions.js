import React, { Component } from 'react';
import Transaction from './Transaction';
  
class Transactions extends Component {
  constructor(props){
    super(props);
    this.state={
        transactions: this.props.transactions, 
        updatedTransactions: this.props.transactions
      };
  }; 

  /* some refactoring needs to be done to modularize code here. */
  componentWillReceiveProps(nextProps){
    const {filters} = nextProps;
    const {stateobj1, stateobj2} = filters;
    let updatedTransactions =[]; 
    let accountNameOptionschecked;
    for(let i in stateobj1){
      if(stateobj1[i]['check']===true){
        accountNameOptionschecked=true;
      }
    }; 

    let transactionTypeOptionschecked;
    for(let i in stateobj2){
      if(stateobj2[i]['check']===true){
        transactionTypeOptionschecked=true;
      }
    }; 

    if(accountNameOptionschecked && !transactionTypeOptionschecked){
      Object
          .keys(stateobj1)
          .map((item)=>{
            if(stateobj1[item]['check']){
            updatedTransactions = this.state.transactions.filter((transaction)=>{
              return transaction.accountName === item;
            }); 
            this.setState({updatedTransactions});
            }
          }); 
    }else if(accountNameOptionschecked && transactionTypeOptionschecked){
      Object
          .keys(stateobj1)
          .map((item)=>{
              if(stateobj1[item]['check']){
              updatedTransactions = this.state.transactions.filter((transaction)=>{
                return transaction.accountName === item;
              }); 
              this.setState({updatedTransactions});
              }
            }); 
      Object
          .keys(stateobj2)
          .map((item)=>{
            if(stateobj2[item]['check']){
            let updatedTransactions_2 = updatedTransactions.filter((transaction)=>{
              return transaction.transactionType === item;
            }); 
            this.setState({updatedTransactions: updatedTransactions_2});
            }; 
          }); 
    } else if(!accountNameOptionschecked && transactionTypeOptionschecked){
      Object
          .keys(stateobj2)
          .map((item)=>{
            if(stateobj2[item]['check']){
            let updatedTransactions = this.state.transactions.filter((transaction)=>{
              return transaction.transactionType === item;
            }); 
            this.setState({updatedTransactions});
            }; 
          }); 
      Object
          .keys(stateobj1)
          .map((item)=>{
            if(stateobj1[item]['check']){
              let updatedTransactions_2 = updatedTransactions.filter((transaction)=>{
              return transaction.accountName === item;
            }); 
            this.setState({updatedTransactions: updatedTransactions_2});
            }
          }); 
    }else if(!accountNameOptionschecked && !transactionTypeOptionschecked){
      updatedTransactions = this.props.transactions;
      this.setState({updatedTransactions});
    }
  };


    renderTransactions =()=>{
       const items= this.state.updatedTransactions.map((item)=>{
       const {account, accountName, currencyCode, amount, transactionType} = item;
       const cappedTransactionType = transactionType.charAt(0).toUpperCase() + transactionType.substr(1);
            return(<tr key={account}>
                        <Transaction columnVal={account} link={true}/>
                        <Transaction columnVal={accountName} />
                        <Transaction columnVal={currencyCode} />
                        <Transaction columnVal={amount} />
                        <Transaction columnVal={cappedTransactionType} />
                </tr>)
       });
        return(items);
    }

  render() {
    console.log(this.state.updatedTransactions);
    return (
        <div style={{
          width: '80%',
          fontSize: '10px', 
          marginLeft: '10px'
        }}>
            <table>
                <tbody>
                    <tr>
                        <th>ACCOUNT NO.</th>
                        <th>ACCOUNT NAME</th> 
                        <th>CURRENCY</th>
                        <th>AMOUNT</th> 
                        <th>TRANSACTION TYPE</th>
                    </tr>
                  {this.renderTransactions()}
                </tbody>
            </table>
        </div>
    );
  }
}

export default Transactions;
