import React from 'react'
import { Typography, Container, CssBaseline, Card } from '@material-ui/core'
import { useTheme } from '@material-ui/styles';

import List from '../components/ListFromAPI'

const Home = () => {
  const theme = useTheme()
  return (
    <>
      <CssBaseline/>
      <Container maxWidth="md">
        <Card style={{padding: theme.spacing(3), marginTop: theme.spacing(3) }}>
          <Typography variant="h2" align="center" gutterBottom>React + Node + Express</Typography>
          <Typography paragraph align="center">A list of items from a route in Express.</Typography>
          <List/>
        </Card>
      </Container>
    </>
  )
}
export default Home