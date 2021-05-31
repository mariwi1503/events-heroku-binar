const Event = (instance, dataTypes) => instance.define('event', {
  id: {
    type: dataTypes.INTEGER(11),
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: dataTypes.INTEGER(11),
  },
  name: {
    type: dataTypes.STRING(100)
  },
  description: {
    type: dataTypes.STRING(100)
  },
  created_at: {
    type: dataTypes.DATE(30)
  },
  updated_at: {
    type:dataTypes.DATE(30)
  }
}, {
  tableName: 'event',
  underscored: true
}
)

module.exports = Event;