+++
date = '2024-08-07'
draft = false
title = "YouTube Music iOS Scrobbling: Part 2"
+++

I had wrapped up the last post about this ([YouTube Music Scrobbling on iOS](https://blog.aspy.dev/youtube-music-scrobbling-on-ios/)) suggesting [FoxxMD/multi-scrobbler](https://github.com/FoxxMD/multi-scrobbler). While this is a great tool, with YouTube Music specifically it had a few issues due to how the YTM API works. If you are interested, you can read the issues, [#156](https://github.com/FoxxMD/multi-scrobbler/issues/156) and [#158](https://github.com/FoxxMD/multi-scrobbler/issues/158). The first being songs are sometimes scrobbled multiple times to Last.fm, the second issue being YTM invalidating the token every 30 minutes or so.

So now what?

## The Solution

I ended up commissioning my friend [Mario](https://github.com/marioparaschiv) to make a tweak for the iOS app that can be loaded with side-loading or via a jailbreak.

<https://github.com/marioparaschiv/lastfm-yt-music>

However, I also have my fork of it that adds a dockerfile to build it, which will net consistent results regardless of your system's configuration, and without the need to download any SDKs.

<https://github.com/someaspy/lastfm-yt-music>

In both cases, it is quite easy to do. I've written the readme file for both to be easy to follow, so I will skip detailing it and just suggest you follow the readme on the repository.

Additionally, since this is only a tweak you need the original .ipa file to inject it into. While there are several websites that host .ipa files for various apps, ~~I host YTM .ipa files I pull from my jailbroken iPhone 8 at ipa.aspy.dev/youtube_music/stable/~~ (*Dead 2/26/26*)

You can also pull your own using [Frida](https://frida.re/), but I believe a jailbroken device is required to extract `.ipa` files.
