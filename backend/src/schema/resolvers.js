import { categories } from "../data/categories.js";
import {
  addProduct,
  getProducts,
  getProductById,
  editProduct,
  deleteProduct,
} from "../controllers/products.js";

const resolvers = {
  Query: {
    products: async () => await getProducts(),
    product: async (_, args) => await getProductById(args.id),
    categories: () => categories,
    users: () => [],
  },

  Mutation: {
    create: async (_, args) => await addProduct(args.data),
    delete: async (_, args) => await deleteProduct(args.id),
    update: async (_, args) => {
      const { id, data } = args;
      return await editProduct(id, data);
    },
  },
};

export default resolvers;
