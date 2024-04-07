/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    //capture the time that new credit transaction was added
    const currentDate = new Date();
    // format date as: YYYY-MM-DD
    const formattedDate = currentDate.toISOString().split('T')[0];
    
    // Extract form data from the e (submit event)
    const formData = new FormData(e.target);
    
    // Call the function passed from the parent component to add the new credit
    props.addCredit(props.creditList.length - 1,formData.get('debtname'),formData.get('amount'),formattedDate);
    console.log(props.credits)

    // Reset the form fields
    e.target.reset();
  };

  return (
    <div>
      <h1>Credits</h1>
      <br/>
        {/* layout of page */}
        <div className='creditContainer'>
          <div className='leftSide'>
            <p>
              Current balance:
            </p>
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
                  {props.credits.map((credit, index) => (
                    <tr key={index}>
                      <td>{credit.description}</td>
                      <td>{credit.amount}</td>
                      <td>{credit.date?.split('T')[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            <div className='inputField'>
            <h1>Insert new credit debt:</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="description">Description:</label>
              <input type="text" id="description" name="description" /><br /><br />
              <label htmlFor="amount">Transaction:</label>
              <input type="text" id="amount" name="amount" /><br /><br />
              <input type="submit" value="Submit" />
            </form>
            </div>
          </div>

          
        </div>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;