"use client";

import "./css/base.css";
import "./css/style.css";

import useTerminal from "@/modules/useTerminal";
import useTerminalStyle from "@/modules/useTerminalStyle";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function Home() {
  useTerminal();
  useTerminalStyle();

  return (
    <main id="main" className={victorMono.className}>
      <div id="lines">
        <div id="line-1">BishwajeetSahoo.x31_01</div>
        <div id="line-2"></div>
        <div id="line-3"></div>
        <div id="line-4"></div>
        <div id="line-5"></div>
      </div>

      <div id="terminal">
        <div>
          <span id="prompt">
            <span id="pre-user"></span>@<span id="pre-host"></span>:$ ~
          </span>
        </div>
        <a id="write-lines"></a>
      </div>

      <div id="input-line">
        <div>
          <p id="password-input" style={{ display: "none" }}>
            Password:
            <input id="password-field" autoComplete="off" type="password" />
          </p>
          <p id="input-hidden">
            <span id="prompt">
              <span id="user"></span>@<span id="host"></span>:$ ~
            </span>
            <input
              id="user-input"
              type="text"
              enterKeyHint="enter"
              spellCheck="false"
              autoCapitalize="none"
              autoComplete="off"
            />
          </p>
        </div>
      </div>
    </main>
  );
}
