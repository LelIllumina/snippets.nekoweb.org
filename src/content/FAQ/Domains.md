---
title: "Joosh's Domain Tutorial"
description: "The Nekoweb official instructions can be confusing, and I see a lot of people in the Discord asking about this."
updated: 2024-10-13
source: https://domain.joo.sh/
---

> [!WARNING]
> I've seen lots of issues with custom domains using Squarespace. I suggest switching your nameserver to Cloudflare. It is free and there is a tutorial [here](https://developers.cloudflare.com/dns/zone-setups/full-setup/setup/)

This is my personal tutorial for all you Nekowebians out there! I would recommend watching the video at the bottom for a more thorough guide.

## Setup

1. Donate to Nekoweb to unlock custom domains.
2. Purchase a custom domain from a site like [Porkbun](https://porkbun.com).
3. Go to Nekoweb settings and under the `Add domain` section, type in your new domain, e.g. `joo.sh`
4. Leave the folder blank if your site is located in the root.
5. Select main if this is what you want your main domain to be. Your main domain is where your `[username].nekoweb.org` link will route to.
6. Click add.
7. Go to the DNS settings in your registrar.

8. For Porkbun:

   1. Go to the DNS settings and add a record.
   2. For `Type`, select `ALIAS - CNAME flattening record`.
   3. For `Host`, leave it blank for the root.
   4. For `Answer`, set it to `dns.nekoweb.org`.
   5. Click add.

9. For Cloudflare:

   1. Go to the DNS settings and add a record.
   2. For `Type`, select `CNAME`.
   3. For `Name`, type `@` for the root.
   4. For `Target`, set it to `dns.nekoweb.org`.
   5. Click save.

10. View the status in the Nekoweb settings to confirm it worked.
11. Done! Just wait for it to propagate and it'll be ready to go.

### Common Porkbun Errors

- Answer must be IPv4 Address

  Make sure you are selecting an ALIAS record.

- Another record type already exists for that host.

  Delete any other DNS records. If you have `pixie.porkbun.com`, you do not need it.

Sorry if you don't use either of these services, it's all I've used, and it's all I can help with. If your custom domain continues to not work after a few hours, contact us in the [discord](https://discord.gg/hvfHKyVS6b)!
