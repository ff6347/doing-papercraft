There are several different workflows to create data the laser can read. We will concentrate for now on using Blender with Autodesks 123DMake. There are other applications that can produce similar results.  

### Workflow 123DMake  

This is the most straight forward way. There is no knowledge of programming needed and all the tools used are open source and free except for Adobe Illustrator what can be substituted with Inkscape. The learning curve for Blender can be a bit steep but there are tons of good tutorials out there. Take a look at the [Links](links/) for some external references about it.  

- Blender (modeling) ⇒ Export Wavefront (obj) or Binary/ASCII STL (stl) 
- 123DMake (unfolding) ⇒ Export PDF or EPS  
- Illustrator/Inkscape (clean up) ⇒ Export DXF R14   

### Workflow Processing  

Using Processing to create 3D data can be a bit tricky. You will need some knowledge of programming. Also creating free forms is a bit tricky when you don't use a decent 3D library. We won't go into depth on this one. There are two sample sketches provided that show the usage of the OBJExport library to get some 3D data output but it only scratches the surface. Any contribution is welcome.  

- Processing ⇒ Export OBJ
- Blender (clean up) ⇒ Export Wavefront (obj) or Binary/ASCII STL (stl)
- 123DMake (unfolding) ⇒ Export PDF or EPS  
- Illustrator/Inkscape (clean up) ⇒ Export DXF R14  

### Workflow Paperkura  

Paperkura is paid application dedicated to create plans for paper models. Explore at will.  

- Blender (modeling) ⇒ Export Metasequoia (mqo), Wavefront (obj), AutoCAD 3D (dxf), 3DS Max (3ds), Lightwave (lwo), Binary/ASCII STL (stl), Google Earth4 (kml, kmz), Collada (dae)
- Paperkura ⇒ Export PDF/EPS 
- Illustrator/Inkscape (clean up) ⇒ Export DXF R14 (Illustrator/Inkscape)  

### Workflow dxf2papercraft  

This is the hackers way to do that. dxf2papercraft is a command line tool that converts 3D models to 2D plans. We managed to run it in a vagrant box. A sample how to run it is provided.  

- Blender (modeling) ⇒  AutoCAD 3D (dxf)
- dxf2papercraft ⇒ Export 2D DXF
- OpenOffice/Libre Office ⇒ Export PDF
- Illustrator/Inkscape (clean up) ⇒ Export DXF R14 (Illustrator/Inkscape)  

Feel free to contribute any additional information about your workflow on the [issues of this repo](https://github.com/FH-Potsdam/doing-papercraft/issues).  
