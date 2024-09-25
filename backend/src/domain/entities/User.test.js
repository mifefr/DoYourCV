const User = require('./User');

describe('User Entity', () => {
  test('should create a user', () => {
    const user = new User(1, 'Allan','allan@test.com');
    expect(user.id).toBe(1);
    expect(user.name).toBe('Allan');
    expect(user.email).toBe('allan@test.com');
  });

  test('should change email', () => {
    const user = new User(1, 'Allan', 'allan@test.com');
    user.changeEmail('newMail@test.com');
    expect(user.email).toBe('newMail@test.com');
  });

  test('should throw error mail same', () => {
    const user = new User(1, 'Allan', 'allan@test.com');
    expect(() => {
      user.changeEmail('allan@test.com');
    }).toThrow('L\'email est deja utilise');
  });
});
