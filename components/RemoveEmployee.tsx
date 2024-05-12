import { cookiesClient } from "@/lib/amplify";
import { Trash } from "lucide-react";
import { revalidatePath } from "next/cache";
import { Button } from "./ui/button";

const RemoveEmployee = ({ id }: { id: string }) => {
  const deleteEmployee = async () => {
    "use server";
    try {
      await cookiesClient.models.Employee.delete({
        id,
      });
      revalidatePath("/form");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form action={deleteEmployee}>
      <Button variant="ghost">
        <Trash className="self-start text-red-600" />
      </Button>
    </form>
  );
};

export default RemoveEmployee;
