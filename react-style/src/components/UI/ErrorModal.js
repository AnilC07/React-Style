import React from 'react'
import Card from './Card'
import Button from './Button'

import classes from "./ErrorModal.module.css"

function ErrorModal(props) {
  return (
    <>
    <div className={classes.backdrop}></div>
<Card className={classes.modal}>
    <header>
        <h2  className={classes.header}>{props.title}</h2>
    </header>
    <div  className={classes.content}>
<p>{props.message}</p>
    </div>
    <footer  className={classes.actions}>
<Button>Okay</Button>
    </footer>
</Card>
</>  )
}

export default ErrorModal