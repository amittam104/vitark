import { redirect } from "next/navigation";

function page() {
  redirect("/docs/components/weekly-tracker");
  return <div></div>;
}

export default page;
