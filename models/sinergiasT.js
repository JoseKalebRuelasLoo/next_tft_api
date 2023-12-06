//Crear una tabla o utilizar una si es que ya se encuentra una con el mismo nombre

const mongoose = require('mongoose')

const synergies_Schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    type:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    levels: {
        level_1: {
            number_of_champions: {
                type: Number,
                required: true,
                default: 1
            },
            description: {
                type: String,
                required: true
            },
        },
        level_2: {
            number_of_champions: {
                type: Number,
                required: false
            },
            description: {
                type: String,
                required: false
            }
        }, 
        level_3: {
            number_of_champions: {
                type: Number,
                required: false
            },
            description: {
                type: String,
                required: false
            }
        }, 
        level_4: {
            number_of_champions: {
                type: Number,
                required: false
            },
            description: {
                type: String,
                required: false
            }
        }
    },
    champions: {
        champion_1: {
            type: String,
            required: true,
        },
        champion_2: {
            type: String,
            required: false,
        },
        champion_3: {
            type: String,
            required: false,
        },
        champion_4: {
            type: String,
            required: false,
        },
        champion_5: {
            type: String,
            required: false,
        },
        champion_6: {
            type: String,
            required: false,
        },
        champion_7: {
            type: String,
            required: false,
        },
        champion_8: {
            type: String,
            required: false,
        },
        champion_9: {
            type: String,
            required: false,
        },
        champion_10: {
            type: String,
            required: false,
        },
    }
})

module.exports = mongoose.model('Synergies', synergies_Schema)