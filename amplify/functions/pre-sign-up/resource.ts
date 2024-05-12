import { defineFunction } from "@aws-amplify/backend";

export const preSignUp = defineFunction({
  name: "pre-sign-up",
  entry: "./handler.ts",
  // optionally define an environment variable for your filter
  environment: {
    ALLOW_DOMAIN: "qest.cz",
  },
});
