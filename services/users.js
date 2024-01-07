const User = require("../schemas/users");

const usersService = {
  // Create a new user
  create: async (payload) => {
    const newUser = new User({ ...payload });
    await newUser.save();
    return newUser;
  },
  // Get all users
  getAll: async () => {
    const users = await User.find();
    return users;
  },

  // Get a specific user by ID
  getOne: async (id) => {
    const user = await User.findById(id);

    if (!user) {
      throw new Error("User does not exist");
    }
    return user;
  },

  // Update a user by ID
  update: async (id, payload) => {},

  // Delete a user by ID
  delete: async (_id) => {
    const deletedUser = await User.findByIdAndDelete(_id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return { message: `user with ID ${_id} has been deleted successfully` };
  },
};

module.exports = usersService;
