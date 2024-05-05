import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import repoImage from "@/public/repo-image.jpg";

export default async function Page() {
  return (
    <main className="flex flex-col md:flex-row min-h-screen gap-8 justify-between p-24">
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
      <div className="relative h-96 w-96 md:h-32 md:w-32">
        <Image
          src="https://images.unsplash.com/photo-1583529956519-c1051d0e1a10?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="big image"
          className="object-cover rounded-md"
        />
      </div>
    </main>
  );
}
