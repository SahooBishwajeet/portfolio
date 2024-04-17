import main from '../../main.json' assert {type: 'json'};

const createBanner = (): string[] => {
  const banner: string[] = [];

  banner.push("<br>")

  main.ascii.forEach((ele) => {
    let bannerString = "";

    // ASCII ART
    for (let i = 0; i < ele.length; i++) {
      if (ele[i] === " ") {
        bannerString += "&nbsp;";
      } else {
        bannerString += ele[i];
      }
    }

    let eleToPush = `<pre>${bannerString}</pre>`;

    banner.push(eleToPush);

  });

  banner.push("<br>");

  banner.push("Welcome To My Portfolio");
  banner.push("Type <span class='command'>'help'</span> for a list of all available commands.");
  banner.push(`Type <span class='command'>'repo'</span> to view the GitHub repository or click <a href='${main.repository}' target='_blank'>here</a>.`);

  banner.push("<br>");

  return banner;
}

export const BANNER = createBanner();