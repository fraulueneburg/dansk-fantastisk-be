const { Schema, model } = require('mongoose')

const wordsSchema = new Schema(
	{
		language: { type: Schema.Types.ObjectId, ref: 'languages' },
		word: { type: String, required: true },
		IPA: { type: String },
		article: { type: String },
		conjugation: { type: String },
		notes: { type: String },
		translation: {
			de: { type: String },
		},
		minimalPairs: [{ type: Schema.Types.ObjectId, ref: 'words' }],
		sentences: [{ type: Schema.Types.ObjectId, ref: 'sentences' }],
		sound: { type: String },
		image: { type: String },
		category: { type: String },
		tags: { type: String },
	},
	{
		timestamps: true,
	}
)

const Words = model('Words', wordsSchema)
module.exports = Words
