import Link  from "next/link"

type props = {
  date: string;
  title: string;
  description: string;
  href: string;
};

const AtelierPreview = (props: props) => {
  return (
    <Link href={props.href}>
      <div className="bg-[#ffd8f2] hover:bg-[#f5afde] rounded-sm flex flex-row justify-start space-x-8 rounded-sm">
        <div className="flex items-center justify-center w-14 h-14 px-10 rounded-xl">
          <p className="text-[#a63882] font-bold text-2xl italic">{props.date}</p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-xl font-bold font-archivoBlack text-black">
            {props.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {props.description}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default AtelierPreview;