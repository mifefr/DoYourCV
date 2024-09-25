class Email {
  constructor(address) {
    if (!this.validateEmail(address)) {
      throw new Error("Email invalide");
    }
    this.address = address;
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  equals(otherEmail) {
    return this.address === otherEmail.address;
  }
}

module.exports = Email;
