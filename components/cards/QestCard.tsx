import { Schema } from "@/amplify/data/resource";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RemoveEmployee from "../RemoveEmployee";

type QestCardProps = {
  employee: Schema["Employee"]["type"];
};

export const QestCard = ({ employee }: QestCardProps) => {
  const fullName = `${employee.firstName} ${employee.lastName}`;

  return (
    <Card className="w-[350px]">
      <CardHeader className="flex flex-row justify-between">
        <div>
          <CardTitle className="">
            {fullName} <span className="text-base">({employee.age} y.o)</span>
          </CardTitle>
          <CardDescription>{employee.position}</CardDescription>
        </div>
        <RemoveEmployee id={employee.id} />
      </CardHeader>
    </Card>
  );
};
