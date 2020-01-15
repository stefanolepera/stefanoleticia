import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebase';
import { LoginForm, RsvpList } from '../../views';
import { Title } from '../../components';

const Dashboard = () => {
    const [logged, setLogged] = useState(false);

    useEffect(() => {
        // firebase.signOut();
        firebase.onLoginChange(firebaseData => {
            if (firebaseData) {
                setLogged(firebase.isLoggedIn());
            }
        });
    }, []);

    const handleSubmit = values => {
        firebase.signIn(values.email, values.password);
    };

    return (
        <>
            <Title text="~ Dashboard ~" />
            {logged ? <RsvpList /> : <LoginForm handleSubmit={handleSubmit} />}
        </>
    );
};

export default Dashboard;
