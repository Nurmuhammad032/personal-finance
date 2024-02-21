import FormDemo from '@/shared/components/form/form-demo'
import TableDemo from './table-demo'
import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from '@/shared/components/dropdown'
import Iconify from '@/shared/components/icon'
import Modal from '@/shared/components/modal'
import { useState } from 'react'
import { SingleValue } from 'react-select'
import Button from '@/shared/components/button'
import SingleSelect from '@/shared/components/select/single-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const Demos = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<SingleValue<(typeof options)[0]>>(options[0])

  return (
    <div>
      <FormDemo />

      <TableDemo />

      <Dropdown>
        <DropdownTrigger>
          <button>Open Dropdown</button>
        </DropdownTrigger>
        <DropdownContent>
          <DropdownMenuItem>
            <Iconify icon={'tabler:trash'} />
            <span>Hi</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Iconify icon={'tabler:trash'} />
            <span>Hi</span>
          </DropdownMenuItem>
        </DropdownContent>
      </Dropdown>
      <Button onClick={() => setIsOpen(true)}>Open modal</Button>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen} renderContent={() => <div>ha yaxshi</div>} />

      <SingleSelect value={selectedOption} onChange={e => setSelectedOption(e)} options={options} />
    </div>
  )
}

export default Demos
