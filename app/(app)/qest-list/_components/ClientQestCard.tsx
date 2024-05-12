import { Schema } from "@/amplify/data/resource";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { generateClient } from "aws-amplify/data";
import { Trash } from "lucide-react";

type QestCardProps = {
  employee: Schema["Employee"]["type"];
};

const client = generateClient<Schema>();

export const ClientQestCard = ({ employee }: QestCardProps) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;

  const deleteEmployee = async () => {
    await client.models.Employee.delete({
      id: employee.id,
    });
  };

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="">
            {fullName} <span className="text-base">({employee.age} y.o)</span>
          </CardTitle>
          <CardDescription>{employee.position}</CardDescription>
        </div>
        <Button variant="ghost" onClick={deleteEmployee}>
          <Trash className="self-start text-red-600" />
        </Button>
      </CardHeader>
    </Card>
  );
};
