import { Card } from "@/components/ui/card";
import Link from "next/link";

type props = {
  icon: React.ReactNode;
  title: string;
  href: string;
};

const ControlCard = (props: props) => {
  return (
    <>
        <Link href={props.href} >
      <Card className="flex flex-col-reverse items-center justify-center p-4 w-64 h-64 bg-[#ffd8f2] border-2 border-[#a63882] hover:bg-[#f5afde]">
        <Link href={props.href}>
          <div className="flex items-center justify-center w-10 h-10 bg-primary-100 text-white absolute -mt-28 overflow-auto bg-[#a63882] rounded-xl ">
            {props.icon}
          </div>
          <h3 className="text-2xl font-bold font-archivoBlack text-center ">
            {props.title}
          </h3>
        </Link> 
      </Card>
        </Link>
    </>
  );
};

export default ControlCard;
