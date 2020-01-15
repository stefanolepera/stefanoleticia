export const languages = ['it', 'en', 'pt', 'es'];

export const isSupported = lang => {
    return languages.indexOf(lang) !== -1 ? lang : 'en';
};

export const joinUsLocale = {
    title: {
        it: `~ Ricevimento ~`,
        en: `~ Location ~`,
        pt: `~ Logo ~`,
        es: `~ Logos ~`
    },
    intro: {
        it: `Benvenuti a sti frocioni, belli grossi e capoccioni`,
        en: `Please join Stefano and Leticia on Saturday 20th June, 2020 as we celebrate our wedding in Rome, Italy.`,
        pt: `O cachorro come o livro`,
        es: `que passa amigo`
    },
    cards: {
        location: {
            img: 'pettirosso-logo.jpg',
            title: {
                it: `CERIMONIA E RINFRESCO`,
                en: `RECEPTION AND WEDDING PARTY`,
                pt: `CEREMÔNIA E FESTA DE CASAMENTO`,
                es: `FIESTA DE BODAS`
            },
            description: {
                it: `Sia la cerimonia che il rinfresco si terranno in questa splendida villa a Grottaferrata (RM).`,
                en: `Both the cerimony and the party will take place in this stunning villa in Grottaferrata (RM).`,
                pt: `O cachorro come o livro.`,
                es: `que passa amigo.`
            },
            address: `Via di Sant'Andrea, 47, 00046 Grottaferrata (RM)`,
            time: '20/06/2020, 5PM',
            mapLink: {
                it: `Guarda la mappa >`,
                en: `See location >`,
                pt: `Map Portoguese >`,
                es: `Map Spanish >`
            },
            cta: 'https://www.google.com/maps/place/B%26B+Il+Pettirosso/@41.7992192,12.6312544,14z/data=!4m8!3m7!1s0x0:0x13a4e980539635a1!5m2!4m1!1i2!8m2!3d41.804625!4d12.640464'
        },
        pool: {
            img: 'pettirosso-pool.jpg',
            title: {
                it: `FESTA IN PISCINA`,
                en: `POOL PARTY`,
                pt: `FESTA NA PISCINA`,
                es: `LA FIESTA DE PISCINA`
            },
            description: {
                it: `Il giorno dopo il matrimonio, nella stessa location, si terra' una festa in piscina con barbecue ... non scordatevi il costume!`,
                en: `The next day, in the same location, will take place a pool party with a bbq ... don't forget to bring your swimming costume!`,
                pt: `O cachorro come o livro!`,
                es: `que passa amigo!`
            },
            address: `Via di Sant'Andrea, 47, 00046 Grottaferrata (RM)`,
            time: '21/06/2020, 11AM',
            mapLink: {
                it: `Guarda la mappa >`,
                en: `See location >`,
                pt: `Map Portoguese >`,
                es: `Map Spanish >`
            },
            cta: 'https://www.google.com/maps/place/B%26B+Il+Pettirosso/@41.7992192,12.6312544,14z/data=!4m8!3m7!1s0x0:0x13a4e980539635a1!5m2!4m1!1i2!8m2!3d41.804625!4d12.640464'
        }
    }
};

export const accomodationLocale = {
    title: {
        it: `~ Alloggio ~`,
        en: `~ Accomodation ~`,
        pt: `~ Acc PT ~`,
        es: `~ Acc ES ~`
    },
    intro: {
        it: `Alberghi vicino alla cerimonia dove alloggiare`,
        en: `Hotels near the venue to spend the nights`,
        pt: `O cachorro come o hotel`,
        es: `que passa amigo in hotel`
    },
    cards: {
        verdeborgo: {
            img: 'verdeborgo.png',
            title: {
                it: `HOTEL VERDEBORGO`,
                en: `HOTEL VERDEBORGO`,
                pt: `HOTEL VERDEBORGO`,
                es: `HOTEL VERDEBORGO`
            },
            description: {
                it: `Location ideale per chi desidera trascorre un soggiorno rilassante, circondato dalla natura.`,
                en: `An ideal location for those seeking a relaxing stay, immersed in natural surroundings.`,
                pt: `O cachorro come o verdeborgo.`,
                es: `que passa amigo verdeborgo.`
            },
            address: `Via Anagnina, 10, 00046 Grottaferrata (RM)`,
            mapLink: {
                it: `Prenota >`,
                en: `Book >`,
                pt: `Book PT >`,
                es: `Book ES >`
            },
            cta: 'https://www.hotelverdeborgo.it/en/'
        },
        pool: {
            img: 'pettirosso-pool.jpg',
            title: {
                it: `FESTA IN PISCINA`,
                en: `POOL PARTY`,
                pt: `FESTA NA PISCINA`,
                es: `LA FIESTA DE PISCINA`
            },
            description: {
                it: `Il giorno dopo il matrimonio, nella stessa location, si terra' una festa in piscina con barbecue ... non scordatevi il costume!`,
                en: `The next day, in the same location, will take place a pool party with a bbq ... don't forget to bring your swimming costume!`,
                pt: `O cachorro come o livro!`,
                es: `que passa amigo!`
            },
            address: `Via di Sant'Andrea, 47, 00046 Grottaferrata (RM)`,
            mapLink: {
                it: `Guarda la mappa >`,
                en: `See location >`,
                pt: `Map Portoguese >`,
                es: `Map Spanish >`
            }
        }
    }
};

export const galleryLocale = {
    title: {
        it: `~ Galleria ~`,
        en: `~ Gallery ~`,
        pt: `~ Gallerhia ~`,
        es: `~ Gallerias ~`
    }
};

export const rsvpLocale = {
    title: `~ RSVP ~`,
    intro: {
        it: `Non vediamo l'ora di festeggiare con voi!`,
        en: `We're so excited to celebrate with you!`,
        pt: `celebrate PT`,
        es: `celebrate ES`
    },
    subIntro: {
        it: `SI PREGA DI CONFERMARE ENTRO IL 20 APRILE, 2020`,
        en: `KINDLY RESPOND BY APRIL 20, 2020`,
        pt: `RESPOND BY PT`,
        es: `RESPOND BY ES`
    },
    submitted: {
        it: `GRAZIE PER AVER COMPILATO IL FORM!`,
        en: `THANKS FOR SUBMITTING THE FORM!`,
        pt: `OBRIGADO!`,
        es: `GRACIAS!`
    },
    form: {
        email: 'Email',
        firstName: {
            it: `Nome`,
            en: `First Name`,
            pt: `First Name PT`,
            es: `First Name ES`
        },
        lastName: {
            it: `Cognome`,
            en: `Last Name`,
            pt: `Last Name PT`,
            es: `Last Name ES`
        },
        attending: {
            it: `Sarai presente?`,
            en: `Are you attending?`,
            pt: `Are you attending? PT`,
            es: `Are you attending? ES`
        },
        others: {
            it: `Chi altro viene con te?`,
            en: `Who else is coming with you?`,
            pt: `Who else is coming with you? PT`,
            es: `Who else is coming with you? ES`
        },
        notes: {
            it: `Note`,
            en: `Notes`,
            pt: `Notes PT`,
            es: `Notes ES`
        },
        yes: {
            it: `Si`,
            en: `Yes`,
            pt: `Sim`,
            es: `Si`
        },
        no: {
            it: `No`,
            en: `No`,
            pt: `Não`,
            es: `No`
        }
    }
};

export const dashboardLocale = {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    attending: 'Attending',
    others: 'Others',
    notes: 'Notes',
    time: 'Time'
};
