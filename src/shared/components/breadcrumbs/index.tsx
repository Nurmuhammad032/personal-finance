// React Imports
import { Fragment } from 'react'

// ** Styled Component Imports
import { Active, Container } from './styles'

// ** Icon Import
import Icon from '../icon'

const Breadcrumbs = ({ items }: { items: string[] }) => (
  <Container data-testid="breadcrumbs-container">
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && (
          <span style={{ display: 'flex', alignItems: 'center' }} data-testid={`chevron-right-icon-${index}`}>
            <Icon icon={'tabler:chevron-right'} fontSize="16px" />
          </span>
        )}
        {index === items.length - 1 ? <Active>{item}</Active> : <span>{item}</span>}
      </Fragment>
    ))}
  </Container>
)

export default Breadcrumbs
