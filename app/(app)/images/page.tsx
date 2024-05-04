import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import repoImage from "@/public/repo-image.jpg";

export default async function Page() {
  return (
    <main className="flex min-h-screen gap-8 justify-between p-24">
      <div>
        <h2>External Optimized image by AWS amplify</h2>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={`https://images.unsplash.com/photo-1638401985663-11bb99e6276e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              className="object-cover rounded-lg"
              alt="whatever"
              fill
            />
          </AspectRatio>
        </div>
      </div>
      <div>
        <h2>External Unoptimized image</h2>
        <div className="w-[450px]">
          <AspectRatio ratio={1 / 1}>
            <Image
              unoptimized
              src={`https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              className="object-cover rounded-lg"
              alt="whatever"
              fill
            />
          </AspectRatio>
        </div>
      </div>
      <div>
        <h2>Repo Optimized image</h2>
        <div className="w-[450px]">
          <AspectRatio ratio={16 / 9}>
            <Image
              src={repoImage}
              className="object-cover rounded-lg"
              alt="whatever"
              fill
            />
          </AspectRatio>
        </div>
      </div>
    </main>
  );
}
