const router = require('express').Router()
const IPAlettersModel = require('../models/IPAletters.Model')

// const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const { isAuthenticated } = require('../middlewares/jwt.auth')

router.get('', (req, res, next) => {
	res.json('All fine in here')
})

// GET ALL IPA DATA ROUTE
// router.get('/ipa', async (req, res) => {
// 	const allIPA = await IPAlettersModel.find()
// 	res.json(allIPA)
// })

// CREATE IPA ROUTE

// router.post('/ipa/add', async (req, res) => {
// 	console.log('BE | TRYING TO CREATE IPA', req)

// 	try {
// 		const newIPA = await IPAlettersModel.create(req.body)
// 		console.log('NEW IPA created successfully:', newIPA)
// 		res.json(newIPA)

// 		// if (foundIPA.length === 0) {
// 		// 	console.log('FOOBARBAZ')
// 		// 	// const newIPA = await IPAlettersModel.create({
// 		// 	// 	newIPAData,
// 		// 	// })
// 		// 	res.status(201).json(newIPAData)
// 		// } else {
// 		// 	console.log('LETTER ALREADY EXISTS')
// 		// 	// res.status(201).json(updatedBudget)
// 		// 	// res.redirect(`/budget`)
// 		// }
// 	} catch (err) {
// 		console.log('BE CATCH BLOCK')
// 		console.log(err)
// 	}
// })

module.exports = router
