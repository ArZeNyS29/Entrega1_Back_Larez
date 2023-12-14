class UserManager {
    #users = [];
    #id = 1;
  
    constructor(data) {
      this.id = this.#id++;
      this.username = data.username;
      this.email = data.email;
      this.password = data.password;
      this.photo = data.photo;
    }
  
    createUser(data) {
      const user = {
        id: this.#id++,
        username: data.username,
        email: data.email,
        password: data.password,
        photo: data.photo,
      };
      this.#users.push(user);
    }
  
    getUsers() {
      return this.#users;
    }
  
    findUserById(id) {
      return this.#users.find((user) => user.id === id);
    }
  }
  
  const userManager = new UserManager({
    username: "user1",
    email: "user1@example.com",
    password: "password1",
    photo: "photo1.jpg",
  });
  
  userManager.createUser({
    username: "user2",
    email: "user2@example.com",
    password: "password2",
    photo: "photo2.jpg",
  });
  
  userManager.createUser({
    username: "user3",
    email: "user3@example.com",
    password: "password3",
    photo: "photo3.jpg",
  });
  
  const allUsers = userManager.getUsers();
  console.log("All users:", allUsers);
  
  const userWithId1 = userManager.findUserById(1);
  console.log("User with ID 1:", userWithId1);
  
  const userWithId2 = userManager.findUserById(2);
  console.log("User with ID 2:", userWithId2);
  