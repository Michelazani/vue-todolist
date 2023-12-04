const {createApp} =Vue;

createApp({
    data() {
        return {
            nameToAdd : '',
            namesListPupils : [
                {text: 'Alessia', done: false},
                {text: 'Beatrice', done: true},
                {text: 'Carla', done: false},
                {text: 'Davide', done: true},
                {text: 'Elia', done: false},
                {text: 'Flavio', done: true},
                {text: 'Giorgio', done: false},
                {text: 'Ilaria', done: true},
                {text: 'Laura', done: false},
                {text: 'Mario', done: true},
                {text: 'Niccolò', done: false},
                {text: 'Orazio', done: true},
                {text: 'Paola', done: false},
                {text: 'Quasimodo', done: true},
                {text: 'Roberta', done: false},
                {text: 'Sara', done: true},
                {text: 'Ugo', done: false},
                {text: 'Valeria', done: true}
            ],
        }
    },

    methods : {
        removeName(nameToBeRemoved){
            this.namesListPupils.splice(nameToBeRemoved, 1);
        },
        
        nameToBeAdded (newName){
            console.warn(newName)
            // per eliminare gli spazi
            newName = newName.trim(),
            //!!!!!! NON SI VISUALIZZAAA!!!!!!!!!!!
            // si vede in console ma rimanda sulla pagina una casella vuota
            this.namesListPupils.push(newName),
            this.nameToAdd = ''
        }
    },
    
}).mount('#app'); 