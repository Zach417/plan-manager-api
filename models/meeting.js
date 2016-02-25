var restful = require('node-restful');
var mongoose = restful.mongoose;

var meetingSchema = new mongoose.Schema({
	name: String,
	description: String,
	date: Date,
	meetingType: Number, // Uses "MeetingType" String Map
	members: [{
		userId: String,
	}],
	createdBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        unique: false,
        dropDups: false,
    },
    createdOn: Date,
	modifiedBy: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        unique: false,
        dropDups: false,
    },
    modifiedOn: Date,
});

module.exports = restful.model('Meeting', meetingSchema);