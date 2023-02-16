const mongoose = require('mongoose')

const medicalRecordSchema = new mongoose.Schema({
    diagnosis : {
        type : String,
        required : true
    },
    medications: {
        type : Array,
        required : true
    },
    notes: {
        type : String,
        required : true
    },
    updated: { type: Date, default: Date.now },

})

const MedicalRecord = mongoose.model('MedicalRecord',medicalRecordSchema)

module.exports = {
    MedicalRecord,
    medicalRecordSchema
};