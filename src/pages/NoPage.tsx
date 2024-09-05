import { useEffect, useState } from 'react'
import '../styles/NoPage.css'

export const NoPage = () => {
  const [xAxis, setXAxis] = useState(-100)
  const [yAxis, setYAxis] = useState(-150)

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      const pageX = window.innerWidth
      const pageY = window.innerHeight

      const mouseY = event.pageY
      const newYAxis = ((pageY / 2 - mouseY) / pageY) * 300

      const mouseX = event.pageX / -pageX
      const newXAxis = -mouseX * 100 - 100

      setXAxis(newXAxis)
      setYAxis(newYAxis)
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="box">
      <div className="box__ghost">
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>
        <div className="symbol"></div>

        <div className="box__ghost-container">
          <div
            className="box__ghost-eyes"
            style={{ transform: `translate(${xAxis}%, -${yAxis}%)` }}
          >
            <div className="box__eye-left"></div>
            <div className="box__eye-right"></div>
          </div>
          <div className="box__ghost-bottom">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="box__ghost-shadow"></div>
      </div>

      <div className="box__description">
        <div className="box__description-container">
          <div className="box__description-title">Whoops!</div>
          <div className="box__description-text">
            It seems like we couldn't find the page you were looking for
          </div>
        </div>

        <a href="/" className="box__button">
          Go back
        </a>
      </div>
    </div>
  )
}
