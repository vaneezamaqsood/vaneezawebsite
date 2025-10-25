import { useEffect, useState, RefObject } from "react"

interface Dimensions {
  width: number
  height: number
}

export function useDimensions<T extends HTMLElement>(ref: RefObject<T | null>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [ref])

  return dimensions
}
