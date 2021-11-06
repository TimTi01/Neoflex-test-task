import React, {useState} from 'react';
import useForm from "../Hooks/useForm";
import {Button, Card, CardContent, Container, Grid, TextField, Select, FormControl, InputLabel, MenuItem, Dialog, DialogTitle} from "@mui/material";

export const SecondForm = () => {
    const [values, handleChange] = useForm()
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(JSON.stringify(values))
    }

    return (
        <Container style={{width: '100wh', height: '100vh'}}>
            <Grid container
                  height='100%'
                  justifyContent='center'
                  alignItems='center'>
                <Card>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <Grid container flexDirection='column' alignItems='center' spacing={1}>
                                <Grid item>
                                    <TextField
                                        value={values.lastName || ''}
                                        onChange={handleChange}
                                        id="lastName-textField"
                                        type='text'
                                        name='lastName'
                                        label="Фамилия"
                                    />
                                </Grid>

                                <Grid item >
                                    <TextField
                                        value={values.name || ''}
                                        onChange={handleChange}
                                        id="name-textField"
                                        type='text'
                                        name='name'
                                        label="Имя"
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        value={values.familyName || ''}
                                        onChange={handleChange}
                                        id="familyName-textField"
                                        type='text'
                                        name='familyName'
                                        label="Отчество"
                                    />
                                </Grid>

                                <Grid item >
                                    <TextField
                                        style={{width: '26ch'}}
                                        value={values.date || ''}
                                        onChange={handleChange}
                                        id="date-textField"
                                        type='date'
                                        name='date'
                                    />
                                </Grid>

                                <Grid item>
                                    <FormControl style={{width: '26ch'}}>
                                        <InputLabel id="demo-simple-select-label">Пол</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="gender-simple-select"
                                            value={values.gender || ''}
                                            label="Пол"
                                            onChange={handleChange}
                                            name='gender'
                                        >
                                            <MenuItem value={'Женщина'}>Женщина</MenuItem>
                                            <MenuItem value={'Мужчина'}>Мужчина</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>

                                <Grid item>
                                    <Button variant='contained'
                                            type='submit'
                                            onClick={handleClickOpen}
                                    >
                                        Сохранить
                                    </Button>
                                    <Dialog
                                        open={open}
                                        keepMounted
                                        onClose={handleClose}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle>{"Информация успешно сохранена"}</DialogTitle>
                                    </Dialog>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Container>
    );
};