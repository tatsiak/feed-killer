const youtubeSelectors = [
  'ytd-browse[page-subtype*="home"]', // home page recommended
  "#related", // sidebar recommeded
  "a[href='/feed/trending']", // trending button
  ".ytp-ce-element.ytp-ce-playlist", // end of video - next playlist to watch
  ".ytp-ce-element.ytp-ce-video", // end of video - next videos to watch
  ".ytp-ce-element.ytp-ce-channel", // end of video - channel link
  ".ytp-ce-element.ytp-ce-website", // end of video - channel website link
  ".annotation.annotation-type-custom.iv-branding" // end of video - more channel links
];

const linkedinSelectors = ["div.core-rail"];

let lastObserveTime = 0;

const handler = () => {
  if (new Date() - lastObserveTime > 300) {
    lastObserveTime = new Date();
    const selectors = youtubeSelectors.concat(linkedinSelectors);
    const elements = document.querySelectorAll(selectors.join(", "));
    elements.forEach(element => {
      element.setAttribute("style", "display: none;");
    });
  }
};

const observer = new MutationObserver(handler);
observer.observe(document.documentElement, {
  attributes: true,
  childList: true,
  subtree: true
});
