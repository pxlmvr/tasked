import { Breadcrumbs, Link } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

type Props = {
  currentPage: 'home' | 'edit'
}

export const PageNavigation: React.FC<Props> = ({ currentPage }) => {
  return (
    <header>
      <Breadcrumbs
        sx={{ fontSize: '0.875rem' }}
        aria-label="breadcrumb"
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
      >
        <Link underline="hover" color="text.primary" href="/">
          Task Management
        </Link>
        <Link
          sx={{ textTransform: 'capitalize' }}
          underline="hover"
          color="grey.600"
          href="#"
        >
          {currentPage}
        </Link>
      </Breadcrumbs>
    </header>
  )
}
