const Search: React.FC<{ classList?: string, small?: boolean, searchTerm?: string, onSearchChange?: any }> = ({ classList, small, searchTerm, onSearchChange }) => {

  return (
    <div className={`relative max-w-[28.125rem] text-black ${classList}`}>
      <input
        id="search"
        type="text"
        name="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="What are you looking for?"
        className={`w-full rounded-xl ${small ? "p-[10px]" : "p-[18px]"}`}
      />
      <div className={`absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-xl bg-primary ${small ? "p-[10px]" : "p-[14px]"}`}>
        <img src="/search.svg" alt="Search" className={small ? "w-4 h-4" : "h-5 w-5"} />
      </div>
    </div>
  )
}

export default Search
