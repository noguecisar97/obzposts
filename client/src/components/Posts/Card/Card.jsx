import React from 'react'
import useStyles from './styles'

export const Card = (props) => {
    const { post } = props
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <img className={classes.image} src={post.selectedFile} alt="" />
            <div className={classes.header}>
                <h1 className={classes.title}>    
                    {post.title}
                </h1>
            </div>
            
            <div className={classes.section}>               
                <p className={classes.textTitle}>
                    {post.name}
                </p>
                <p className={classes.textArea}>
                    {post.message.split(' ').splice(0, 20).join(' ')}
                </p>        
            </div>
        </div>
    )
}