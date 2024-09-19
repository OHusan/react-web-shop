import { useMemo, useState } from "react"
import { initialItems } from "../utils/initialTeam";

export const Test = () => {
  const [count, setCount] = useState(0);
  const [items] = useState(initialItems);

  const selectedItem = useMemo(
    () => items.find((item) => item.id === count),
    [count, items],
  );
  return(
    <div className="container flex items-center flex-col">
      <h1>Count: {count}</h1>
      <h1>Selected Item: {selectedItem?.id}</h1>
      <button className="p-2 bg-blue-400 rounded-lg text-white hover:scale-95 transition-all duration-300" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  )
}
