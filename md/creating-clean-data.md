## Cleaning Plans in Vector Editor  

After modeling our object in Blender and exporting it with the [Paper Model Add-on](paper-model-add-on) we have a .svg file. If we did the additional step with 123DMake we have a .eps file. Both can be edited in vector editors. For the best result we need to clean up the data a bit more in vector editing application. We will use Adobe Illustrator (Mac, Win) for this. If you don't habe a license for illustrator you can also use Inkscape (Cross Platform) or Affinity Designer (Mac).  

#### Using Adobe Illustrator  

Open your svg or eps, set the units of the document to mm (⌘ + ⇧ + p) and set your artboard size to match the size of your material (can be accesed through the Artboard tool or directly from the document settings). To see what the laser will use you should take a look at the "Path View". You can switch back and forth between the visual view and the path view by hitting ⌘ + y on your keyboard. 

##### Usage Hints  

- Using the path view is often much simpler
- you can select objects by color using the selection menue

##### Plans from 123DMake  

When you used 123DMake you can see you have the some numbers on the plan and, if not splitted into panels, also some folding marks. We can cut those with a low setting to have some visal hints where to fold our model. To do so you need to give them a different color then the outer form we want to cut out. The laser cutter application will detect that and allow us to engrave them with lower power. Release all groups and compound paths if needed. Sort them by color. Remove all unwanted data.  
One important step is to remove the most outer path. This is an outer bound created when exporting the .eps. If we don't do this it will be cutted by the laser. Your final plans should look like the pictures below.  

![images/illustrator-123dmake-normal-view.png](images/illustrator-123dmake-normal-view.png)  

![images/illustrator-123dmake-plan-pathview.png](images/illustrator-123dmake-plan-pathview.png)  

![images/illustrator-123dmake-split-panels-normal-view.png](images/illustrator-123dmake-split-panels-normal-view.png)  
![images/illustrator-123dmake-split-panels-path-view.png](images/illustrator-123dmake-split-panels-path-view.png)  

##### Plans from the Paper Model Add-on  


##### Using Inkscape  

### Export DXF  



