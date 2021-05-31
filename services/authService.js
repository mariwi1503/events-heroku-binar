const bcrypt = require('bcrypt');
const { userModel } = require('../database')

const authService = {
  create: async (userDetails) => {
    try {
      const saltRounds = 10
      const salt = await bcrypt.genSaltSync(saltRounds)

      const hashedPassword = await bcrypt.hashSync(userDetails.password, salt)

      const isUserExist = await userModel.findOne({where: {username: userDetails.username}})
      let error = null;
      if (isUserExist) {
        error = 'user already exist'
      }

      const result = await userModel.create({
        username: userDetails.username,
        password: hashedPassword
      })

      return {
        data: result,
        error
      };

    } catch (error) {
      console.log(error)
      return error
    }
  }
}

module.exports = authService;