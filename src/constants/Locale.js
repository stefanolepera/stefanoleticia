export const languages = ['it', 'en', 'pt', 'es'];

export const isSupported = lang => {
    return languages.indexOf(lang) !== -1 ? lang : 'en';
};

export const navLocale = {
    location: {
        it: `Ricevimento`,
        en: `Location`,
        pt: `Recepção`,
        es: `Ubicación`
    },
    gallery: {
        it: `Galleria`,
        en: `Gallery`,
        pt: `Album fotografico`,
        es: `Álbum fotografico`
    },
    accomodation: {
        it: `Alloggio`,
        en: `Accomodation`,
        pt: `Hospedagem`,
        es: `Alojamiento`
    },
    gift: {
        it: `Lista di Nozze`,
        en: `Gift List`,
        pt: `Presente`,
        es: `Regalo de boda`
    },
    rsvp: {
        it: `RSVP`,
        en: `RSVP`,
        pt: `RSVP`,
        es: `RSVP`
    }
};

export const locationLocale = {
    title: {
        it: `~ Ricevimento ~`,
        en: `~ Location ~`,
        pt: `~ Recepção ~`,
        es: `~ Ubicación ~`
    },
    intro: {
        it: `Saremo lieti di avervi con noi Sabato 20 Giugno, 2020 al nostro matrimonio a Roma.`,
        en: `Please join Stefano and Leticia on Saturday 20th June, 2020 as we celebrate our wedding in Rome, Italy.`,
        pt: `Gostaríamos muito de festejar nosso casamento com a Vossa Presença no dia 20 de Junho de 2020 em Roma, Itália.`,
        es: `Con la Bendición de Dios nos gustaría celebrar nuestra bodas con Ustedes en el dia 20 de Junio de 2020 en Roma, Italia.`
    },
    cards: {
        location: {
            img: 'pettirosso-logo.jpg',
            title: {
                it: `CERIMONIA E RINFRESCO`,
                en: `RECEPTION AND WEDDING PARTY`,
                pt: `CERIMÔNIA E FESTA DE CASAMENTO`,
                es: `CEREMONIA Y FIESTA DE BODAS`
            },
            description: {
                it: `Sia la cerimonia che il rinfresco si terranno in questa splendida villa a Grottaferrata (RM).`,
                en: `Both the cerimony and the party will take place in this stunning villa in Grottaferrata (RM).`,
                pt: `Cerimônia, jantar e festa de casamento se desenvolveram em uma linda Villa em Grottaferrata.`,
                es: `Ceremonia, cena y fiesta de bodas será’ en esta bellissima Villa en Grottaferrata.`
            },
            address: `Via di Sant'Andrea, 47, 00046 Grottaferrata (RM)`,
            time: '20/06/2020, 5PM',
            mapLink: {
                it: `Guarda la mappa >`,
                en: `See location >`,
                pt: `Confire a mapa >`,
                es: `Mire la mapa >`
            },
            cta: 'https://www.google.com/maps/place/B%26B+Il+Pettirosso/@41.7992192,12.6312544,14z/data=!4m8!3m7!1s0x0:0x13a4e980539635a1!5m2!4m1!1i2!8m2!3d41.804625!4d12.640464'
        },
        pool: {
            img: 'pettirosso-pool.jpg',
            title: {
                it: `FESTA IN PISCINA`,
                en: `POOL PARTY`,
                pt: `FESTA NA PISCINA`,
                es: `LA FIESTA EN LA PISCINA`
            },
            description: {
                it: `Il giorno dopo il matrimonio, nella stessa location, si terra' una festa in piscina con barbecue ... non scordatevi il costume!`,
                en: `The next day, in the same location, will take place a pool party with a bbq ... don't forget to bring your swimming costume!`,
                pt: `O dia seguinte ao casamento, no mesmo lugar, teremos um churrasco à beira  piscina!`,
                es: `En el dia siguiente, en el mismo lugar, vamos a tener una fiesta con barbecue en la piscina!`
            },
            address: `Via di Sant'Andrea, 47, 00046 Grottaferrata (RM)`,
            time: '21/06/2020, 11AM',
            mapLink: {
                it: `Guarda la mappa >`,
                en: `See location >`,
                pt: `Confire a mapa >`,
                es: `Mire la mapa >`
            },
            cta: 'https://www.google.com/maps/place/B%26B+Il+Pettirosso/@41.7992192,12.6312544,14z/data=!4m8!3m7!1s0x0:0x13a4e980539635a1!5m2!4m1!1i2!8m2!3d41.804625!4d12.640464'
        }
    }
};

