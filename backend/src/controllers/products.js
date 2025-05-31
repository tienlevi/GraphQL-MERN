import Product from "../models/product.js";

export const getProducts = async () => {
  try {
    const response = await Product.find();
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await Product.findById(id);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const addProduct = async (data) => {
  try {
    const response = await Product.create(data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const editProduct = async (id, data) => {
  try {
    const response = await Product.findByIdAndUpdate(id, data, { new: true });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await Product.findByIdAndDelete({ _id: id });
    return response;
  } catch (error) {
    console.log(error);
  }
};
