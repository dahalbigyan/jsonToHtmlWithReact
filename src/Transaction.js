import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Transaction extends Component {
  constructor(props){
    super(props);
  }; 

    render(){
      const {columnVal, link} = this.props;
      if(link){
        return (
          <td style={{margin:'5px 4px 2px 4px'}}><u><a style={styles.link} href={`transactions/${columnVal}`} target="_blank">{columnVal}</a></u></td>
        );
      };
      return (
        <td style={{margin:'5px 4px 2px 4px'}}>{columnVal}</td>
    );
  }
};
const styles = {
  link: {
    color: "black",
    ":link": {
      textDecoration: "underline",
      color: "black",
    },
  },
};

export default Transaction;
