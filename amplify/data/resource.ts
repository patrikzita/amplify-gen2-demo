// amplify/data/resource.ts

import { a, defineData, type ClientSchema } from "@aws-amplify/backend";

const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
      isDone: a.boolean(),
    })
    .authorization((allow) => [allow.publicApiKey()]),
  Employee: a
    .model({
      id: a.id().required(),
      firstName: a.string(),
      lastName: a.string(),
      position: a.string(),
      age: a.integer(),
      projects: a.hasMany("Project", "id"),
    })
    .authorization((allow) => [allow.guest()]),
  Project: a
    .model({
      id: a.id().required(),
      name: a.string(),
      description: a.string(),
      employees: a.belongsTo("Employee", "id"),
    })
    .authorization((allow) => [allow.publicApiKey()]),
});

// Used for code completion / highlighting when making requests from frontend
export type Schema = ClientSchema<typeof schema>;

// defines the data resource to be deployed
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  },
});
