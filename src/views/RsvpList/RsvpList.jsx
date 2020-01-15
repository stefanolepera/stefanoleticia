import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebase';
import { RsvpListItem } from './components';
import { StyledRsvpList } from './RsvpList.style';

const RsvpList = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        firebase.listenTo('messages', firebaseData => {
            setLoading(false);
            setData(firebaseData.val());
        });
    }, []);

    if (loading) {
        return <div>Loading ...</div>;
    }

    return (
        <StyledRsvpList>
            <RsvpListItem data={data} />
        </StyledRsvpList>
    );
};

export default RsvpList;
