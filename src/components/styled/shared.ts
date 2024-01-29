import styled from '@emotion/styled'

export const SrOnlyLabel = styled('label')({
  border: 0,
  clipPath: 'rect(1px, 1px, 1px, 1px)',
  height: 1,
  width: 1,
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
})

export const FormHeader = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.5rem',
})

export const Actions = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  columnGap: '0.75rem',
  marginTop: '2.5rem',
  '& > button, & > a': {
    flex: 1,
  },
})

export const CreatedAt = styled('div')({
  display: 'flex',
  alignItems: 'center',
  fontSize: '0.75rem',
})

export const SrOnly = styled('div')({
  position: 'absolute',
  width: '1px',
  height: '1px',
  margin: '-1px',
  padding: '0',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  border: '0',
})
