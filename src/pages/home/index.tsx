import FormDemo from '@/shared/components/form/form-demo'
import TableDemo from './table-demo'
import { Dropdown, DropdownContent, DropdownMenuItem, DropdownTrigger } from '@/shared/components/dropdown'
import Iconify from '@/shared/components/icon'

const Home = () => {
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
    </div>
  )
}

export default Home
