const { Schema, model } = require('mongoose')

const languageSchema = new Schema(
	{
		name: { type: String, required: true },
		ISOcode: { type: String, required: true },
		IPAletters: [{ type: Schema.Types.ObjectId, ref: 'IPALetters' }],
		users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
		sentences: [{ type: Schema.Types.ObjectId, ref: 'sentences' }],
		words: [{ type: Schema.Types.ObjectId, ref: 'words' }],
	},
	{
		timestamps: true,
	}
)

const Language = model('Language', languageSchema)

module.exports = Language
