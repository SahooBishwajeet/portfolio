const createDefault = (): string[] => {
  const defaultMsgArr = [
    "<br>",
    "Unknown Command",
    "Type <span class='command'>'help'</span> to get started.",
    "<br>",
  ];

  const defaultMsg: string[] = [];

  defaultMsgArr.forEach((ele) => {
    defaultMsg.push(ele);
  });

  return defaultMsg;
};

export const DEFAULT = createDefault();
