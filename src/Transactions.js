import React, { Component } from 'react';
import { Column, Table } from 'react-virtualized';
import filterBasedOnInputSelections from './utils/filterArrayBasedOnInputSelection';
import capFirstLetter from './utils/capFirstLetter';
import 'react-virtualized/styles.css'; 

class Transactions extends Component {
  constructor(props){
    super(props);
    this.state={
        transactions: this.props.transactions,
        updatedTransactions: this.props.transactions
      };
  };

  componentWillReceiveProps(nextProps){
    const {filters} = nextProps;
    const {firstFilterCriteria, secondFilterCriteria} = filters;
    const updatedTransactions = filterBasedOnInputSelections(this.state.transactions, firstFilterCriteria, secondFilterCriteria);
    this.setState({updatedTransactions});
  };

  render() {
    return (
        <Table
            width={800}
            height={800}
            headerHeight={20}
            rowHeight={30}
            rowCount={this.state.updatedTransactions.length}
            rowGetter={({ index }) => this.state.updatedTransactions[index]}
          >
            <Column
              label='ACCOUNT NO.'
              dataKey='account'
              width={150}
              cellRenderer={
                ({cellData}) => (
                  <span onClick={(event) => event.stopPropagation()}>
                    <a href={`/transactions/${cellData}`} target="_blank" style={{color: "black"}}>{capFirstLetter(cellData)}</a>
                  </span>
                )
              }
            />
            <Column
              width={200}
              label='ACCOUNT NAME'
              dataKey='accountName'
            />
             <Column
              label='CURRENCY'
              dataKey='currencyCode'
              width={100}
            />
             <Column
              label='AMOUNT'
              dataKey='amount'
              width={100}
            />
             <Column
              label='TRANSACTION TYPE'
              dataKey='transactionType'
              width={200}
              cellRenderer={
                ({cellData}) => (
                  <span onClick={(event) => event.stopPropagation()}>
                    {capFirstLetter(cellData)}
                  </span>
                )
              }
            />
        </Table>
    );
  }
};

export default Transactions;
