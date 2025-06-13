import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="http://www.linkedin.com/in/snehyadav510" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Sneh0510" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
    </div>
  );
};

export default ContactSocial;
