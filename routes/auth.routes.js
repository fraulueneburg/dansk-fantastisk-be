const User = require('../models/User.model')
const bcrypt = require('bcryptjs')
const router = require('express').Router()
const jwt = require('jsonwebtoken')
const { isAuthenticated } = require('../middlewares/jwt.auth')

// LOGIN ROUTE
router.post('/login', async (req, res) => {
	try {
		const foundUser = await User.findOne({ email: req.body.email })

		if (foundUser) {
			const passwordMatch = bcrypt.compareSync(req.body.password, foundUser.password)
			if (passwordMatch) {
				const { _id, email } = foundUser
				const payload = { _id, email }
				const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {
					algorithm: 'HS256',
					expiresIn: '6h',
				})

				res.status(200).json({ authToken })
			}
		} else {
			res.status(400).json({ errorMessage: 'Invalid arguments' })
		}
	} catch (err) {
		console.log(err)
	}
})

// VERIFY ROUTE FOR PROTECTED PAGE
router.get('/verify', isAuthenticated, (req, res) => {
	if (req.payload) {
		res.status(200).json({ user: req.payload })
	}
})

module.exports = router
