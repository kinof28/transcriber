import { ReactElement } from "react";
import { IconType } from "react-icons";

const ContactCard = ({
  Icon,
  children,
  title,
  bgColor,
  titleColor,
}: {
  Icon: IconType;
  children: ReactElement;
  title: string;
  bgColor: string;
  titleColor: string;
}) => {
  return (
    <div className="bg-white w-full rounded-3xl rounded-tr-lg overflow-hidden shadow-xl">
      <div
        className={`${bgColor} h-12 w-full rounded-3xl rounded-tr-lg relative`}
      >
        <div className="bg-white h-10 p-5 w-full rounded-3xl rounded-tr-none absolute top-1 left-[57px] z-10"></div>
        <div
          className={`${bgColor} p-3 w-fit rounded-full absolute top-0 left-0 text-white text-3xl z-10`}
        >
          <Icon />
        </div>
        <div className="bg-white w-full h-5 absolute bottom-0 z-0"></div>
        <h3
          className={`z-50 absolute left-16 top-2 text-2xl font-bold ${titleColor}`}
        >
          {title}
        </h3>
      </div>

      <div className="p-3">{children}</div>
    </div>
  );
};

export default ContactCard;
