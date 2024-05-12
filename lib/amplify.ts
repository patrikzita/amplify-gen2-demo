import { type Schema } from "@/amplify/data/resource";
import outputs from "@/amplify_outputs.json";
import { createServerRunner } from "@aws-amplify/adapter-nextjs";
import {
  generateServerClientUsingCookies,
  generateServerClientUsingReqRes,
} from "@aws-amplify/adapter-nextjs/api";
import { getCurrentUser } from "aws-amplify/auth/server";
import { cookies } from "next/headers";

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export const cookiesClient = generateServerClientUsingCookies<Schema>({
  config: outputs,
  cookies,
});

export const reqResBasedClient = generateServerClientUsingReqRes<Schema>({
  config: outputs,
});

export async function AuthGetCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
  } catch (error) {
    console.error(error);
  }
}
