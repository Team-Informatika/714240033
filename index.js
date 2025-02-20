import { renderHTML, setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

renderHTML('kartu', 'content/render.html', renderKartu);

function renderKartu() {
  getJSON("https://t.if.co.id/json/kucingabu.json", "null", "null", responseFunction);
}

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);
  const imageSrc = response.data.card.image.src;
  const imageHTML = `<img src="${imageSrc}" alt="PPFormal">`;
  setInner('image', imageHTML);
  setInner('name', response.data.card.name);
  setInner('username', response.data.card.username);
  setInner('description', response.data.card.description);
  setInner('rate', response.data.card.rate);
  const socialcon = document.getElementById('social')
  let social = response.data.card.social_links;
  social.forEach((href) => {
    const socialcontainer = document.createElement("a")
    socialcontainer.
  })