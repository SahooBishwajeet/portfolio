import command from "@/data/main.json";

const createProject = (): string[] => {
  let string = "";
  const projects: string[] = [];
  const personalFiles = `${command.projects.personal.length} File(s)`;
  const contibFiles = `${command.projects.contributions.length} File(s)`;
  const SPACE = "&nbsp;";

  projects.push("<br>");

  projects.push(`Personal Projects`);

  projects.push("<br>");

  command.projects.personal.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(24 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = "";
  });

  projects.push("<br>");

  projects.push(personalFiles);

  projects.push("<br>");

  projects.push(`Other Contributions`);

  projects.push("<br>");

  command.projects.contributions.forEach((ele) => {
    let link = `<a href="${ele[2]}" target="_blank">${ele[0]}</a>`;
    string += SPACE.repeat(2);
    string += link;
    string += SPACE.repeat(24 - ele[0].length);
    string += ele[1];
    projects.push(string);
    string = "";
  });

  projects.push("<br>");

  projects.push(contibFiles);

  projects.push("<br>");

  return projects;
};

export const PROJECTS = createProject();
