// Milestone 1
// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato


// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 




const { createApp } = Vue;

createApp({
    data() {
        return {

            inputMessage: {
                date: '11/04/2020 15.32',
                message: "",
                status: 'sent'
            },

            outputMessage: {
                date: '04/08/2020 15.36',
                message: "Ok!",
                status: 'received'
            },

            activeContact: 0,
            
            settingActive: false,

            search: '',
            

            contacts: [
            

                {
            name: 'Michele',
            avatar: './img/avatar_1.jpg',
            visible: true,
            messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
            },
            {
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Fabio',
        avatar: './img/avatar_2.jpg',
        visible: true,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
            },
            {
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: './img/avatar_3.jpg',
        visible: true,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
            },
            {
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: './img/avatar_4.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: './img/avatar_5.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: './img/avatar_6.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
            }
        ],
    },
    {
        name: 'Federico',
        avatar: './img/avatar_7.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
            }
        ],
    },
    {
        name: 'Davide',
        avatar: './img/avatar_8.jpg',
        visible: true,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'Perfetto!!!',
                status: 'received'

                        }
                    ],
                },
                {
                    name: 'Efisio',
                    avatar: './img/avaatar.randomm.png',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, quando fai uscire il prossimo album?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Spero presto...!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Perfetto!!!',
                            status: 'received'
                        } 
                    ],
                }
            ]
            
        }
    },

    methods: {
        activeChat(i) {
            this.activeContact = i;
        },

       addMessage() {
            const activeContact = this.contacts[this.activeContact];

             if(this.inputMessage.message.length > 0 && this.inputMessage.message.trim().length > 0) {
                activeContact.messages.push({...this.inputMessage});
                this.inputMessage.message = "";

                setTimeout(() => {
                    activeContact.messages.push({...this.outputMessage});
                }, 1000);
            }
        },

        // Mostra / Nascondi le impostazioni del messaggio relativo (info e elimina messaggio)
        toggleMessageSettings(i) {
            this.settingActive = !this.settingActive;
            this.activeMessage = i;
        },
        

        // Cancella il messaggio 
        deleteMessage(activeContact, i) {
        this.contacts[activeContact].messages.splice(i, 1);
        this.settingActive = !this.settingActive; 
        },

        
        
    }
}).mount("#app")



//Dark mode

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        
        body.classList.toggle('dark-mode');
    });
});
