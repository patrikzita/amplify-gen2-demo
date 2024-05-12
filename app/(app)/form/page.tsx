import { Shell } from "@/components/shell";
import { ProfileForm } from "./_components/form";
import { QestCard } from "@/components/cards/QestCard";
import { cookiesClient, runWithAmplifyServerContext } from "@/lib/amplify";

async function FormPage() {
  const { data: employees } = await cookiesClient.models.Employee.list();

  return (
    <Shell>
      <ProfileForm />
      <div className="flex gap-3 flex-wrap">
        {employees.map((employee) => (
          <QestCard key={employee.id} employee={employee} />
        ))}
      </div>
    </Shell>
  );
}

export default FormPage;
