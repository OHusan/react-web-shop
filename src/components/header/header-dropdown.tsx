import { useState } from "react"

export default () => {
  const [selectedValue, setSelectedValue] = useState("")
  const options = [
    { value: "USD", label: "USD"},
    { value: "EUR", label: "EUR"},
    { value: "USD", label: "USD"},
  ]

  return (
    <select>
      <option value="$">USD</option>
      <option value="€">EUR</option>
      <option value="KM">BAM</option>
    </select>
  )
}
