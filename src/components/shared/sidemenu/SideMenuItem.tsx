import { NavLink } from "react-router-dom";
import type { IconType } from "react-icons";

//* PROPS *//
interface Props {
  href: string;
  Icon: IconType;
  title: string;
  subTitle: string;
}

export const SideMenuItem = ({ href, Icon, title, subTitle }: Props) => {
  return (
    <NavLink key={href} to={href} end>
      <div>
        <Icon />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold leading-5 text-white">{title}</span>
        <span className="hidden text-sm text-white/50 md:block">
          {subTitle}
        </span>
      </div>
    </NavLink>
  );
};
