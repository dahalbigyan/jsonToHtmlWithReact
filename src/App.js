import React, { Component } from 'react';
import {transactions} from '../src/data/data';
import Transactions from './Transactions';
import filterBasedKey from './utils/filterUniqueColumnValues';

const firstObj = filterBasedKey(transactions, 'accountName');
const lastObj = filterBasedKey(transactions, 'transactionType');

const stateobj1 = {}
for(let key in firstObj){
  stateobj1[firstObj[key]] = {
    check: false
  }
}; 

const stateobj2 = {}; 
for(let key in lastObj){
  stateobj2[lastObj[key]] = {
    check: false
  }
}; 

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      stateobj1, stateobj2
    }
  };

  renderAccountNameInputFields= ()=>{
    const {stateobj1} = this.state;
    let objvals=[];
    for(let i in stateobj1){
      objvals.push(stateobj1[i]['check'])
    };
    if(objvals.includes(true)){
      return Object
              .keys(stateobj1)
              .map((item)=>{
                if(stateobj1[item]['check']){
                  return(
                    <div key={item}>
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleAccountName} /><span>{item}</span>
                    </div>
                  );
                }else{
                  return(
                    <div key={item}>
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleAccountName} disabled/><span>{item}</span>
                    </div>
                  );
                }
              }); 
    }else{
      return Object
              .keys(stateobj1).map((item, i)=>{
                return(
                  <div key={item}>
                      <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={stateobj1[item]['check']} onChange={this.handleToggleAccountName} /><span>{item}</span>
                  </div>
                );
              });
    };
  };

  handleToggleAccountName = (event)=>{
    const key = event.target.id;
    const {stateobj1} = this.state;
    this.setState((prevState, props)=>{
      const current = !prevState.stateobj1[key]['check']; 
      stateobj1[key]['check'] = current;
      return {stateobj1}
   })
  };

  renderTransactionTypeInputFields = ()=>{
    const {stateobj2} = this.state;
    let objvals=[];
    for(let i in stateobj2){
      objvals.push(stateobj2[i]['check'])
    };
    if(objvals.includes(true)){
      return Object
              .keys(stateobj2)
              .map((item)=>{
                const cappedItem= item.charAt(0).toUpperCase() + item.substr(1);
                if(stateobj2[item]['check']){
                  return(
                    <div key={item} >
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleTransactionType} /><span>{cappedItem}</span>
                    </div>
                  );
                }else{
                  return(
                    <div key={item}>
                        <input style={{marginLeft:'4px'}} type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleTransactionType} disabled/><span>{cappedItem}</span>
                    </div>
                  );
                }
              }); 
    }else{
      return Object
              .keys(stateobj2)
              .map((item, i)=>{
                const cappedItem= item.charAt(0).toUpperCase() + item.substr(1);
                return(
                  <div style={{marginLeft:'4px'}} key={item}>
                      <input type="checkbox" id={item} value={stateobj2[item]['check']} onChange={this.handleToggleTransactionType} /><span>{cappedItem}</span>
                  </div>
                );
              });
    };
  };

  handleToggleTransactionType = (event)=>{
    const key = event.target.id;
    const {stateobj2} = this.state;
    this.setState((prevState, props)=>{
      const current = !prevState.stateobj2[key]['check']; 
      stateobj2[key]['check'] = current;
      return {stateobj2}
   })
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
                <div style={{marginBottom:'4px', fontFamily: 'Roboto', fontFamily: 'sansSerif',fontWeight: "300"}}>{this.renderAccountNameInputFields()}</div>
              </div>
              <div style={{backgroundColor: '#e0e1e2', marginLeft:'4px', marginTop: "8px", marginBottom:'6px'}}>
                <div style={{marginTop:'8px', marginTop:'4px'}}>Transaction Type</div>
                <div style={{marginBottom:'4px', fontFamily: 'Roboto', fontFamily: 'sansSerif',fontWeight: "300"}}>{this.renderTransactionTypeInputFields()}</div>
              </div>
            </div>
            <Transactions transactions={transactions} filters={this.state} style={{fontFamily: 'Roboto', fontFamily: 'sansSerif',fontWeight: "300"}}/>
         </div>
        </div>
      );
    };
};

export default App;
