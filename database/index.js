const Sequelize = require('sequelize');

const User = require('./models/user');
const Event = require('./models/event');

const { DataTypes } = Sequelize;

const sequelizeInstance = new Sequelize(
  'd4t71doj56jpgq', // ! nama dabatabase
  'rybofyjlsyprnz', // ! username
  '30f3d28f7aec07d2de68bdfd3e924950c18e0bdd62a78ba13425f8a68af61ebe', { // ! password
  host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
  dialect: 'postgres',
  port: 5432,
  dialectOptions: {
    ssl: {
        require: true,
        rejectUnauthorized: false
    }
  }
});

sequelizeInstance.authenticate()
.then((res) => console.log('Connection has been established successfully. ', res))
.catch((error) => console.error('Unable to connect to the database:', error))


const userModel = User(sequelizeInstance, DataTypes)
const eventModel = Event(sequelizeInstance, DataTypes)

module.exports = {
  userModel,
  eventModel
};


