/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';

const Credits = (props) => {
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
                      <td>{credit.date.split('T')[0]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            <div className='inputField'>
            <h1>Insert new credit debt:</h1>
            <form>
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