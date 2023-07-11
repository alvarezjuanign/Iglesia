import { useEffect, useRef, useState } from 'react'

export function useObserver () {
  const boxRef = useRef(null)
  const [isIntersected, setIsIntersected] = useState(false)

  const callback = (entries) => {
    const [entry] = entries
    setIsIntersected(entry.isIntersecting)
  }

  const options = {
    root: null,
    rootMargin: '0px',
    treshold: 1.0
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callback, options)
    if (boxRef.current) observer.observe(boxRef.current)

    return () => {
      if (boxRef.current) observer.unobserve(boxRef.current)
    }
  }, [boxRef])

  return [boxRef, isIntersected]
}
