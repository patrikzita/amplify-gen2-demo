import TodoList from "@/components/test";
import { cookiesClient } from "@/lib/amplify";
import { revalidatePath } from "next/cache";
import Image from "next/image";

export default async function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      isDone: false,
    });
    revalidatePath("/");
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList />
      <Image
        src={`https://images.unsplash.com/photo-1638401985663-11bb99e6276e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        height={1000}
        width={1000}
        alt="whatever"
      />
    </main>
  );
}
