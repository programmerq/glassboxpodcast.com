const RSS_URL = `https://glassboxpodcast.libsyn.com/rss`;

fetch(RSS_URL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
  .then(data => {
    console.log(data);
    const items = Array.prototype.slice.apply(data.querySelectorAll("item"));
    let html = `<ul class=rss-items>`;
    items.slice(0,3).forEach(el => {
      html += `<li>
          <a href='${el.querySelector("link").getInnerHTML().replace("<![CDATA[", "").replace("]]>", "")}' target="_blank" rel="noopener">${el.querySelector("title").innerHTML}</a>
<div>${el.querySelector("description").getInnerHTML().replace("<![CDATA[", "").replace("]]>", "").replaceAll("<p> </p>","")}</div></li>`;
    });
    document.getElementById("episodelist").innerHTML = html;
  });
