import { useEffect } from 'react'

import { KeyCodes } from '../constants/key-codes'

interface Props {
  isListening: boolean
  onEscapeKeyDown: () => void
}

const useOnEscapeKeyDown = ({ isListening, onEscapeKeyDown }: Props): void => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === KeyCodes.ESCAPE) {
        onEscapeKeyDown()
      }
    }

    if (isListening) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isListening, onEscapeKeyDown])
}

export default useOnEscapeKeyDown
