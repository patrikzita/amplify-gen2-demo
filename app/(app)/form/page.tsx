import { Shell } from "@/components/shell";
import { cookiesClient } from "@/lib/amplify";
import { ProfileForm } from "./_components/form";

async function FormPage() {
  const { data: projects, errors } = await cookiesClient.models.Project.list();

  return (
    <Shell>
      <ProfileForm projects={projects} />
    </Shell>
  );
}

export default FormPage;
