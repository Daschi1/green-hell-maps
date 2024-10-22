# green-hell-maps

### [Green Hell Maps](https://green-hell-maps.daschi.dev/)

Available for [Story Mode](https://green-hell-maps.daschi.dev/story-mode)
and [Spirits of Amazonia](https://green-hell-maps.daschi.dev/spirits-of-amazonia).

### Features

- **Three Interactive Maps:**
    - [Story Mode](https://green-hell-maps.daschi.dev/story-mode)
    - [Spirits of Amazonia](https://green-hell-maps.daschi.dev/spirits-of-amazonia)
    - [Comparison Map](https://green-hell-maps.daschi.dev/comparison): A blend of the Story Mode and
      Spirits of Amazonia maps, where you can
      configure the blend ratio for better comparison.

- **Mark Coordinates:** Left-click on any coordinate to mark it.

- **Shareable URLs:** Marked coordinates are automatically reflected in the URL, allowing you to
  share or save the URL to easily retrieve your coordinates later.

- **Coordinate Overlay Customization:**
    - Adjust the opacity of the coordinate overlay to suit your preference.
    - Toggle between always showing all coordinates or only displaying them on hover.

### Credits

Map design by [u/alex3omg](https://www.reddit.com/user/alex3omg/), originally
posted [here](https://www.reddit.com/r/GreenHell/comments/11miatv/green_hell_full_map_with_icons_spoilers_story_and/)
on [r/GreenHell](https://www.reddit.com/r/GreenHell/).  
Slightly modified to include coordinates on both sides of the maps.

[Green Hell](https://greenhell-game.com/) is a game developed
by [Creepy Jar](https://creepyjar.com/en/).

Created by [Daschi](https://github.com/Daschi1) with ♥ and
many [open-source projects](https://green-hell-maps.daschi.dev/licenses)!  
Source code available on [GitHub](https://github.com/Daschi1/green-hell-maps).

### Generate `licenses.json`

The command uses [license-checker](https://github.com/davglass/license-checker) to
generate `licenses.json`.

```shell
license-checker --customPath lc-checker-format.json --json --out static/licenses.json
```

### Current Deployment Command

```shell
docker run -d \
  --name green-hell-maps \
  --restart unless-stopped \
  -e ORIGIN=https://green-hell-maps.daschi.dev \
  ghcr.io/daschi1/green-hell-maps:1.2.0

docker network connect nginx green-hell-maps
```
