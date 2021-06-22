const { DataTypes } = require('sequelize');

// 记录所有注册的用户
module.exports = (conn) => {
  return conn.define(
    'user',
    {
      username: { type: DataTypes.STRING(20), allowNull: false },
      password: { type: DataTypes.STRING(100), allowNull: false },
      email: { type: DataTypes.STRING(100), allowNull: false },
      // 用户Id
      uid: { type: DataTypes.STRING(20), primaryKey: true },
      // git生成的用户Id
      gitUid: { type: DataTypes.STRING(50), allowNull: false },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
};
