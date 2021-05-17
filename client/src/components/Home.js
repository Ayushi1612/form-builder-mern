import { AppBar, Container, Typography } from '@material-ui/core'
import React from 'react'
import AddQuestions from './AddQuestions'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down("sm")]:{
    mainContainer:{
      flexDirection:"column-reverse"
    }
  }
}));
function Home() {
  const classes = useStyles();

    return (
        <div>
            <Container maxWidth="lg">
          
            <AddQuestions/>
            </Container>
        </div>
    )
}

export default Home
