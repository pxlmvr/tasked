import { Breadcrumbs, Link, styled } from '@mui/material'

import NavigateNextIcon from '@mui/icons-material/NavigateNext'

type Props = {
  currentPage: 'home' | 'edit'
}

export const PageNavigation: React.FC<Props> = ({ currentPage }) => {
  return (
    <PageHeader>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ fontSize: '0.875rem' }}
        separator={<NavigateNextIcon fontSize="small" color="primary" />}
      >
        <Link underline="hover" color="text.primary" href="/">
          Task Management
        </Link>
        <Link
          color="grey.600"
          href="#"
          sx={{ textTransform: 'capitalize' }}
          underline="hover"
        >
          {currentPage}
        </Link>
      </Breadcrumbs>
    </PageHeader>
  )
}

const PageHeader = styled('header')({
  marginBottom: '1rem',
})
