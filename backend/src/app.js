import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./schema/typeDefs.js";
import resolvers from "./schema/resolvers.js";
import "./config/mongoose.js";
import Connect from "./config/mongoose.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

Connect();

const { url } = await startStandaloneServer(server, { listen: { port: 4000 } });
console.log(`🚀 Server ready at ${url}`);
