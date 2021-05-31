const authService = require('../services/authService');

const authController = {
  create: async (req, res) => {
    try {
      let status = 200;
      let message = 'OK';
      let data = {};

      const {data: userCreated, error} = await authService.create(req.body)
      console.log("🚀 ~ file: authController.js ~ line 8 ~ create: ~ error", typeof error)
      if (error !== null) {
        status = 500,
        message = 'failed'
      }

      res.send({
        status,
        message,
        data: userCreated
      })
    } catch (error) {
      console.log("🚀 ~ file: authController.js ~ line 23 ~ create: ~ error", error)
      res.send({ status: 500, message: 'failed', data: error })
    }
  }
}

module.exports = authController;