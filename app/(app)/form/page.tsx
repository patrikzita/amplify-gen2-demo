import { Shell } from "@/components/shell";
import { ProfileForm } from "./_components/form";
import { client, cookiesClient } from "@/lib/amplify";

async function FormPage() {
  const { data: projects, errors } = await cookiesClient.models.Project.list();

  return (
    <Shell>
      <ProfileForm projects={projects} />
    </Shell>
  );
}

export default FormPage;
