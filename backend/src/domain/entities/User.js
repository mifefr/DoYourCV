class User {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  changeEmail(newEmail) {
    if (this.email === newEmail) {
      throw new Error("L'email est deja utilise")
    }
    
    this.email = newEmail;
  }
}

module.exports = User;