export const accomodationLocale = {
    title: {
        it: `~ Alloggio ~`,
        en: `~ Accomodation ~`,
        pt: `~ Hospedagem ~`,
        es: `~ Alojamiento ~`
    },
    intro: {
        it: `Alberghi vicino alla cerimonia dove alloggiare.`,
        en: `Hotels near the venue to spend the nights.`,
        pt: `Hotéis que estão por perto da Villa onde se hospedar.`,
        es: `Hotel por acerca de la Villa donde se alojar.`
    },
    cards: {
        verdeborgo: {
            img: 'verdeborgo.jpg',
            title: {
                it: `HOTEL VERDEBORGO`,
                en: `HOTEL VERDEBORGO`,
                pt: `HOTEL VERDEBORGO`,
                es: `HOTEL VERDEBORGO`
            },
            description: {
                it: `Location ideale per chi desidera trascorre un soggiorno rilassante, circondato dalla natura.`,
                en: `An ideal location for those seeking a relaxing stay, immersed in natural surroundings.`,
                pt: `O lugar ideal para aqueles que procuram um lugar relaxante aonde se hospedar circundado pela natureza.`,
                es: `Ideal ubicación donde quedarse si se quiere relaxar en y estar rodeado de la naturaleza.`
            },
            address: `Via Anagnina, 10, 00046 Grottaferrata`,
            mapLink: {
                it: `Prenota >`,
                en: `Book >`,
                pt: `Reserve >`,
                es: `Reservar Ahora >`
            },
            cta: 'https://www.hotelverdeborgo.it/en/'
        },
        villagrazioli: {
            img: 'villagrazioli.jpg',
            title: {
                it: `HOTEL VILLA GRAZIOLI`,
                en: `HOTEL VILLA GRAZIOLI`,
                pt: `HOTEL VILLA GRAZIOLI`,
                es: `HOTEL VILLA GRAZIOLI`
            },
            description: {
                it: `Il Park Hotel Villa Grazioli è un’antica villa cardinalizia situata in posizione panoramica sul colle del Tuscolo vicino a Frascati.`,
                en: `Park Hotel Villa Grazioli is an ancient cardinal villa situated in a panoramic position on the Tusculum hill near Frascati.`,
                pt: `O Park Hotel Villa Grazioli è uma antiga villa cardinal situada em vista panoramica para Colle Del Tuscolo perto da cidadezinha de Frascati.`,
                es: `El Park Hotel Villa Grazioli es una antigua vila cardinal ubicada con vista panorámica para el Colle Del Tuscolo acerca de la ciudad de Frascati.`
            },
            address: `Via Umberto Pavoni, 19, 00046 Grottaferrata`,
            mapLink: {
                it: `Prenota >`,
                en: `Book >`,
                pt: `Reserve>`,
                es: `Reservar Ahora >`
            },
            cta: 'https://www.villagrazioli.com/en/'
        }
    }
};

export const galleryLocale = {
    title: {
        it: `~ Galleria ~`,
        en: `~ Gallery ~`,
        pt: `~ Album fotografico ~`,
        es: `~ Álbum fotografico ~`
    }
};

export const giftLocale = {
    title: {
        it: `~ Lista di Nozze ~`,
        en: `~ Gift List ~`,
        pt: `~ Presente ~`,
        es: `~ Regalo de Boda ~`
    },
    intro: {
        it: `Apprezziamo molto se volete contribuire ai nostri risparmi per la futura casa e per la luna di miele. Ecco diverse opzioni che potete usare per contribuire:`,
        en: `Instead of gifts we would really appreciate contributions to our savings for the future house and our honeymoon. Here are few options you can use to make a donation:`,
        pt: `Iremos muito apreciar se quiserem contribuir às nossa poupança para a compra de nossa futura Casa e para a Lua de Mel. Aqui encontrará algumas opções para poder contribuir.`,
        es: ` Apreciamos mucho si quieren contribuir a nuestro ahorro para la compra de nuestra futura Casa y Luna de Miel. Aquí puedes encontrar algunas opciones de como poder dar tu contribución.`
    },
    giftList: [
        {
            title: 'Paypal',
            address: 'paypal.me/StefanoLePera',
            url: 'https://www.paypal.me/StefanoLePera'
        },
        {
            title: 'IT Bank Transfer',
            name: 'Stefano Le Pera',
            bank: 'Fineco Bank',
            IBAN: 'IT33O0301503200000003275016'
        },
        {
            title: 'UK Bank Transfer',
            name: 'Stefano Le Pera',
            bank: 'Barclays Bank',
            IBAN: 'GB18BUKB20944873119718',
            account: '73119718',
            sortCode: '20-94-48'
        }
    ]
}

export const rsvpLocale = {
    title: `~ RSVP ~`,
    intro: {
        it: `Non vediamo l'ora di festeggiare con voi!`,
        en: `We're so excited to celebrate with you!`,
        pt: `Mal podemos esperar para festejar com você!`,
        es: `No vemos la hora para celebrar con usted!`
    },
    subIntro: {
        it: `SI PREGA DI CONFERMARE ENTRO IL 20 APRILE, 2020`,
        en: `KINDLY RESPOND BY APRIL 20, 2020`,
        pt: `POR FAVOR CONFIRME SUA PRESENÇA ENTRE O DIA 20 DE ABRIL DE 2020`,
        es: `POR FAVOR CONFIRME TU PRESENCIA HASTA EL DIA 20 DE ABRIL DE 2020`
    },
    submitted: {
        it: `GRAZIE PER AVER COMPILATO IL FORM!`,
        en: `THANKS FOR SUBMITTING THE FORM!`,
        pt: `OBRIGADO POR TER COMPLETADO O FORMULARIO!`,
        es: `GRACIAS POR TENER RELLENADO EL FORMULARIO!`
    },
    form: {
        email: 'Email',
        firstName: {
            it: `Nome`,
            en: `First Name`,
            pt: `Nome`,
            es: `Nombre`
        },
        lastName: {
            it: `Cognome`,
            en: `Last Name`,
            pt: `Sobrenome`,
            es: `Apellido`
        },
        attending: {
            it: `Sarai presente?`,
            en: `Are you attending?`,
            pt: `Você confirma sua presença?`,
            es: `Confirmas tu presencia? `
        },
        others: {
            it: `Chi altro viene con te?`,
            en: `Who else is coming with you?`,
            pt: `Quem está vindo junto a você?`,
            es: `Quien más está viniendo junto a ti?`
        },
        notes: {
            it: `Note (Allergie, stile alimentare veg...)`,
            en: `Notes (Allergies, food style veg..)`,
            pt: `Observações (Alergias, estilo de alimentação veg...)`,
            es: `Observación  (Alergias, estilo de comida veg...)`
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
        },
        submit: {
            it: `Invia`,
            en: `Submit`,
            pt: `Enviar`,
            es: `Enviar`
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
