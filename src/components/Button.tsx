export const Button: React.FC<{text: string}> = ({text}) => {
  return (
    <button className="py-3 px-6 flex items-center gap-2.5 bg-primary rounded-lg">
      {text}
      <img src="/arrow-right.svg" alt="Arrow right" className="w-6 h-5"/>
    </button>
  )
}
