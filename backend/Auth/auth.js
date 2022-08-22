const jwt = require('jsonwebtoken');

const db = { username: 'guilhermespil', password: 'guibot123' };

const authenticate = async ({ username, password }) => {
      const user = db.find(
            (user) => user.passowrd === password && user.username === username
      );
      if (user) {
            const token = await jwt.sign({ username }, 'configuraraplicacao');
            return {
                  token,
                  user,
            };
      }
};

module.exports = {
      authenticate,
};
