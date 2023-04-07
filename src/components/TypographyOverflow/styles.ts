import { createStyles } from '@mui/styles'

export default () =>
  createStyles({
    singleLine: {
      display: 'block',
      whiteSpace: 'nowrap'
    },
    multiLine: {
      display: '-webkit-box',
      whiteSpace: 'initial',
      wordBreak: 'break-word'
    },
    wrapper: {
      '-webkit-box-orient': 'vertical',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: '0.9px'
    }
  })
