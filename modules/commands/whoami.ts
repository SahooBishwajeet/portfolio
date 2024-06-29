const whoamiObj = {
  message: [
    [
      "In the kaleidoscope of existence,",
      "I am but a reflection questioning the enigma - ",
    ],
    [
      "Amidst cosmic whispers,",
      "I navigate the maze of self-discovery,",
      "echoing the eternal refrain - ",
    ],
    [
      "In the symphony of life,",
      "I am a note inquiring its own melody,",
      "harmonizing with the universal query - ",
    ],
    [
      "As stardust contemplating its journey,",
      "I ponder the cosmic query,",
      "silently asking - ",
    ],
    [
      "In the tapestry of reality,",
      "I am the thread of self-inquiry,",
      "weaving through the eternal question - ",
    ],
    [
      "In the vast expanse of the universe,",
      "I am a seeker of truth,",
      "questioning the mysteries of existence - ",
    ],
    [
      "Amidst the cosmic dance,",
      "I am a curious observer,",
      "seeking answers to the unknown - ",
    ],
    [
      "In the realm of possibilities,",
      "I am an explorer of consciousness,",
      "unraveling the secrets of being - ",
    ],
    [
      "As a wanderer in the cosmic labyrinth,",
      "I question the nature of reality,",
      "seeking enlightenment - ",
    ],
    [
      "In the symphony of existence,",
      "I am a melody seeking harmony,",
      "embracing the eternal question - ",
    ],
  ],
};

export const createWhoami = (): string[] => {
  const whoami: string[] = [];
  const r = Math.floor(Math.random() * whoamiObj.message.length);
  whoami.push("<br>");

  whoamiObj.message[r].forEach((ele, idx) => {
    if (idx === whoamiObj.message[r].length - 1) {
      ele += "<span class='command'>Who am I?</span>";
    }
    whoami.push(ele);
  });

  whoami.push("<br>");

  return whoami;
};
