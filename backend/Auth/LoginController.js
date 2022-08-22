const service = require('./auth');

class LoginController {
      constructor(LoginService) {
            this.LoginService = LoginService;
      }

      login = (req, res) => {
            this.LoginService.authenticate(req.body)
                  .then((user) =>
                        user
                              ? res.jason(user)
                              : res
                                      .status(400)
                                      .json({
                                            message: 'Usuário ou senha invalida.',
                                      })
                  )
                  .catch(console.log);
      };
}

module.exports = new LoginController(service);
