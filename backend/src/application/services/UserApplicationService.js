class UserApplicationService {
  constructor(userService) {
    this.userService = userService;
  }

  createUser(id, name, email) {
    const user = new User(id, name, email);
    this.userService.registerUser(user);
    return user;
  }
}

module.exports = UserApplicationService;
