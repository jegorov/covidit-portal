import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import * as Images from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {history} from '@/helpers/history';
import {deepPurple} from "@material-ui/core/colors";
import {authenticationService} from "@/services/authentication.service";

//todo тут со стилями полная дичь. Надо править
export const styles = {
    paper: {
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: 1,
        backgroundColor: deepPurple
    },
    form: {
        width: '100%',
        marginTop: 1,
    },
    submit: {
        margin: "3,0,2"
    },
};

export default class SignIn extends Component {

    redirectToHome = () => {
        var user_name = document.getElementById("email").value;
        var user_password = document.getElementById("password").value;
        console.log("user: " + user_name + ", password: " + user_password);
        let currentUser = authenticationService.login(user_name, user_password);
        console.log(!currentUser)
        if (!currentUser) {

        }
        else {
            // history.push("home");
        }
    }

    redirectToRegister = () => {
        history.push("register");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let currentUser = authenticationService.currentUserValue;
        if (currentUser) {
            // history.push("home");
        }
    }

    render() {
        const classes = styles;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <Images.LockOutlined/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary"/>}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={this.redirectToHome}
                            href="#"
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link onClick={this.redirectToRegister} href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
