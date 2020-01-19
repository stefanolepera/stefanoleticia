import React, { useContext } from 'react';
import LocaleContext from '../../../../context/LocaleContext';
import { StyledForm } from './RsvpForm.style';
import { Form, Field } from 'react-final-form';
import { TextField, Radio } from 'final-form-material-ui';
import {
    Paper,
    Grid,
    Button,
    FormControlLabel,
    RadioGroup,
    FormControl,
    FormLabel
} from '@material-ui/core';
import { rsvpLocale } from '../../../../constants/Locale';

const RsvpForm = ({ handleSubmit }) => {
    const lang = useContext(LocaleContext);

    const onSubmit = values => {
        handleSubmit(values);
    };

    const validate = values => {
        const errors = {};
        if (!values.firstName) {
            errors.firstName = 'Required';
        }
        if (!values.lastName) {
            errors.lastName = 'Required';
        }
        if (!values.email) {
            errors.email = 'Required';
        }
        if (!values.others) {
            errors.others = 'Required';
        }
        return errors;
    };

    return (
        <StyledForm>
            <Form
                onSubmit={onSubmit}
                validate={validate}
                initialValues={{ attending: 'yes', others: '' }}
                render={({ handleSubmit, submitting, values }) => (
                    <form onSubmit={handleSubmit} noValidate>
                        <Paper style={{ padding: 24 }}>
                            <Grid container alignItems="flex-start" spacing={2}>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="firstName"
                                        component={TextField}
                                        type="text"
                                        label={rsvpLocale.form.firstName[lang]}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <Field
                                        fullWidth
                                        required
                                        name="lastName"
                                        component={TextField}
                                        type="text"
                                        label={rsvpLocale.form.lastName[lang]}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="email"
                                        fullWidth
                                        required
                                        component={TextField}
                                        type="email"
                                        label={rsvpLocale.form.email}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <FormControl component="fieldset" required>
                                        <FormLabel component="legend">
                                            {rsvpLocale.form.attending[lang]}
                                        </FormLabel>
                                        <RadioGroup row>
                                            <FormControlLabel
                                                label={
                                                    rsvpLocale.form.yes[lang]
                                                }
                                                control={
                                                    <Field
                                                        name="attending"
                                                        component={Radio}
                                                        type="radio"
                                                        value="yes"
                                                    />
                                                }
                                            />
                                            <FormControlLabel
                                                label={rsvpLocale.form.no[lang]}
                                                control={
                                                    <Field
                                                        name="attending"
                                                        component={Radio}
                                                        type="radio"
                                                        value="no"
                                                    />
                                                }
                                            />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        required
                                        name="others"
                                        component={TextField}
                                        multiline
                                        label={rsvpLocale.form.others[lang]}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        fullWidth
                                        name="notes"
                                        component={TextField}
                                        multiline
                                        label={rsvpLocale.form.notes[lang]}
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
                                        {rsvpLocale.form.submit[lang]}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </form>
                )}
            />
        </StyledForm>
    );
};

export default RsvpForm;
