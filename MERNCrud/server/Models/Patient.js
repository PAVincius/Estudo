const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
    id : {
        type : String,
        required : true,
        unique: true,
    },
    serviceType : {
        type : String,
        required : true
    },
    situation: {
        type : String,
        required : true
    },
    action: {
        type : String,
        required : true
    },
    medicalRecord: {
        type: Object,
        
    },
    updated: { type: Date, default: Date.now },

})

const Patient = mongoose.model('Patient',PatientSchema)

module.exports = Patient