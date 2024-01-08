const SubCategory = require("../schemas/sub_categories");

module.exports = {
  getAll: async () => {
    const allSubCategories = await SubCategory.find();
    return allSubCategories;
  },
};
