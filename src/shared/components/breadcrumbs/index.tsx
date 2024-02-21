// React Imports
import { Fragment } from 'react'

// ** Styled Component Imports
import { Active, Container } from './styles'

// ** Icon Import
import Icon from '../icon'

const Breadcrumbs = ({ items }: { items: string[] }) => (
  <Container>
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Icon icon={'tabler:chevron-right'} fontSize="16px" />}
        {index === items.length - 1 ? <Active>{item}</Active> : item}
      </Fragment>
    ))}
  </Container>
)

export default Breadcrumbs
