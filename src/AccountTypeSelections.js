import React, { Component } from 'react';
import filterBasedKey from './utils/filterUniqueColumnValues';
import {transactions} from '../src/data/data';

class AccountTypeSelection extends Component{
    constructor(props){
        super(props);
        this.state={
            firstFilterCriteria: filterBasedKey(transactions, 'accountName')
        };
    };

    renderAccountNameInputFields= ()=>{
        const {firstFilterCriteria} = this.state;
        return Object
                .keys(firstFilterCriteria)
                .map((item)=>{
                    return(
                      <div key={item}>
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={firstFilterCriteria[item]['check']} onChange={this.handleToggleAccountName} /><span>{item}</span>
                      </div>
                      );
                  }); 
    };

    handleToggleAccountName = (event)=>{
        const key = event.target.id;
        const {firstFilterCriteria} = this.state;
        this.setState((prevState, props)=>{
          firstFilterCriteria[key]['check'] = !prevState.firstFilterCriteria[key]['check']; 
          return {firstFilterCriteria}
         });
        this.props.handleToggleAccountfilter(this.state.firstFilterCriteria);
    };

    render(){
        return(
            <div>{this.renderAccountNameInputFields()}</div>
        )
    } 
};

export default AccountTypeSelection;