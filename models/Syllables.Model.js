const { Schema, model } = require('mongoose')

const syllablesSchema = new Schema(
	{
		language: { type: Schema.Types.ObjectId, ref: 'languages' },
		name: { type: String, required: true },
		description: { type: String },
		exampleWords: [{ type: Schema.Types.ObjectId, ref: 'words' }],
		category: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const Syllables = model('Syllables', syllablesSchema)

module.exports = Syllables
