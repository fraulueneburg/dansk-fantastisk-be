const { Schema, model } = require('mongoose')

const IPAlettersSchema = new Schema(
	{
		letter: { type: String, required: true },
		IPA: {
			name: { type: String },
			num: { type: Number },
		},
		pronounciation: { type: String, required: true },
		approximation: { type: String },
		description: { type: String },
		languages: [
			{
				lang: { type: Schema.Types.ObjectId, ref: 'languages' },
				words: [{ type: Schema.Types.ObjectId, ref: 'words' }],
			},
		],
		sound: { type: String },
		tags: { type: String },
	},
	{
		timestamps: true,
	}
)

const IPAletters = model('IPAletters', IPAlettersSchema)

module.exports = IPAletters
