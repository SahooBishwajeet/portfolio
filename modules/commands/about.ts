import main from "@/data/main.json";

const createAbout = (): string[] => {
  const about: string[] = [];

  const SPACE = "&nbsp;";

  const CLASSIC = "Classic Version of Portfolio";
  const BRAINDUMP = "Brain-Dump";
  const EMAIL = "Email";
  const GITHUB = "Github";
  const LINKEDIN = "Linkedin";
  const TWITTER = "Twitter";
  const INSTAGRAM = "Instagram";
  const DISCORD = "Discord";

  const classic = `<i class='fa-solid fa-terminal'></i> ${CLASSIC}`;
  const braindump = `<i class='fa-solid fa-brain'></i> ${BRAINDUMP}`;
  const email = `<i class='fa-solid fa-envelope'></i> ${EMAIL}`;
  const github = `<i class='fa-brands fa-github'></i> ${GITHUB}`;
  const linkedin = `<i class='fa-brands fa-linkedin'></i> ${LINKEDIN}`;
  const twitter = `<i class='fa-brands fa-twitter'></i> ${TWITTER}`;
  const instagram = `<i class='fa-brands fa-instagram'></i> ${INSTAGRAM}`;
  const discord = `<i class='fa-brands fa-discord'></i> ${DISCORD}`;
  let string = "";

  about.push("<br>");

  about.push(main.message);

  about.push("<br>");

  string += SPACE.repeat(2);
  string += classic;
  string += SPACE.repeat(35 - CLASSIC.length);
  string += `<a target='_blank' href='/classic'>/classic</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += braindump;
  string += SPACE.repeat(35 - BRAINDUMP.length);
  string += `<a target='_blank' href='${main.braindump}'>${
    main.braindump.split("/")[2]
  }</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += email;
  string += SPACE.repeat(35 - EMAIL.length);
  string += `<a target='_blank' href='mailto:${main.social.email}'>${main.social.email}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += github;
  string += SPACE.repeat(35 - GITHUB.length);
  string += `<a target='_blank' href='https://github.com/${main.social.github}'>github/${main.social.github}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += linkedin;
  string += SPACE.repeat(35 - LINKEDIN.length);
  string += `<a target='_blank' href='https://www.linkedin.com/in/${main.social.linkedin}'>linkedin/${main.social.linkedin}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += twitter;
  string += SPACE.repeat(35 - TWITTER.length);
  string += `<a target='_blank' href='https://twitter.com/${main.social.twitter}'>twitter/${main.social.twitter}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += discord;
  string += SPACE.repeat(35 - DISCORD.length);
  string += `<a target='_blank' href='https://discordapp.com/channels/@me/${main.social.discord}'>discord/${main.social.github}</a>`;
  about.push(string);

  string = "";
  string += SPACE.repeat(2);
  string += instagram;
  string += SPACE.repeat(35 - INSTAGRAM.length);
  string += `<a target='_blank' href='https://www.instagram.com/${main.social.instagram}'>instagram/${main.social.instagram}</a>`;
  about.push(string);

  about.push("<br>");
  return about;
};

export const ABOUT = createAbout();
