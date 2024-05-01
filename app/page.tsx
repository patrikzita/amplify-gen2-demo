import TodoList from "@/components/test";
import { cookiesClient } from "@/lib/amplify";

export default async function Home() {
  async function addTodo(data: FormData) {
    "use server";
    const title = data.get("title") as string;
    await cookiesClient.models.Todo.create({
      content: title,
      isDone: false,
    });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={addTodo}>
        <input type="text" name="title" />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList />
    </main>
  );
}
