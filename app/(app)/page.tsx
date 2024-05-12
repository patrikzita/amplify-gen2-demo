import { Shell } from "@/components/shell";
import qestLogo from "@/public/logo_black_black.svg";
import Image from "next/image";

export default async function Home() {
  return (
    <Shell variant="centered" className="max-w-5xl justify-start">
      <div className="flex pt-20 gap-x-10">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              AWS Amplify Demo
            </h1>
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold">Agenda</h2>
            <ul className="space-y-1 text-gray-500 dark:text-gray-400">
              <li>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Authentication
                </span>
                - Secure user sign-in and sign-out
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  API Integration
                </span>
                - Seamless integration with AWS services
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Storage
                </span>
                - Scalable and secure data storage
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Hosting
                </span>
                - Rapid deployment and hosting
              </li>
              <li>
                <span className="font-medium text-gray-900 dark:text-gray-50">
                  Analytics
                </span>
                - Powerful analytics and insights
              </li>
            </ul>
          </div>
        </div>
        <div>
          <Image alt="logo" src={qestLogo} />
        </div>
      </div>
    </Shell>
  );
}
