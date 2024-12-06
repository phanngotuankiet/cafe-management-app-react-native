import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: {
    [process.env.GRAPHQL_ENDPOINT ?? "http://localhost:8080/v1/graphql"]: {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET ?? "",
      },
    },
  },
  documents: ["src/**/*.graphql", "src/**/*.gql"],
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;