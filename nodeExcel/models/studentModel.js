const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
	Country:{
		type: 'string',
	},
	Gender:{
		type: 'string',
	},
	StudentID:{
		type: Number
	}

})

const model = new mongoose.model('Student', studentSchema)

module.exports = model