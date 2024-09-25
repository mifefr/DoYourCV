class UserServices {
  constructor(UserRepositoy) {
    this.userRepository = userRepository;
  }

  registerUser(user) {
    // TODO valider
    this.userRepository.save(user);
  }
}

module.exports = UserServices;
