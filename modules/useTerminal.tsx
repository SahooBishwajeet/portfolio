"use client";

import main from "@/data/main.json";
import { useEffect, useRef } from "react";

// commands
import { ABOUT } from "./commands/about";
import { BANNER } from "./commands/banner";
import { DEFAULT } from "./commands/default";
import { HELP } from "./commands/help";
import { PROJECTS } from "./commands/projects";
import { createWhoami } from "./commands/whoami";

export default function useTerminal() {
  const initialized = useRef(false);

  useEffect(() => {
    if(initialized.current) return;
    initialized.current = true;

    //mutWriteLines gets deleted and reassigned
    let doWriteLines = document.getElementById("write-lines");
    let historyIdx = 0;
    let tempInput = "";
    let userInput: string;
    let isSudo = false;
    let isPasswordInput = false;
    let passwordCounter = 0;
    let bareMode = false;

    //WRITELINESCOPY is used to during the "clear" command
    const WRITELINESCOPY = doWriteLines;
    const TERMINAL = document.getElementById("terminal");
    const USERINPUT = document.getElementById("user-input") as HTMLInputElement;
    const INPUT_HIDDEN = document.getElementById("input-hidden");
    const PASSWORD = document.getElementById("password-input");
    const PASSWORD_INPUT = document.getElementById(
      "password-field"
    ) as HTMLInputElement;
    const PRE_HOST = document.getElementById("pre-host");
    const PRE_USER = document.getElementById("pre-user");
    const HOST = document.getElementById("host");
    const USER = document.getElementById("user");
    const PROMPT = document.getElementById("prompt");
    const COMMANDS = [
      "classic",
      "letmesleep",
      "roasted",
      "help",
      "cat about.me",
      "ls -la projects",
      "whoami",
      "curl repo",
      "neofetch",
      "clear",
      "wget resume",
    ];
    const HISTORY: string[] = [];
    const SUDO_PASSWORD = main.password;
    const REPO_LINK = main.repository;
    const BRAINDUMP = main.braindump;
    const RESUME = main.resume;

    const scrollToBottom = () => {
      const MAIN = document.getElementById("main");
      if (!MAIN) return;

      MAIN.scrollTop = MAIN.scrollHeight;
    };

    function userInputHandler(e: KeyboardEvent) {
      const key = e.key;

      switch (key) {
        case "Enter":
          e.preventDefault();
          if (!isPasswordInput) {
            enterKey();
          } else {
            passwordHandler();
          }

          scrollToBottom();
          break;
        case "Escape":
          USERINPUT.value = "";
          break;
        case "ArrowUp":
          arrowKeys(key);
          e.preventDefault();
          break;
        case "ArrowDown":
          arrowKeys(key);
          break;
        case "Tab":
          tabKey();
          e.preventDefault();
          break;
      }
    }

    function enterKey() {
      if (!doWriteLines || !PROMPT) return;
      const resetInput = "";
      let newUserInput;
      userInput = USERINPUT.value;

      if (bareMode) {
        newUserInput = userInput;
      } else {
        newUserInput = `<span class='output'>${userInput}</span>`;
      }

      HISTORY.push(userInput);
      historyIdx = HISTORY.length;

      //if clear then early return
      if (userInput === "clear") {
        commandHandler(userInput.toLowerCase().trim());
        USERINPUT.value = resetInput;
        userInput = resetInput;
        return;
      }

      const div = document.createElement("div");
      div.innerHTML = `<span id="prompt">${PROMPT.innerHTML}</span> ${newUserInput}`;

      if (doWriteLines.parentNode) {
        doWriteLines.parentNode.insertBefore(div, doWriteLines);
      }

      /*
        if input is empty or a collection of spaces,
        just insert a prompt before #write-lines
        */
      if (userInput.trim().length !== 0) {
        commandHandler(userInput.toLowerCase().trim());
      }

      USERINPUT.value = resetInput;
      userInput = resetInput;
    }

    function tabKey() {
      let currInput = USERINPUT.value;

      for (const ele of COMMANDS) {
        if (ele.startsWith(currInput)) {
          USERINPUT.value = ele;
          return;
        }
      }
    }

    function arrowKeys(e: string) {
      switch (e) {
        case "ArrowDown":
          if (historyIdx !== HISTORY.length) {
            historyIdx += 1;
            USERINPUT.value = HISTORY[historyIdx];
            if (historyIdx === HISTORY.length) USERINPUT.value = tempInput;
          }
          break;
        case "ArrowUp":
          if (historyIdx === HISTORY.length) tempInput = USERINPUT.value;
          if (historyIdx !== 0) {
            historyIdx -= 1;
            USERINPUT.value = HISTORY[historyIdx];
          }
          break;
      }
    }

    function commandHandler(input: string) {
      if (input.startsWith("rm -rf") && input.trim() !== "rm -rf") {
        if (isSudo) {
          if (input === "rm -rf project" && !bareMode) {
            bareMode = true;

            setTimeout(() => {
              if (!TERMINAL || !WRITELINESCOPY) return;
              TERMINAL.innerHTML = "";
              TERMINAL.appendChild(WRITELINESCOPY);
              doWriteLines = WRITELINESCOPY;
            });

            easterEggStyles();
            setTimeout(() => {
              writeLines(["What made you think that was a good idea?", "<br>"]);
            }, 200);

            setTimeout(() => {
              writeLines(["Now everything is ruined.", "<br>"]);
            }, 1200);
          } else if (input === "rm -rf project" && bareMode) {
            writeLines([
              "OMG!!! The project file is deleted.....Jokes on You, You can't do shite",
              "<br>",
            ]);
          } else {
            if (bareMode) {
              writeLines(["Enough, What else are you trying to break?", "<br>"]);
            } else {
              writeLines([
                "<br>",
                "Directory not found.",
                "type <span class='command'>'ls'</span> for a list of directories.",
                "<br>",
              ]);
            }
          }
        } else {
          writeLines(["Permission not granted.", "<br>"]);
        }
        return;
      }

      switch (input) {
        case "roasted":
          bareMode = !bareMode;
          break;

        case "clear":
          setTimeout(() => {
            if (!TERMINAL || !WRITELINESCOPY) return;
            TERMINAL.innerHTML = "";
            TERMINAL.appendChild(WRITELINESCOPY);
            doWriteLines = WRITELINESCOPY;
          });
          break;
        case "neofetch":
          if (bareMode) {
            writeLines(["Bishwajeet Sahoo Portfolio", "<br>"]);
            break;
          }
          writeLines(BANNER);
          break;
        case "help":
          if (bareMode) {
            writeLines(["Maybe throwing away your PC will help...", "<br>"]);
            break;
          }
          writeLines(HELP);
          break;
        case "whoami":
          if (bareMode) {
            writeLines([`${main.username}`, "<br>"]);
            break;
          }
          writeLines(createWhoami());
          break;
        case "cat about.me":
          if (bareMode) {
            writeLines(["Maybe I'm the Illuminati...", "<br>"]);
            break;
          }
          writeLines(ABOUT);
          break;
        case "ls -la projects":
          if (bareMode) {
            writeLines(["LOL !!! I don't want you to see them...", "<br>"]);
            break;
          }
          writeLines(PROJECTS);
          break;
        case "letmesleep":
          writeLines(["Redirecting to brain-dump...", "<br>"]);
          setTimeout(() => {
            window.open(BRAINDUMP, "_blank");
          }, 500);
          break;
        case "classic":
          writeLines(["Redirecting to classic page...", "<br>"]);
          setTimeout(() => {
            window.open("/classic", "_blank");
          }, 500);
          break;
        case "curl repo":
          writeLines(["Redirecting to github.com...", "<br>"]);
          setTimeout(() => {
            window.open(REPO_LINK, "_blank");
          }, 500);
          break;
        case "wget resume":
          writeLines(["Loading resume...", "<br>"]);
          setTimeout(() => {
            window.open(RESUME, "_blank");
          }, 500);
          break;
        case "linkedin":
          //add stuff here
          break;
        case "github":
          //add stuff here
          break;
        case "email":
          //add stuff here
          break;
        case "rm -rf":
          if (bareMode) {
            writeLines(["This is dangerous. Don't try again.", "<br>"]);
            break;
          }

          if (isSudo) {
            writeLines([
              "Usage: <span class='command'>'rm -rf &lt;dir&gt;'</span>",
              "<br>",
            ]);
          } else {
            writeLines(["Permission not granted.", "<br>"]);
          }
          break;
        case "sudo":
          if (bareMode) {
            writeLines(["Nahh!!", "<br>"]);
            break;
          }
          if (!PASSWORD) return;
          isPasswordInput = true;
          USERINPUT.disabled = true;

          if (INPUT_HIDDEN) INPUT_HIDDEN.style.display = "none";
          PASSWORD.style.display = "block";
          setTimeout(() => {
            PASSWORD_INPUT.focus();
          }, 100);

          break;
        case "ls":
          if (bareMode) {
            writeLines(["", "<br>"]);
            break;
          }

          if (isSudo) {
            writeLines(["project", "<br>"]);
          } else {
            writeLines(["Permission not granted.", "<br>"]);
          }
          break;
        default:
          if (bareMode) {
            writeLines(["type 'help'", "<br>"]);
            break;
          }

          writeLines(DEFAULT);
          break;
      }
    }

    function writeLines(message: string[]) {
      message.forEach((item, idx) => {
        displayText(item, idx);
      });
    }

    function displayText(item: string, idx: number) {
      setTimeout(() => {
        if (!doWriteLines) return;
        const p = document.createElement("p");
        p.innerHTML = item;
        doWriteLines.parentNode!.insertBefore(p, doWriteLines);
        scrollToBottom();
      }, 40 * idx);
    }

    function revertPasswordChanges() {
      if (!INPUT_HIDDEN || !PASSWORD) return;
      PASSWORD_INPUT.value = "";
      USERINPUT.disabled = false;
      INPUT_HIDDEN.style.display = "block";
      PASSWORD.style.display = "none";
      isPasswordInput = false;

      setTimeout(() => {
        USERINPUT.focus();
      }, 200);
    }

    function passwordHandler() {
      if (passwordCounter === 2) {
        if (!INPUT_HIDDEN || !doWriteLines || !PASSWORD) return;
        writeLines([
          "<br>",
          "INCORRECT PASSWORD.",
          "PERMISSION NOT GRANTED.",
          "<br>",
        ]);
        revertPasswordChanges();
        passwordCounter = 0;
        return;
      }

      if (PASSWORD_INPUT.value === SUDO_PASSWORD) {
        if (!doWriteLines || !doWriteLines.parentNode) return;
        writeLines([
          "<br>",
          "PERMISSION GRANTED.",
          "Try <span class='command'>'rm -rf'</span>",
          "<br>",
        ]);
        revertPasswordChanges();
        isSudo = true;
        updateUser();
        return;
      } else {
        PASSWORD_INPUT.value = "";
        passwordCounter++;
      }
    }

    function easterEggStyles() {
      const bars = document.getElementById("bars");
      const body = document.body;
      const main = document.getElementById("main");
      const span = document.getElementsByTagName("span");

      if (!bars) return;
      bars.innerHTML = "";
      bars.remove();

      if (main) main.style.border = "none";

      body.style.backgroundColor = "black";
      body.style.fontFamily = "VT323, monospace";
      body.style.fontSize = "20px";
      body.style.color = "white";

      for (let i = 0; i < span.length; i++) {
        span[i].style.color = "white";
      }

      USERINPUT.style.backgroundColor = "black";
      USERINPUT.style.color = "white";
      USERINPUT.style.fontFamily = "VT323, monospace";
      USERINPUT.style.fontSize = "20px";
      if (PROMPT) PROMPT.style.color = "white";
    }

    const updateUser = () => {
      if (USER) {
        USER.innerText = isSudo ? "root" : main.username;
      }

      if (PRE_USER) {
        PRE_USER.innerText = isSudo ? "root" : main.username;
      }
    };

    const initEventListeners = () => {
      if (HOST) {
        HOST.innerText = main.hostname;
      }

      if (PRE_HOST) {
        PRE_HOST.innerText = main.hostname;
      }

      updateUser();

      window.addEventListener("load", () => {
        writeLines(BANNER);
      });

      USERINPUT.addEventListener("keypress", userInputHandler);
      USERINPUT.addEventListener("keydown", userInputHandler);
      PASSWORD_INPUT.addEventListener("keypress", userInputHandler);

      window.addEventListener("click", () => {
        USERINPUT.focus();
      });

      console.log(
        `%cI'd Go Easy On You, Here Is The Password: ${main.password}`,
        "color: red; font-size: 20px;"
      );
    };

    initEventListeners();

  }, []);
}
