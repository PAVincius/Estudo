// Import the Mongoose library
const mongoose = require('mongoose');

const UnityServiceSchema = new mongoose.Schema({
    // Define a 'name' property of type String that is required
    name: {
        type: String,
        required: true
    },
    // Define an 'arrayHealthcareTeam' property of type Array containing ObjectIds that reference the 'HealthcareTeam' model
    arrayHealthcareTeam: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'HealthcareTeam'
    },
    // Define a 'numHealthcareTeams' property of type Number that is required
    numHealthcareTeams: {
        type: Number,
        required: true
    }
});

// Create a Mongoose model for UnityService using the defined schema
const UnityService = mongoose.model('UnityService', UnityServiceSchema);

// Export the UnityService model from the module so it can be used in other parts of the application
module.exports = UnityService;
