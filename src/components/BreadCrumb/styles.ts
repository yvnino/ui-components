import { createStyles } from '@mui/styles'
import { colors } from '../ThemeProvider/config/palette'

export const BreadCrumbStyled = createStyles({
  breadGrumbWrp: {
    display: 'flex',
    flexDirection: 'row'
  },
  pathItemWrp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 6
  },
  pathItemTextLink: {
    color: '#94949e',
    cursor: 'pointer',
    fontFamily: 'industryregular'
  },
  pathItemText: {
    color: colors.black.main,
    fontFamily: 'industryregular'
  },
  breadCrumbSeparator: {
    marginLeft: 6,
    fontSize: 24,
    color: '#94949e'
  }
})
