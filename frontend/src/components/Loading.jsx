import { Spinner } from "@material-tailwind/react";
 
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen gap-8 ">
      <Spinner className="h-12 w-12" />
    </div>
  );
}