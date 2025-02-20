import {
  renderHTML,
  setInner,
} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

renderHTML("kartu", "content/render.html", renderKartu);

function renderKartu() {
  getJSON(
    "https://t.if.co.id/json/kucingabu.json",
    "null",
    "null",
    responseFunction
  );
}

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);
  const imageSrc = response.data.card.image.src;
  const imageHTML = `<img src="${imageSrc}" alt="PPFormal">`;
  setInner("image", imageHTML);
  setInner("name", response.data.card.name);
  setInner("username", response.data.card.username);
  setInner("description", response.data.card.description);
  setInner("rate", response.data.card.rate);
  
  let apaja;
  apaja = response.data.card.social_links;
  const container = document.getElementById("social_links");
  // Melakukan perulangan untuk setiap item dalam data
  apaja.forEach((social) => {
    // Membuat elemen div untuk setiap item
    const listsocial = document.createElement("a");
    listsocial.href = social.link;
    const classsocial = social.platform;
    listsocial.classList.add(classsocial);

    // Membuat elemen icon
    const iconsocial = document.createElement("i");
    const classicon = social.logo.split(" "); // Pecah berdasarkan spasi
    classicon.forEach((cls) => iconsocial.classList.add(cls)); // Tambahkan satu per satu
    
    // Menambahkan icon, judul, dan deskripsi
    listsocial.appendChild(iconsocial);

    // Menambahkan layananItem ke container
    container.appendChild(listsocial);
    console.log(listsocial);
    console.log(iconsocial);
  });

}
