import { defineStorage } from "@aws-amplify/backend";

export const storage = defineStorage({
  name: "amplifyTestStorage",
  access: (allow) => ({
    "media/*": [allow.guest.to(["read", "write", "delete"])],
  }),
});
