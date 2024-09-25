const express = require(express);
const UserService - require('/src/domain/services/UserService');
const UserRepository = require('/src/infrastructure/reporitories/UserRepository');
const UserApplicationService = require('../services/UserApplicationService');

const router = express.Router();
const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userApplicationService = new UserApplicationService(userService);

router.post('/users', (req, res) => {
  const {id, name, email } = req.body;
  const user = userApplicationService.createUser(id, name, email);
  res.status(201).json({message: 'User created', user});
});

module.exports = router;
