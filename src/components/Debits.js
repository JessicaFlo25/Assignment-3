import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance'; 
import './Debits.css'

const Debits = (props) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericAmount = parseFloat(amount) || 0;
    if (numericAmount <= 0) {
      setError('Amount must be greater than 0');
      return;
    }

    props.addDebit(description, numericAmount, new Date().toISOString().slice(0, 10));
    setDescription('');
    setAmount('');
    setError(''); 
  };

  let debitsView = () => {
    return props.debits.map((debit) => {
      let date = debit.date.slice(0, 10);
      return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
    });
  };

  return (
    <div className='outerContainer1'>
      <h1>Debits</h1>
      <div className='fein'>
        <AccountBalance accountBalance={props.accountBalance}/>
      </div>
      {debitsView()}
      <form onSubmit={handleSubmit}>
        <input className="butts" type="text" name="description" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input className="butts" type="text" name="amount" value={amount} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} />
        <button className="butts" type="submit">Add Debit</button>
      </form>
      {error && <p className="error">{error}</p>}
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;
