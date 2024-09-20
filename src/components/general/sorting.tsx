const Sorting = () => {
  return (
    <select name="sort" id="sort" defaultValue="" className="rounded-xl p-[10px] text-black">
      <option disabled value="" className="opacity-50"> Select an option </option>
      <option value="ASC">Price ascending</option>
      <option value="DSC">Price descending</option>
    </select>
  )
}

export default Sorting
