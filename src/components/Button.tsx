import React from 'react'

export const Button: React.FC<{
  text: string
  primary?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}> = ({ text, primary = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2.5 px-6 py-3 ${primary ? 'bg-primary' : 'bg-white'} rounded-lg`}
    >
      {text}
      <img src="/arrow-right.svg" alt="Arrow right" className="h-5 w-6" />
    </button>
  )
}
