import React, {useState, useEffect} from 'react';
import {Container, Grid, Card, CardContent, TextField, Button} from "@mui/material";
import {useHistory} from "react-router-dom";

export const FirstForm = () => {
    const history = useHistory()
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault()
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        re.test(String(login).toLowerCase())
            ? history.push('/lastForm')
            : setLoginError(true)
    }

    const toggleButton = () => {
        login.length >= 3 && password.length >= 3
            ? setDisabled(false)
            : setDisabled(true)
    }

    useEffect(() => {
        toggleButton()
    }, [login, password])

    return (
        <Container style={{width: '100wh', height: '100vh'}}>
            <Grid container
                  height='100%'
                  justifyContent='center'
                  alignItems='center'>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container flexDirection='column' alignItems='center' spacing={3}>
                                <Grid item>
                                    <TextField
                                        onChange={(e) => {setLogin(e.target.value)}}
                                        id="email-textField"
                                        name='email'
                                        type='email'
                                        label="Логин"
                                        error={loginError}
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        onChange={(e) => {setPassword(e.target.value)}}
                                        id="password-textField"
                                        name='password'
                                        type='password'
                                        label="Пароль"
                                    />
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="contained"
                                        type='submit'
                                        disabled={disabled}
                                    >
                                        Войти
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};