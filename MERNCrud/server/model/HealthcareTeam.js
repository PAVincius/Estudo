// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema for healthcare teams
const HealthcareTeamSchema = new mongoose.Schema({
    // Define a 'name' property of type String that is required
    name: {
        type: String,
        required: true
    },
    // Define an 'arrayPatients' property of type Array that contains ObjectIds that reference 'Paciente' model
    arrayPatients: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Paciente'
    },
    // Define a 'numWorkers' property of type Number that is required
    numWorkers: {
        type: Number,
        required: true
    }
});

// Create a Mongoose model for healthcare teams using the defined schema
const HealthcareTeam = mongoose.model('HealthcareTeam', HealthcareTeamSchema);

// Export the HealthcareTeam model from the module so it can be used in other parts of the application
module.exports = HealthcareTeam;
