const mongoose = require('mongoose')

const {medicalRecordSchema} = require('./MedicalRecord')

const PatientSchema = new mongoose.Schema({
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
        type: medicalRecordSchema,
        required : true
    },
    updated: { type: Date, default: Date.now },

})

const Patient = mongoose.model('Patient',PatientSchema)

module.exports = Patient