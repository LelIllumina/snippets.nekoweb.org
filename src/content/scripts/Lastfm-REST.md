---
title: Last.fm Widget with REST API
author: max
description: 'Last.fm "now listening" widget using Bianca Rosa''s REST API.'
categories: [lastfm, widget]
edited: false
source: https://maxpixels.moe/resources/lastfm-widget/
---

Using Last.fm's API, this widget tracks what song you are currently listening to and displays it on your site.

> [!NOTE] Credits:
> Original code by [Laura](https://laura.nekoweb.org/) with her permission.
>
> Original, Original script by [Bianca Rosa](https://github.com/biancarosa/lastfm-last-played)

**Important:**

This script assumes you have an HTML element with an id of listening.

All you have to do after [importing](/FAQ/importing/) is to replace `yourusernamehere` with your last.fm username.

```javascript
// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)

const USERNAME = "yourusernamehere"; // Put your LastFM username here
const BASE_URL = `https://lastfm-last-played.biancarosa.com.br/${USERNAME}/latest-song`;

const getTrack = async () => {
  const request = await fetch(BASE_URL);
  const json = await request.json();
  let status;

  let isPlaying = json.track["@attr"]?.nowplaying || false;

  if (!isPlaying) {
    // Trigger if a song isn't playing
    return;
  } else {
    // Trigger if a song is playing
  }

  // Values:
  // COVER IMAGE: json.track.image[1]['#text']
  // TITLE: json.track.name
  // ARTIST: json.track.artist['#text']

  document.getElementById("listening").innerHTML = `
    <img src="${json.track.image[1]["#text"]}">
    <div id="trackInfo">
    <h3 id="trackName">${json.track.name}</h3>
    <p id="artistName">${json.track.artist["#text"]}</p>
    </div>
    `;
};

getTrack();
setInterval(() => {
  getTrack();
}, 10000);
```
