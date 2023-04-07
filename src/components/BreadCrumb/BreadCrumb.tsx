import React from 'react'
import { makeStyles } from '@mui/styles'
import { Link } from '@mui/material'
import Typography from '../Typography'

import { BreadCrumbStyled } from './styles'

const useStyles = makeStyles(BreadCrumbStyled)

interface CreadCrumbItemProp {
  url?: string
  onClick?: () => void
  label: string
}

export interface Props {
  pathArr: CreadCrumbItemProp[]
}

const BreadCrumb = ({
  pathArr
}: Props) => {
  const classes = useStyles()

  return (
    <div className={classes.breadGrumbWrp}>
      {
        pathArr.map((path, index) => {
          const keyVal = `${path.label}${index}`

          return (
            <div className={classes.pathItemWrp} key={ keyVal }>
              {
                path.url ? (
                  <Link onClick={ (path.onClick) ? path.onClick : () => {} } href={ `${path.url}` } >
                    <Typography className={classes.pathItemTextLink} fontSize='18px'>
                      {path.label}
                    </Typography>
                  </Link>
                ) : (
                  <Typography className={classes.pathItemText} fontSize='18px'>
                    {path.label}
                  </Typography>
                )
              }
              {(index < pathArr.length - 1) && <div className={classes.breadCrumbSeparator}>/</div>}
            </div>
          )
        })
      }
    </div>
  )
}

export default BreadCrumb
