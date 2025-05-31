import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import type { ReactNode } from "react";

function GraphQLContext({ children }: { children: ReactNode }) {
  const client = new ApolloClient({
    cache: new InMemoryCache({ addTypename: false }),
    uri: "http://localhost:4000",
  });
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default GraphQLContext;
