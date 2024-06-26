/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import './Credits.css';
import AccountBalance from './AccountBalance';

const Credits = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    //capture the time that new credit transaction was added
    const currentDate = new Date();
    // format date as: YYYY-MM-DD
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // Extract form data from the e (submit event)
    const formData = new FormData(e.target);
      // Check if both fields are filled out
      if (!formData.get('amount') || !formData.get('description')) {
        // Alert the user to fill out both fields
        alert('Please fill out both amount and description fields.');
        return; // Exit the function without processing the form submission
      }
        
    // Call the function passed from the parent component to add the new credit
    props.addCredit(formData.get('amount'),formData.get('description'),formattedDate);

    // Reset the form fields
    e.target.reset();
  };

  return (
    <div className='outerContainer'>
      <h1 id='creditsHeader'>Credit Transaction History</h1>
      <br/>
        {/* layout of page */}
        <div className='creditContainer'>
          <div className='leftSide'>
              <AccountBalance accountBalance = {props.accountBalance}/>
          </div>
          {/* right side includes table and data insertion fields */}
          <div className='rightSide'>
              
              <table className='creditTable'>
                <thead>
                  <tr>
                    <th>Transaction</th>
                    <th>Amount</th>
                    <th>Date Added</th>
                  </tr>
                </thead>
                <tbody>
                  {/* lopp through array of credit and add to the table */}
                  {props.credits.map((credit, index) => (
                    <tr key={index}>
                      {/* convert string to number then adjust how many places after deciimal we want */}
                      <td>${parseFloat(credit.amount).toFixed(2)}</td>
                      <td>{credit.description}</td>
                      <td>{credit.date?.split('T')[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

            <div className='inputField'>
            <p>Insert new transaction:</p>
            <form className='creditForm' onSubmit={handleSubmit}>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" /><br /><br />
              <label htmlFor="amount">Amount:</label>
              <input type="text" id="amount" name="amount" /><br /><br />
              <input className="creditInput" type="submit" value="Submit" />
            </form>
            </div>
          </div>
        </div>
      <Link className="home" to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;