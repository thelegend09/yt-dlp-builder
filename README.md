# A command-builder for `yt-dlp`

I've tried many different software to download YouTube videos over the years. They all failed me. And that's why I bit the bullet and decided to use the ultimate YouTube download tool: [yt-dlp](https://github.com/yt-dlp/yt-dlp).

However, it can be confusing to remember the syntax of it, so I created this little utility to help me. It can help you too.

Note: I added pretty much only the functionalities I would use.

## Requirements

You must have this on your computer already:

- [yt-dlp](https://github.com/yt-dlp/yt-dlp/releases/tag/2023.12.30)
- [ffmpeg](https://ffmpeg.org/download.html)

If you use [chocolatey](https://chocolatey.org), you install both of them at once via this command:

```powershell
choco install ffmpeg yt-dlp
```

## Documentation

You can find all the information you could ever want or need in [`yt-dlp` officiel Github page](https://github.com/yt-dlp/yt-dlp/tree/2023.12.30?tab=readme-ov-file#usage-and-options).

## Styling

### Water.css

I used `water.css` to style this utility. I only customized a few things. It's really nice when you want to have something that looks good with very, very minimal effort. [Check it out here](https://watercss.netlify.app).

Pro-tip: If you do end up using `water.css`, make sure to add this to your CSS, otherwise a few things may look wonky.

```css
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
```

### Tippy.js

I love how easy it is to create tooltips with [tippy.js](https://atomiks.github.io/tippyjs/).

### Remixicon

[Remixicon.com](https://remixicon.com) is my favorite open source icon library.
