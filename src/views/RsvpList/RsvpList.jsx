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

    const formattedData = dataToformat => {
        return Object.entries(dataToformat || {}).map(listItem => {
            return {
                key: listItem[0],
                value: listItem[1]
            };
        });
    };

    if (loading) {
        return <div>Loading ...</div>;
    }

    return (
        <StyledRsvpList>
            {formattedData(data).map(item => {
                return (
                    <RsvpListItem
                        key={item.key}
                        firebaseKey={item.key}
                        data={item.value}
                    />
                );
            })}
        </StyledRsvpList>
    );
};

export default RsvpList;
