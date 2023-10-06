const { Schema, model } = require('mongoose')

const sentenceSchema = new Schema(
	{
		language: { type: Schema.Types.ObjectId, ref: 'language' },
		sentence: { type: String, required: true },
		translation: {
			de: { type: String, required: true },
		},
		exampleWords: [{ type: Schema.Types.ObjectId, ref: 'words' }],
		category: { type: String, required: true },
	},
	{
		timestamps: true,
	}
)

const Sentence = model('Sentence', sentenceSchema)

module.exports = Sentence
