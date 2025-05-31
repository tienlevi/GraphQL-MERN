const typeDefs = `#gql
  input Inputs {
    name: String
    price: Int
    description: String
    category: String
    rating: Float
    stock: Int
  }

  type Product {
    id: ID!
    name: String
    price: Int
    description: String
    category: String
    rating: Float
    stock: Int
  }

  type Category {
    id: ID!
    name: String
  }
  
  type Info {
    name: String
    age: Int
    gender: Boolean
  }  

  type User {
    id: ID!
    info: Info
    password: String
    products: [Product]
  }

  type Query {
    product(id: ID!): Product
    products: [Product]
    categories: [Category]
    users: [User]
  }

  type Mutation {
    create(data: Inputs): Product
    delete(id: ID!): Product
    update(id: ID!,data: Inputs): Product
  }
`;

export default typeDefs;
