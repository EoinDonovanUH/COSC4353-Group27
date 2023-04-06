function Quote({
  gallons_requested,
  delivery_date,
  address1,
  city,
  _state,
  zipcode,
  suggested_price,
  total_amount_due,
}) {
  return (
    <tr className="row">
      <td>{gallons_requested}</td>
      <td>
        {address1} {city} {_state} {zipcode}
      </td>
      <td>{delivery_date}</td>
      <td>{suggested_price}</td>
      <td>{total_amount_due}</td>
    </tr>
  )
}

export default Quote
