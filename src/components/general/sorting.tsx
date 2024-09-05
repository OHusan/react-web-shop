const Sorting = () => {
  return (
    <select name="sort" id="sort" className="rounded-xl p-[10px]">
      <option disabled selected className="opacity-50"> Select an option </option>
      <option value="ASC">Ascending</option>
      <option value="DSC">Descending</option>
    </select>
  )
}

export default Sorting
