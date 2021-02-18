## Create a custom JS to use elsewhere in LibGuides

- https://muohio.libapps.com/libguides/lookfeel.php?action=1
- the most current version of that file should be included in this repo as: `custom-js-css.html`

## Add visible email address to a profile box

1. Go to: https://muohio.libapps.com/libapps/accounts.php
2. Click on the gear icon for an individual user (right side of their entry)
3. Click on the "profile box" tab on their page
4. Code from the `email-link-widget-driver.js` file should be placed in the "other widget code" section inside a `<script></script>` tag.
5. Update the profileId setting to the user's profileId (note: not the same as their user ID -- see notes in the file)
6. NOTE: You won't see a change on the user's Manage Account page, but the address will appear on their public pages (this widget relies on code embedded in the page header.)

### Alternative email address option

The `email-link-widget.js` file has a standalone version of the script not reliant on the page header, but if there's ever a need to change the script, it will have to be changed separately from the centralized version of the file.
