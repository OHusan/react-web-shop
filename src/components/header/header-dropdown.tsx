import { useEffect, useState } from 'react'
import { preferredValue } from '../../types'

export default () => {
  const [selectedValue, setSelectedValue] = useState(() => {
    const saved = localStorage.getItem(preferredValue)
    return saved || 'USD'
  })
  const options = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
    { value: 'BAM', label: 'BAM' }
  ]

  useEffect(() => {
    window.localStorage.setItem(preferredValue, selectedValue)
    window.dispatchEvent(new Event('storage'))
  }, [selectedValue])

  return (
    <select
      className="active:border-none text-black"
      value={selectedValue}
      onChange={(e) => setSelectedValue(e.target.value)}
    >
      {options.map((option) => {
        return (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        )
      })}
    </select>
  )
}
