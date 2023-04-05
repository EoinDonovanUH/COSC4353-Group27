import React from "react";
import { useSelector } from "react-redux";

const FuelQuoteHistory = () => {
  const id = useSelector((state) => state.user.userId);
  const formData = { user_credentials: id };

  // try {
  //   const response = await fetch("http://localhost:3500/fuel-quote-history", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   const { message, history } = await response.json();

  //   if (response.status === 200 || response.status === 201) {
  //   } else alert(message);
  // } catch (error) {
  //   console.error(error);
  //   alert("Unable to complete request");
  // }

  // const historyList = history.value
  // const listQuotes = history.map(history => <li>{history}</li>)

  return (
    <div className="center">
      <h1>Fuel Quote History</h1>
      <table>
        <thead>
          <tr className="row">
            <th>Gallons Requested</th>
            <th>Delivery Address</th>
            <th>Delivery Date</th>
            <th>Suggested Price per Gallon</th>
          </tr>
        </thead>
        <tbody>
          <tr className="row">
            <td>{}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FuelQuoteHistory;
