![Header]
(https://i.imgur.com/Z7w3RJB.png)
#Instantiating Animated Objects from Maya (mice) in Random Locations in our Terrain.
######By Morgan Maslow and Jennie Anisimov

##The Mouse
![Mouse]
(https://i.imgur.com/ZTU6qxt.png)
First we had to create our enemies. We created the mice and animations in maya and imported them straight into Unity. By looping the animation and dragging it onto our model in the scene we were able to have our mouse move. However, since the mice are randomly spawning into the scene we can not use this method of attaching animation and are currently seeking other methods. For this project, our main focus was figuring out how to randomly spawn them into the scene. 

##First Attempt
This code showed us how to instantiate objects using C#, which made understanding why this code worked quite difficult, but also gave us a sense of the first steps we needed to take to make the objects show up the way we needed them to.

######Sample Code
![Code 1]
(http://i.imgur.com/K8rof9B.png)

######Our Code
![Our Code 1]
(http://i.imgur.com/YP7f0Y7.png)
This was the first code that I tried to instantiate the mice into our game. The assets were already inside Unity and able to be viewed in the project. When I hit Play in the scene we were using at the time, the mouse would show up directly in front of the camera and just sit there, not running the animation. The problem arose when the minPos and maxPos variables could not be read in Unity for whatever reason. So we ended up taking some variables from this code, but altering the function to create one titled "SpawnMouse". We also replaced the minPos and maxPos with "var mouseX" and "var mouseZ"

##Second Attempt
After a lot of research and trial and error, we ended up finding a similar variation of code for random instantiation.

######Sample Code
![Code 2]
(http://i.imgur.com/dOeyesI.png)

His site was the first to create the spawn system that we wanted and after altering the details used to fit our own objects and assets, we were able to spawn the mice in Unity once the Play button was pressed. 

######Our Code
![Our Code 2]
(http://i.imgur.com/uuCLFIF.png)

After playing around with the different variables and their values, we figured out which axis we needed to change to make the mice spawn where we needed them to. 

![Lots o' Mice]
(http://i.imgur.com/mg0CYdQ.png)


After changing the mouseX, Y, and Z values and placing a momentary terrain, the mice spawned accurately. The next step is to insert our Maya terrain and set the values accordingly.
