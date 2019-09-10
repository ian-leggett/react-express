import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/styles'
import muiTheme from './Theme'
import Home from './pages/Home'

const App = () => {
  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App