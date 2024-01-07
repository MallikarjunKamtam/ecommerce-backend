const Categories = require("../schemas/categories");

module.exports = {
  create: async (payload) => {
    const newCategory = new Categories({ ...payload });
    await newCategory.save();
    return newCategory;
  },

  getAll: async () => {
    const allCategories = await Categories.find();
    return allCategories;
  },

  getOne: async (id) => {
    const category = await Categories.findById(id);

    if (!category) {
      throw new Error("Category not found");
    }
    return category;
  },

  update: async (id, payload) => {},

  delete: async (_id) => {
    const deletedUser = await Categories.findByIdAndDelete(_id);
    if (!deletedUser) {
      throw new Error("User not found");
    }
    return { message: `user with ID ${_id} has been deleted successfully` };
  },
};
