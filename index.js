import { renderHTML,setInner } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";
import { getJSON } from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";

renderHTML('content', 'content/utama.html');

getJSON("https://t.if.co.id/json/kucingabu.json", null, null, responseFunction);

function responseFunction(response) {
  console.log("HTTP Status:", response.status);
  console.log("Response Data:", response.data);

  if (response.status === 200) {
    const data = response.data;
    const content = `
        <p>Deskripsi: ${data.deskripsi}</p>
    `;

    setInner("kartu", content);
  } else {
    setInner("kartu", `<p>Error: Error Coy.</p>`);
  }
}
