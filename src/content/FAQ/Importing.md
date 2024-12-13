---
title: "Importing Javascript code"
author: lel
description: "Info on how to import Javascript snippets."
updated: 2024-03-12
---

Importing JavaScript snippets onto your site is easy!

Primarily there are two ways to do this, by using a \<script>\</script> tag or by importing it from another file

- [**Method 1:**](#inlining) Using a \<script>\</script> tag
- [**Method 2:**](#importing) Importing from another file

## Inlining

Using script tags that hold JavaScript, or inlining, done by adding a `<script>`</`script>` tag with the code inside it. For example:

```html
<script>
  /* The code you copied, pasted here
  and edited to work for you site */
</script>
```

This should be placed in the `<head>` or `<body>` of your HTML document. The `<head>` is read before and body is rendered but may not work well for some scripts, specifically ones that immediately edit your HTML (most scripts). Alternatively you can place it in the body, just before the closing `</body>` tag. Like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Your site page</title>
    <script>
      /* Some code */
    </script>
  </head>
  <body>
    <!-- Your HTML here -->
    <script>
      /* Some code */
    </script>
  </body>
</html>
```

With this method your script is directly in your HTML file, and will run in `<head>` and after everything has loaded.

## Importing

Importing works similarly to inlining, but instead of putting the code in the HTML, you put it in a separate file and then link to it in your HTML. This is useful if you want to keep your JavaScript separate for performance, manageability or just preference.

You can do this like so:

```html
<script src="path/to/your/file" />
<!-- the "/>" at the end is optional -->
```

Where "path/to/your/file" is your JavaScript file. This uses [relative or absolute URLs](https://stackoverflow.com/questions/2005079/absolute-vs-relative-urls) this just like inline script tags, can be placed anywhere in `<head>` or `<body>` and will execute at that point, so it has the same placement issues as inlining. An example:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Your site page</title>
    <script src="path/to/your/file" />
  </head>
  <body>
    <!-- Your HTML here -->
    <script src="path/to/some/file" />
  </body>
</html>
```

With this method your JavaScript will stay separate and load when the browser reaches the script tags.
