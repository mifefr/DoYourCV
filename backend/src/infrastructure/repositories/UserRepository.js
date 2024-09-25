class UserRepository {
  constructor() {
    this.user = [];
  }

  save(user) {
    this.user.push(user);
  }

  findById(id) {
    return this.user.find(user => user.id === id);
  }
}

module.exports = UserRepository;
