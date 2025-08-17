"use client";

import main from "@/data/main.json";
import { useEffect } from "react";

export default function useTerminalStyle() {
  useEffect(() => {
    const style = document.createElement("style");
    const head = document.head;

    const background = `body {background: ${main.colors.background}}`;
    const foreground = `body {color: ${main.colors.foreground}}`;
    const inputBackground = `input {background: ${main.colors.background}}`;
    const inputForeground = `input {color: ${main.colors.prompt.input}}`;
    const outputColor = `.output {color: ${main.colors.prompt.input}}`;
    const preHost = `#pre-host {color: ${main.colors.prompt.host}}`;
    const host = `#host {color: ${main.colors.prompt.host}}`;
    const preUser = `#pre-user {color: ${main.colors.prompt.user}}`;
    const user = `#user {color: ${main.colors.prompt.user}}`;
    const prompt = `#prompt {color: ${main.colors.prompt.default}}`;
    const banner = `pre {color: ${main.colors.banner}}`;
    const link = `a {color: ${main.colors.link.text}}`;
    const linkHighlight = `a:hover {background: ${main.colors.link.highlightColor}}`;
    const linkTextHighlight = `a:hover {color: ${main.colors.link.highlightText}}`;
    const commandHighlight = `.command {color: ${main.colors.commands.textColor}}`;
    const keys = `.keys {color: ${main.colors.banner}}`;

    head.appendChild(style);

    if (!style.sheet) return;

    if (!main.colors.border.visible) {
      style.sheet.insertRule("#lines {display: none}");
      style.sheet.insertRule("main {border: none}");
    } else {
      style.sheet.insertRule(`main {border-color: ${main.colors.border.color}}`);
      style.sheet.insertRule(`#lines {background: ${main.colors.background}}`);
      style.sheet.insertRule(
        `#line-1 {background: ${main.colors.border.color}; color: ${main.colors.background}}`
      );
      style.sheet.insertRule(`#line-2 {background: ${main.colors.border.color}}`);
      style.sheet.insertRule(`#line-3 {background: ${main.colors.border.color}}`);
      style.sheet.insertRule(`#line-4 {background: ${main.colors.border.color}}`);
      style.sheet.insertRule(`#line-5 {background: ${main.colors.border.color}}`);
    }

    style.sheet.insertRule(background);
    style.sheet.insertRule(foreground);
    style.sheet.insertRule(inputBackground);
    style.sheet.insertRule(inputForeground);
    style.sheet.insertRule(outputColor);
    style.sheet.insertRule(preHost);
    style.sheet.insertRule(host);
    style.sheet.insertRule(preUser);
    style.sheet.insertRule(user);
    style.sheet.insertRule(prompt);
    style.sheet.insertRule(banner);
    style.sheet.insertRule(link);
    style.sheet.insertRule(linkHighlight);
    style.sheet.insertRule(linkTextHighlight);
    style.sheet.insertRule(commandHighlight);
    style.sheet.insertRule(keys);
  }, []);
}
