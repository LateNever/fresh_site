import { useState } from 'react'
import { useEffect } from 'react'

export const useMountModal = ({ modal }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    if (modal && !mounted) {
      setMounted(true)
    } else if (!modal && mounted) {
      setTimeout(() => {
        setMounted(false)
      }, 200)
    }
  }, [modal])
  return { mounted }
}
