const helpObj = {
  "commands": [
    [
      "'cat about.me'",
      "About Me",
    ],
    [
      "'ls -la projects'",
      "What did I cook?"
    ],
    [
      "'whoami'",
      "A very intriguing question."
    ],
    [
      "'curl repo'",
      "View the Github Repo."
    ],
    ["'neofetch'",
      "Display the banner."
    ],
    [
      "'clear'",
      "Clear the terminal."
    ],
    [
      "'roasted'",
      "It's all on you, don't come crying to me."
    ],
  ],
}

const createHelp = (): string[] => {
  const help: string[] = []

  help.push("<br>")

  helpObj.commands.forEach((ele) => {
    const SPACE = "&nbsp;";
    let string = "";

    string += SPACE.repeat(2);
    string += "<span class='command'>";
    string += ele[0];
    string += "</span>";
    string += SPACE.repeat(25 - ele[0].length);
    string += ele[1];

    help.push(string);
  })

  help.push("<br>");

  help.push("Press <span class='keys'>[Tab]</span> for auto completion.");
  help.push("Press <span class='keys'>[Esc]</span> to clear the input line.");
  help.push("Press <span class='keys'>[↑][↓]</span> to scroll through your history of commands.");

  help.push("<br>");

  return help
}

export const HELP = createHelp();
