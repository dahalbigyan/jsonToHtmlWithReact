const filterBasedOnInputSelections = (transactions, filterCriteria1, filterCriteria2)=>{
    let stateobj1 = filterCriteria1;
    let stateobj2 = filterCriteria2;
    let accountNameOptionschecked;
    let updatedTransactions=[];
    let updatedTransactions_2=[] // 2 inclusive criterion
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
            .forEach((item)=>{
              if(stateobj1[item]['check']){
                transactions.forEach(el=>{
                  if(el.accountName === item){
                    updatedTransactions.push(el);
                  };
                });
              }
        });
     return updatedTransactions;
   }; 
   if(accountNameOptionschecked && transactionTypeOptionschecked){
    Object
        .keys(stateobj1)
        .forEach((item)=>{
          if(stateobj1[item]['check']){
            transactions.forEach(el=>{
              if(el.accountName === item){
                updatedTransactions.push(el);
              };
            });
          }
        });
    Object
        .keys(stateobj2)
        .forEach((item)=>{
          if(stateobj2[item]['check']){
            updatedTransactions.forEach(el=>{
              if(el.transactionType === item){
                updatedTransactions_2.push(el);
              };
            });
          }
        });
        return updatedTransactions_2;
    };

    if(!accountNameOptionschecked && transactionTypeOptionschecked){
        Object
            .keys(stateobj2)
            .forEach((item)=>{
              if(stateobj2[item]['check']){
                transactions.forEach(el=>{
                  if(el.transactionType === item){
                    updatedTransactions.push(el);
                  };
                });
              }
            });
        return updatedTransactions;
    };

    if(!accountNameOptionschecked && !transactionTypeOptionschecked){
        return transactions;
      }
};

export default filterBasedOnInputSelections;