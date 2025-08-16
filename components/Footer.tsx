import { socialMedia } from "@/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaLocationArrow, FaXTwitter } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const icons: Record<string, JSX.Element> = {
  github: <FaGithub size={20} />,
  linkedin: <FaLinkedin size={20} />,
  twitter: <FaXTwitter size={20} />,
};

const Footer = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Let&apos;s build something <span className="text-purple">great</span>{" "}
          together.
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Whether it&apos;s full-stack development, design, or tooling - reach
          out and let&apos;s collaborate.
        </p>
        <a href="mailto:biswa.2004.bdk@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          © 2025 Bishwajeet Sahoo
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              {icons[info.name]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
