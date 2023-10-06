const { Schema, model } = require('mongoose')

const usersSchema = new Schema(
	{
		username: { type: String, required: [true, 'Username is required.'] },
		name: { type: String, required: [true, 'Name is required.'] },
		email: {
			type: String,
			required: [true, 'Email is required.'],
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: [true, 'Password is required.'],
		},
		languages: [{ type: Schema.Types.ObjectId, ref: 'languages' }],
		cardDecks: [{ type: Schema.Types.ObjectId, ref: 'cardDecks' }],
	},
	{
		timestamps: true,
	}
)

const Users = model('Users', usersSchema)

module.exports = Users
