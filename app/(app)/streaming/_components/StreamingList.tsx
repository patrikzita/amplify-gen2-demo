import { QestCard } from "@/components/cards/QestCard";
import { cookiesClient } from "@/lib/amplify";
import { simulateAsyncOperation } from "@/lib/dev";

export const StreamingList = async () => {
  const { data: employees } = await cookiesClient.models.Employee.list();
  await simulateAsyncOperation(1000);

  return (
    <div className="flex gap-3 flex-wrap">
      {employees.map((employee) => (
        <QestCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};
