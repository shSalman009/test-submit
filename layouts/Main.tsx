import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

const Main = ({ children }: any) => {
  return (
    <div className="flex justify-between items-start">
      <div className="min-w-[256px]">
        <Sidebar />
      </div>
      <div className="w-full m-4">
        <Topbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Main;
