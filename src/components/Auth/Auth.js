import React from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import Input from './Input'
const Auth = () => {
    const classes = useStyles();

    const isSignup = false;

    const handleSubmit = () => {

    }

    const handleChange = () => {

    }

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up': "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (

                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="firstName" label="First Name" handleChange={handleChange} half/>
                                </>
                            )
                        }
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
