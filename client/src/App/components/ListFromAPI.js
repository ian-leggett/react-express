import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Typography, List, ListItem, ListItemText } from '@material-ui/core'

const ListFromAPI = () => {

  const [listState, setListState] = useState([])
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    axios.get('/api')
      .then((res) => {
        setLoading(false)
        setListState(res.data)
      })
  }, [])

  return (
    <>
      {listState.length && !isLoading ? (
        <List>
          {listState.map((item, index) => {
            return (
              <ListItem style={{textAlign: 'center'}} key={index}>
                <ListItemText primary={item} />
              </ListItem>
            )
          })}
        </List>
      ) : (
        <Typography paragraph align="center">No List Items Found!!!</Typography>
      )
      }
    </>
  )
}

export default ListFromAPI