import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const TeacherLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if(!userId){
    return redirect("/")
  }

  return <div>{children}</div>;
};

export default TeacherLayout;
