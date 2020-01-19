import React, { useContext } from 'react';
import LocaleContext from '../../context/LocaleContext';
import { GiftItem } from './components';
import { Title, SubTitle } from '../../components';
import { giftLocale } from '../../constants/Locale';
import { StyledGift, StyledGiftList } from './Gift.style';

const Gift = () => {
    const lang = useContext(LocaleContext);
    return (
        <StyledGift>
            <Title text={giftLocale.title[lang]} />
            <SubTitle text={giftLocale.intro[lang]} />
            <StyledGiftList>
                {giftLocale.giftList.map(giftItem => (
                    <GiftItem giftDetails={giftItem} key={giftItem.title} />
                ))}
            </StyledGiftList>
        </StyledGift>
    );
};

export default Gift;
