---
title: "Lastfm Widget with Websockets"
author: "lel"
categories: ["lastfm"]
edited: false
scriptSource: https://lel.nekoweb.org/nekofm/
---

> [!NOTE] Credit
> Websocket server is hosted by [Tepiloxtl](https://tepiloxtl.net/scrobbled/).

After [importing](/FAQ/importing/), replace `yourusernamehere` with your last.fm username.

```javascript
(async function () {
  return new Promise(function (resolve, reject) {
    const username = "yourusernamehere"; // Replace this

    const socket = new WebSocket(
      `wss://scrobbled.tepiloxtl.net/ws/get_last_track/${username}`,
    );

    socket.onopen = function () {
      resolve(socket);
    };
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      const track = data.recenttracks.track[0];

      const status = document.getElementById("lastfm-status");

      // Check user's online status
      status.textContent =
        track.nowplaying === "false" ? "Last Played" : "Now Playing";

      // Check if Album Cover is NSFW
      let coverImgUrl = track.album.isnsfw
        ? "https://lel.nekoweb.org/assets/images/NekoFM/NSFWCOVER.png" //!
        : track.image[2]["#text"];

      // Check if Album Cover isnt available
      if (
        coverImgUrl ===
        "https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
      ) {
        coverImgUrl = "https://lel.nekoweb.org/assets/images/NekoFM/NoArt.svg"; //!
      }

      // Track elements
      const userDiv = document.getElementById("songBox");
      const coverImgEl = userDiv.querySelector("#trackCover");
      const trackNameEl = userDiv.querySelector("#trackName");
      const artistNameEl = userDiv.querySelector("#artistName");

      trackNameEl.textContent = track.name;
      artistNameEl.textContent = "by " + track.artist.name;
      coverImgEl.src =
        coverImgUrl || "https://lel.nekoweb.org/assets/images/NekoFM/NoArt.svg"; //!
    };

    socket.onerror = function (error) {
      reject(error);
    };
  });
})();
```

Just add this HTML somewhere on your page

```HTML
    <div id="songBox">
        <img
            id="trackCover"
            src="https://lel.nekoweb.org/assets/images/NekoFM/loading.png"
            alt=""
        /> <!-- ! -->
        <div id="trackInfo">
            <h2 id="trackName">Loading...</h2>
            <p id="artistName">Loading...</p>
    </div>
```

> [!TIP] Change images
> You can change the images used in the code to your liking. Just replace the URLs (that ive marked with comments that look like `//!`) with your own images.
>
> By default they link to my website, which uses the ones used on NekoFM
