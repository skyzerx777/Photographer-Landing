import "./scss/style.scss";
import bootstrap from "bootstrap";

socialLinksHover(".icon_search");
socialLinksHover(".icon_vk");
socialLinksHover(".icon_facebook");
socialLinksHover(".icon_instagram");

function socialLinksHover(socialLink) {
  let classLink = socialLink.slice(1);
  document.addEventListener("DOMContentLoaded", () => {
    let link = document.querySelector(socialLink);
    link.addEventListener("mouseover", () => {
      link.classList.toggle(classLink + "-hovered");
    });
    link.addEventListener("mouseout", () => {
      link.classList.toggle(classLink + "-hovered");
    });
  });
}
