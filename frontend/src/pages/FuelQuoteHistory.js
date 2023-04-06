import { useSelector } from "react-redux"
import Quote from "../components/Quote"

const FuelQuoteHistory = () => {
  const fuelQuotes = useSelector((state) => state.fuelQuotes.quotes)

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
            <th>Total Amount Due</th>
          </tr>
        </thead>
        <tbody>
          {fuelQuotes.map((quote) => (
            <Quote
              key={quote._id}
              gallons_requested={quote.gallons_requested}
              delivery_date={quote.delivery_date}
              address1={quote.address1}
              city={quote.city}
              _state={quote._state}
              zipcode={quote.zipcode}
              suggested_price={quote.suggested_price}
              total_amount_due={quote.total_amount_due}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FuelQuoteHistory
