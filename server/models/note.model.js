const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnonymousNoteSchema = new Schema({
		note: {
			type: String, 
			trim: true, 
			required: [true, "Note is required"], 
			minlength: [3, "Note must contain more than 3 characters"],
		},
	}, { timestamps: true } 
)
module.exports = mongoose.model('AnonymousNote', AnonymousNoteSchema);