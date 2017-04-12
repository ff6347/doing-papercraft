Doing Papercraft
================

[![images/unfold.gif](images/unfold.gif)](images/unfold.gif)  

!!!note
    [123DMake was discontinued](http://www.123dapp.com/) and is now replaced by [Slicer for Fusion 360](https://apps.autodesk.com/FUSION/en/Detail/Index?id=8699194120463301363&os=Win64&appLang=en). It is in fact the same application. We will update the docs accordingly.  

## Introduction  

This document is a write-down for a workshop by [Fabian Morón Zirfas](https://github.com/fabiantheblind) @ [the University of Applied Sciences Potsdam (Germany)](http://www.fh-potsdam.de/) as part of the seminar ["Datenobjekte"](https://incom.org/workspace/6569) (data objects) by [Professor Boris Müller](https://incom.org/profil/99) (a.k.a [@borism](https://twitter.com/borism) on Twitter). We will explore the minimal basics of the 3D application Blender to create primitive shapes which will then be unfolded using 123DMake for laser cutting. _This is still work in progress, there might be_ 🐛_,_ 🐉 _and_ 👾_._  



## Prerequisites  

- a computer
- a 3 button mouse
- Blender (or another 3D application if you already know how to model in 3D)
- 123DMake 
- Vector Editor (Illustrator, Inkscape, Affinity Designer)  
- Processing  

!!!note
    Some of these are optional. Depending on which workflow you are going to use.  

## Used Abbreviation 

There are some abbreviation used throughout the docs. See the table below.  

| Abbreviation | Meaning              |
| :---         | :--                  |
| ^            | Ctrl                 |
| ⇧            | Shift                |
| ⌥            | Alt (Option)         |
| ⌘            | Command (Blumenkohl) |
| ⌫            | Delete (Backspace)   |
| ⇥            | Tabulator            |


## Source  

These docs are written by Fabian Morón Zirfas with ♥ using [mkdocs](http://www.mkdocs.org/) using the [readthedocs](https://readthedocs.org/) theme. See the source on [GitHub.](https://github.com/FH-Potsdam/doing-papercraft).  

## Contribution & Issues

Please file any issues [here](https://github.com/FH-Potsdam/doing-papercraft/issues) on GitHub. Contributions and Pull Requests are welcome. For quick questions you can also visit our gitter chat.  

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?style=flat-square)](https://gitter.im/FH-Potsdam/doing-papercraft)  

## Creating gifs

The gifs in these docs are created by transfomring a screenrecord with ffmpeg to a sequence. This sequence then gets transformed with ImageMagick to a gif. ffmpeg and ImageMagick can be installde using [homebrew](https://brew.sh).  

Install brew like discribed on their site. Then run:

    brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
    brew install imagemagick

You should be good to go. 

    ffmpeg -i blender-ui.mp4 -r 20 -vcodec ppm  -s800x600 seq/out%05d.png
    convert -layers Optimize seq/out*.png ../images/blender-ui.gif

