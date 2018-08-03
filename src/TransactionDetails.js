import React, {Component} from 'react';
import {transactions} from '../src/data/data';

export default class TransactionDetails extends Component{
    constructor(props){
        super(props);
        this.state={
            transactionobject: {}
        };
    }; 

    componentDidMount(){
        const accountid = this.props.match.params.id;
        const transactionobjectArr =  transactions.filter((transaction)=>{
            return transaction.account === accountid;
        });
        const transactionobject = transactionobjectArr[0];
        this.setState({transactionobject})
    }

    render(){
        const {transactionobject} = this.state;
        return(<div style={{margin:'auto', width: '80%', backgroundColor: '#ffffff'}}>
                <h3 style={{margin:'15px 0px 15px 0px'}}>{`Transaction ${transactionobject.account}`}</h3>
                <hr />
                <div>
                    <div><strong>Account No.</strong>{`: ${transactionobject.account}`}</div>
                    <div><strong>Account Name</strong>{`: ${transactionobject.accountName}`}</div>
                    <div><strong>Currency Code</strong>{`: ${transactionobject.currencyCode}`}</div>
                    <div><strong>Amount</strong>{`: ${transactionobject.amount}`} </div>
                    <div><strong>Transaction Type</strong>{`: ${transactionobject.transactionType}`}</div>
                </div>
            </div>)
    }
}