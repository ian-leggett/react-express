import { createMuiTheme } from '@material-ui/core/styles'

// A quick theme override as an example
const theme = createMuiTheme({
  overrides: {
    MuiCard: {
      root: {
        background: 'linear-gradient(to bottom, #07a4ed 0%,#019BE5 100%)',
        color: 'white',
      }
    }
  }
})

export default theme