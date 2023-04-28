function Quote({ quoteProps }) {
  const {
    gallons_requested,
    address1,
    city,
    _state,
    zipcode,
    delivery_date,
    suggested_price,
    total_amount_due,
  } = quoteProps
  return (
    <tr className="row">
      <td>{gallons_requested}</td>
      <td>
        {address1} {city} {_state} {zipcode}
      </td>
      <td>{delivery_date}</td>
      <td>{"$" + suggested_price}</td>
      <td>{"$" + total_amount_due}</td>
    </tr>
  )
}

export default Quote
