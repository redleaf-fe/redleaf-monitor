const { nanoid } = require('nanoid');

module.exports = {
  async idGenerate({ conn, modelName }) {
    let uid = nanoid(20);
    let res = await conn.models[modelName].findAll({
      where: { uid },
    });

    while (res.length > 0) {
      uid = nanoid(20);
      res = await conn.models[modelName].findAll({
        where: { uid },
      });
    }

    return uid;
  },
};
