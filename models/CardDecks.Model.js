const { Schema, model } = require('mongoose')

const cardDeckSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'Users' },
		items: {
			ipa: { type: Schema.Types.ObjectId, ref: 'IPALetters' },
			sentences: { type: Schema.Types.ObjectId, ref: 'Sentences' },
			syllables: { type: Schema.Types.ObjectId, ref: 'Syllables' },
			words: { type: Schema.Types.ObjectId, ref: 'Words' },
		},
	},
	{
		timestamps: true,
	}
)

const CardDeck = model('CardDeck', cardDeckSchema)

module.exports = CardDeck
