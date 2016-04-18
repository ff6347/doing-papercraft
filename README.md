doing papercraft
================

[![Join the chat at https://gitter.im/FH-Potsdam/doing-papercraft](https://badges.gitter.im/FH-Potsdam/doing-papercraft.svg)](https://gitter.im/FH-Potsdam/doing-papercraft?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Introduction  

This repository is a write-down for an upcoming workshop @ the University of Applied Sciences Potsdam (Germany). We will explore the minimal basics of the 3D application Blender to create some primitive shapes. These shapes will then be unfolded for laser cutting. It is a walkthrough of some possible workflows. We will focus on using Blender and exporting 3D data from it. If you already know other 3D applications you can skip Blender and move on to the [Unfolding](#unfolding) section. _This is still work in progress, there might be_ 🐛_,_ 🐉 _and_ 👾_._

See the [docs here](http://fh-potsdam.github.io/doing-papercraft/). Build with [mkdocs](http://www.mkdocs.org/).  

## Contribution & Issues

Please file any issues [here](https://github.com/FH-Potsdam/doing-papercraft/issues) on GitHub. Contributions and Pull Requests are welcome.  

## Creating gifs

The gifs in these docs are created by transfomring a screenrecord with ffmpeg to a sequence. This sequence then gets transformed with ImageMagick to a gif. ffmpeg and ImageMagick can be installde using [homebrew](https://brew.sh).  

Install brew like discribed on their site. Then run:

    brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
    brew install imagemagick

You should be good to go. 

    ffmpeg -i blender-ui.mp4 -r 20 -vcodec ppm  -s800x600 seq/out%05d.png
    convert -layers Optimize seq/out*.png ../images/blender-ui.gif


Copyright (c) 2016 Fabian Moron Zirfas & University of Applied Sciences Potsdam (Germany)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.  

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.  