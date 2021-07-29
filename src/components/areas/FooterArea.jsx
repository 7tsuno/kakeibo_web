import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputIcon from 'components/elements/icons/InputIcon'
import CalenderIcon from 'components/elements/icons/CalenderIcon'
import ReportIcon from 'components/elements/icons/ReportIcon'
import CalculationIcon from 'components/elements/icons/CalculationIcon'
import { BottomNavigation, BottomNavigationAction, Divider } from '@material-ui/core'
import { PAGE } from 'constants/page'
import { useHistory } from 'react-router'

const useStyles = makeStyles(() => ({
  footer: {
    marginTop: 'auto'
  }
}))

const FooterArea = ({ page }) => {
  const classes = useStyles()
  const history = useHistory()
  return (
    <footer className={classes.footer}>
      <Divider />
      <BottomNavigation
        value={page.path}
        onChange={(event, newValue) => {
          history.push(newValue)
        }}
        showLabels
      >
        <BottomNavigationAction value={PAGE.input.path} icon={<InputIcon />} />
        <BottomNavigationAction value={PAGE.calender.path} icon={<CalenderIcon />} />
        <BottomNavigationAction value={PAGE.report.path} icon={<ReportIcon />} />
        <BottomNavigationAction value={PAGE.calculation.path} icon={<CalculationIcon />} />
      </BottomNavigation>
    </footer>
  )
}

export default FooterArea
