// ** React Imports
import React, { Fragment, useState, useRef, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'

// ** Hook Imports
import useOnEscapeKeyDown from '@/shared/hooks/useOnEscapeKeyDown'

// ** Icon Imports
import Icon from '../icon'
import { useOnClickOutside } from 'usehooks-ts'

// ** Styled Component Imports
import { ScrollOverlay, ClickableOverlay, StyledModal, CloseIcon } from './styles'

type RenderLinkFnProps = { open: () => void }
type RenderContentFnProps = { close: () => void }

interface ModalProps {
  className?: string
  testid?: string
  variant?: 'center' | 'aside'
  width?: number
  withCloseIcon?: boolean
  isOpen: boolean
  onClose?: () => void
  renderLink?: (props: RenderLinkFnProps) => React.ReactNode
  renderContent: (props: RenderContentFnProps) => React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  className,
  testid = 'modal',
  variant = 'center',
  width = 600,
  withCloseIcon = true,
  isOpen: propsIsOpen,
  onClose: tellParentToClose = () => {},
  renderLink,
  renderContent
}) => {
  const [stateIsOpen, setStateOpen] = useState(false)
  const isControlled = typeof propsIsOpen === 'boolean'
  const isOpen = isControlled ? propsIsOpen : stateIsOpen

  const $modalRef = useRef<HTMLDivElement>(null)
  const $clickableOverlayRef = useRef<HTMLDivElement>(null)

  const closeModal = useCallback(() => {
    console.log('worki')
    if (!isControlled) {
      setStateOpen(false)
    } else {
      tellParentToClose()
    }
  }, [isControlled, tellParentToClose])

  useOnClickOutside($modalRef, closeModal)
  useOnEscapeKeyDown({ isListening: isOpen, onEscapeKeyDown: closeModal })

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'visible'

    return () => {
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  return (
    <Fragment>
      {!isControlled && renderLink && renderLink({ open: () => setStateOpen(true) })}

      {isOpen &&
        ReactDOM.createPortal(
          <ScrollOverlay>
            <ClickableOverlay $variant={variant} ref={$clickableOverlayRef}>
              <StyledModal className={className} $variant={variant} $width={width} data-testid={testid} ref={$modalRef}>
                {withCloseIcon && (
                  <CloseIcon $variant={variant} onClick={closeModal}>
                    <Icon icon={'tabler:x'} />
                  </CloseIcon>
                )}
                {renderContent({ close: closeModal })}
              </StyledModal>
            </ClickableOverlay>
          </ScrollOverlay>,
          document.body
        )}
    </Fragment>
  )
}

export default Modal
