import type { PreTokenGenerationTriggerHandler } from "aws-lambda";

export const handler: PreTokenGenerationTriggerHandler = async (event) => {
  event.response = {
    claimsOverrideDetails: {
      groupOverrideDetails: {
        // This will add the user to the cognito group "amplify_group_1"
        groupsToOverride: ["qest_employee"],
      },
      claimsToAddOrOverride: {
        // This will add the custom claim "custom_attribute" to the id token
        custom_attribute: "js_squad",
      },
    },
  };
  return event;
};
