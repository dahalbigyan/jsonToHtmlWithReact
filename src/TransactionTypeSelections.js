import React, { Component } from 'react';
import filterBasedKey from './utils/filterUniqueColumnValues';
import {transactions} from '../src/data/data';
import capFirstLetter from './utils/capFirstLetter';

class TransactionTypeSelections extends Component{
    constructor(props){
        super(props);
        this.state={
            secondFilterCriteria: filterBasedKey(transactions, 'transactionType')
        };
    };

    renderTransactionTypeInputFields = ()=>{
        const {secondFilterCriteria} = this.state;
        return Object
                .keys(secondFilterCriteria)
                .map((item)=>{
                    return(
                      <div key={item}>
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={secondFilterCriteria[item]['check']} onChange={this.handleToggleTransactionType} /><span>{capFirstLetter(item)}</span>
                      </div>
                    );
                  }); 
      };

      handleToggleTransactionType = (event)=>{
        const key = event.target.id;
        const {secondFilterCriteria} = this.state;
        this.setState((prevState, props)=>{
          secondFilterCriteria[key]['check'] = !prevState.secondFilterCriteria[key]['check']; 
          return {secondFilterCriteria}
         });
        this.props.handleToggleTransactionfilter(this.state.secondFilterCriteria);
      };

    render(){
        return(
            <div>{this.renderTransactionTypeInputFields()}</div>
        )
    } 
};

export default TransactionTypeSelections;