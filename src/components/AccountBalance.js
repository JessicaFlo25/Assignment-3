/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    console.log("here " + this.props.accountBalance)
    return (
      <div>
        Balance: ${parseFloat(this.props.accountBalance).toFixed(2)}
      </div>
    );
  }
}

export default AccountBalance;