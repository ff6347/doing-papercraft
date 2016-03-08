---
layout: default
---

doing papercraft
================

## Introduction  

This repository is a write-down for an upcoming workshop @ the University of Applied Sciences Potsdam (Germany). We will explore the minimal basics of the 3D application Blender to create some primitive shapes. These shapes will then be unfolded for laser cutting. It is a walkthrough of some possible workflows. We will focus on using Blender and exporting 3D data from it. If you already know other 3D applications you can skip Blender and move on to the [Unfolding](#unfolding) section. _This is still work in progress, there might be_ 🐛_,_ 🐉 _and_ 👾_._

## Prerequisites  

- a computer
- a 3 button mouse
- Blender (or another 3D application if you already know how to model in 3D)
- 123DMake
- Processing (optional)



create unfolded data

1. export from Blender
2. 123DMake (cross platform)
3. Paperkura (Win 38$)
4. dxf2papercraft commandline tool (open source Win & Linux)  


### Workflow 1. 123DMake  

3D application (modeling) > Export Wavefront (obj) or Binary/ASCII STL (stl) > 123DMake > Export PDF or EPS > 2D application (clean up) > Export DXF R14 (Illustrator/Inkscape)  

### Workflow 2. Paperkura  

3D application (modeling) > Export Metasequoia (mqo), Wavefront (obj), AutoCAD 3D (dxf), 3DS Max (3ds), Lightwave (lwo), Binary/ASCII STL (stl), Google Earth4 (kml, kmz), Collada (dae) > Paperkura > Export PDF/EPS > 2D application (clean up) > Export DXF R14 (Illustrator/Inkscape)  

[www.tamasoft.co.jp/pepakura-en](http://www.tamasoft.co.jp/pepakura-en/productinfo/index.html)
### Workflow 3. dxf2papercraft  

3D application (modeling) >  AutoCAD 3D (dxf) > dxf2papercraft > Export 2D DXF > OpenOffice/Libre Office > Export PDF > 2D application (clean up) > Export DXF R14 (Illustrator/Inkscape)  

- [dxf2papercraft.sourceforge.net](http://dxf2papercraft.sourceforge.net/)  

### Workflow 4. Processing  

Processing > Export OBJ > 3D Application (clean up) > Export Wavefront (obj) or Binary/ASCII STL (stl) > WF 1, 2, 3

---


{% include sidebar.html %}

### Misc Links  

##### References

- [www.blender.org/manual](https://www.blender.org/manual/)

##### Tutorials

__Blender__  

- [Blender Basics - 00 - Introduction](https://www.youtube.com/watch?v=zOvawDOWqC4) and following …

#####Other experimental papercraft tools  

- [https://trmm.net/Unfolding_STL](https://trmm.net/Unfolding_STL)