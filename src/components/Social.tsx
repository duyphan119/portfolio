import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "",
  },
  {
    icon: <FaLinkedinIn />,
    path: "",
  },
  {
    icon: <FaYoutube />,
    path: "",
  },
  {
    icon: <FaTwitter />,
    path: "",
  },
];

export default function Social({
  containerClassName = "",
  iconClassName = "",
}: {
  containerClassName?: string;
  iconClassName?: string;
}) {
  return (
    <div className={containerClassName}>
      {socials.map(({ path, icon }) => {
        return (
          <Link href={path} key={path} className={iconClassName}>
            {icon}
          </Link>
        );
      })}
    </div>
  );
}
