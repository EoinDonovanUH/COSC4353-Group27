import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewFuelQuote = () => {
  
  const navigate = useNavigate();

  const id = useSelector((state) => state.user.userId);
  const { address1, address2, city, stateCode, zipcode } = useSelector(
    (state) => state.client
  );

  async function handleOnSubmit(e) {
    
    e.preventDefault();
    
    // console.log(document.getElementById("delivDate").value);
    
    const formData = {
      user_credentials: id,
      gallons_requested: document.getElementById("galsReqd").value,
      delivery_date: document.getElementById("delivDate").value,
      address1: address1,
      address2: address2,
      city: city,
      _state: stateCode,
      zipcode: zipcode,
    };
    try {
      const response = await fetch("http://localhost:3500/new-fuel-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const { message, suggested_price, total_amount_due } = await response.json();

      if (response.status === 200 || response.status === 201) {
        navigate("/user/fuel-quote-history")
      } else alert(message);
    } catch (error) {
      console.error(error);
      alert("Unable to complete request");
    }
  }

  return (
    <div>
      <h1>Fuel Quote Form</h1>
      <fieldset>
        <form onSubmit={handleOnSubmit}>
          <p>
            <label for="galsReqd">
              <b>Gallons Requested:</b>{" "}
            </label>
            <input
              type="number"
              name="gallons"
              id="galsReqd"
              required
            />
            <label for="delivDate">
              <b>Delivery Date:</b>
            </label>
            <input
              onChange={() =>
                console.log(document.getElementById("delivDate").value)
              }
              type="date"
              name="date"
              id="delivDate"
              required
            />
          </p>
          <p className="button">
            <input type="submit" value="Submit" id="hoverYes" />
          </p>
        </form>
      </fieldset>
      <p>
        <br />
      </p>
      <fieldset>
        <div>
          <p>
            <b>Delivery Address: </b>
            {address1} {address2} {city}, {stateCode} {zipcode}
          </p>
        </div>
        <p>
          <b>Suggested price:</b>
        </p>
        <p>
          <b>Total:</b>
        </p>
      </fieldset>
    </div>
  );
};

export default NewFuelQuote;
