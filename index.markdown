---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
---

<!--
<div class="hero-image" style='background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("GBP website cover.png"); height: 30em; background-position: center; background-repeat: no-repeat; background-size: cover; position: relative;'>
  <div class="hero-text" style='text-align: center; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); color: white; '>
    <h2>A PEEK INSIDE DEEP MORMON DOCTRINE & CULTURE</h2>
    <p>Host - Bryce Blankenagel</p>
    <p>Co-host - Shannon Grover</p>
  </div>
</div>
-->

<script>
  window.podcastData = {"title":"The Glassbox Podcast","subtitle":"Skepticize Everything!","description":"Glass Box Podcast takes a dive into a plethora of topics in and out of Mormonism. We start with a motivational, then headlines centered around the Mormon Church, recommend and review a TV show or movie that you NEED to check out, before we \"unbox\" deep Mormon doctrine. Sometimes we have a guest interview, or Mormon Leaks segment. Finally, we wrap up with a heartwarming headline you may have missed in all the chaos of current events. Hopefully we'll leave you feeling like the world isn't actually on fire in spite of what other media may have you believe.","cover":"GBPUpdate-small-res.jpg","feeds":[{"type":"audio","format":"mp3","url":"http://glassboxpodcast.libsyn.com/rss"}]}
</script>
<script class="podlove-subscribe-button" src="https://cdn.podlove.org/subscribe-button/javascripts/app.js" data-language="en" data-size="medium" data-json-data="podcastData" data-color="#f6b647"></script>
<noscript><a href="https://glassboxpodcast.libsyn.com/rss">Subscribe to feed</a></noscript>

<div class="hero-image" style='background-image: url("GBP website cover.png"); height: 30em'></div>

<!-- ![Glassbox](GBP website cover.png){} -->

<div class="patreon_section"  markdown=1>

## We're on Patreon

Become one of our faithful followers and receive new episodes first.


[<span class="wsite-button-inner">SUPPORT US</span>](https://www.patreon.com/GlassBoxPod){: .wsite-button}

PLUS exclusive **bonus** content, like **outtakes**, special episodes and shoutouts.

</div>


## Buy a t-shirt and a mug so people know you're a fan of the show!
{: style="text-align:center;"}

<div class="row">
  <div class="column3" markdown="1">

![Glassbox](gbp_shirt1.jpg){:width="200px" style="padding-right:10px;"}
<p>THE GLASS BOX PODCAST</p>
[<span class="wsite-button-inner">BUY THIS SHIRT</span>](https://exmomerch.creator-spring.com/listing/glass-box-podcast?product=2&variation=576&size=279){: .wsite-button}

  </div>
  <div class="column3" markdown="1">

![Skepticize Everything Mug](gbp_mug1.jpg){:width="200px" style="padding-right:10px;"}
<p>SKEPTICIZE EVERYTHING</p>
[<span class="wsite-button-inner">BUY THIS MUG</span>](https://exmomerch.creator-spring.com/listing/skepticize-everything-glass-bo?product=658){: .wsite-button}

  </div>
  <div class="column3" markdown="1">

![Glassbox](gbp_shirt2.jpg){:width="200px" style="padding-right:10px;"}
<p>NAKED MORMONISM</p>
[<span class="wsite-button-inner">BUY THIS SHIRT</span>](https://exmomerch.creator-spring.com/listing/wear-the-truth-exmormon-mercha?product=2&variation=568&size=279){: .wsite-button}

  </div>
</div>


## VISITORS WELCOME

<div class="row">
  <div class="column2" markdown="1">

![Picture](GBPUpdate-full-res.png){:width="200px" style="padding-right:10px;"}

#### A little about the show

Bryce & Shannon team up to take on headlines in and out of Mormonism to see
what slipped through the cracks. We start with a quote that could be
inspirational, sarcastic, or even funny, depending on the topic, then we move
on to the main segment, where we usually do a deep dive into the topic to see
what slipped through the cracks. Occasionally we have an interview where we can
talk to interesting people. Then we move intoMeia of Great Price and either
deep dive into different Mormon books or talk about some interesting or
pertinent media. And we finish up with a positive news headline to show you
that the world isn't always on fire. Sit down and have a listen! We have a lot
of fun.
{: .left}

  </div>
  <div class="column2" markdown="1">

![Picture](Objective.jpg){:width="200px" style="padding-right:10px;"}

#### Objective

The Church of Jesus Christ of Latter-day Saints (Mormonism) exerts a
stranglehold on the lives of millions of people worldwide. This isn’t your
average talking heads current events podcast, nor is it an Ex-Mormon podcast.
Instead, we contextualize subject matter to view modern issues in proper
historical context, often from the Mormon angle. Drawing on decades of personal
experience and research, Shannon and Bryce will help you process church
history, dogma, and (cult)ure, gain perspective on a litany of modern issues,
and appreciate a critical viewpoint in all its beauty. We hope this journey
will help you gain control over your own life. Skepticize everything, folks!
{: .left}

  </div>
</div>

**Be sure to listen to ["Episode
0"](https://glassboxpodcast.libsyn.com/ep-0-unboxing-the-glass-box-podcast-listen-first)
to get an idea of what you can expect when you hit the ["subscribe"](https://glassboxpodcast.libsyn.com/rss) button!**

## Episodes

<div class=rss-box markdown=1>

Glass Box Podcast
{: .rss-title}

<div id=episodelist />
<script>
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
          <a href="${el.querySelector("link").innerText}" target="_blank" rel="noopener">${el.querySelector("title").innerHTML}</a>
<div>${el.querySelector("description").getInnerHTML().replace("]]>", "")}</div></li>`;
    });
    //document.getElementById("episodelist").insertAdjacentHTML("beforeend", html);
    document.getElementById("episodelist").innerHTML = html;
  });
</script>
</div>

<noscript><iframe iframebody="0" width="100%" height="600px" style="border:0px;" src="https://glassboxpodcast.libsyn.com/page/1/size/4" title="episodes"></noscript>

## Subscribe

TODO: do we want to keep the email list signup form?

