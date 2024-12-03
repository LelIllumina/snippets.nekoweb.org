---
title: "Nekoweb Stats Widget"
author: "max"
categories: ["Nekoweb"]
edited: false
scriptSource: https://maxpixels.moe/resources/nekoweb-stats/
---

Using the Nekoweb API, this script grabs data about your website, which include your site's:

- Creation Date
- Last Update Date
- Views
- Followers

This script assumes you have four HTML elements with the ids of created, updated, visitors, and followers. For example:

```html
<div>
  <h2>Stats:</h2>
  <p id="created"><em>Created</em>: Loading..</p>
  <p id="updated"><em>Updated</em>: Loading..</p>
  <p id="visitors"><em>Views</em>: Loading..</p>
  <p id="followers"><em>Followers</em>: Loading..</p>
  <!-- All the "Loading..."s will get overwritten by the script -->
</div>
```

After [importing](/FAQ/importing/), In the script just replace `yourusernamehere` with your Nekoweb username.

```javascript
// this script is under the MIT license (https://max.nekoweb.org/resources/license.txt)

let username = "yourusernamehere"; // <<<--- Insert your username here!

(async () => {
  try {
    const request = await fetch(
      `https://nekoweb.org/api/site/info/${username}`,
    );
    const json = await request.json();

    const updated = new Date(json.updated_at).toLocaleDateString(); // Formats Last Updated text
    const created = new Date(json.created_at).toLocaleDateString(); // Formats Creation Date text

    if (document.getElementById("created"))
      document.getElementById("created").innerHTML =
        `<em>Created</em>: ${created}`;
    if (document.getElementById("updated"))
      document.getElementById("updated").innerHTML =
        `<em>Updated</em>: ${updated}`;
    if (document.getElementById("visitors"))
      document.getElementById("visitors").innerHTML =
        `<em>Visits</em>: ${json.views}`;
    if (document.getElementById("followers"))
      document.getElementById("followers").innerHTML =
        `<em>Followers</em>: ${json.followers}`;
  } catch (error) {
    console.error(error);
    // If you wish to insert some fallback here, you may do so!
  }
})();
```
