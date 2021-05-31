const joi = require('joi')

const authMiddleware = {
  registerValidation: (req, res, next) => {
    const schema = joi.object({
      username: joi.string().min(5).max(20).required(),
      password: joi.string().required()
    })
    .options({ abortEarly: false })

    const isError = schema.validate(req.body)

    if(isError) {
      res.send({
        status: 500,
        message: 'data not complete',
        data: isError
      })
    }

    next()
  }
}

module.exports = authMiddleware