import React from 'react';
import { StyledLoginForm } from './LoginForm.style';
import { Form, Field } from 'react-final-form';
import { TextField } from 'final-form-material-ui';
import { Paper, Grid, Button } from '@material-ui/core';

const LoginForm = ({ handleSubmit }) => {
    const onSubmit = values => {
        handleSubmit(values);
    };

    const validate = values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }

        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    };

    return (
        <StyledLoginForm>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({ handleSubmit, submitting, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 24 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="email"
                                        component={TextField}
                                        type="text"
                                        label="Email"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="password"
                                        component={TextField}
                                        type="text"
                                        label="Password"
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: 16 }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        type="submit"
                                        disabled={submitting}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </StyledLoginForm>
    );
};

export default LoginForm;
