 Example of Screen Display: https://www.todayifoundout.com/wp-content/uploads/2013/08/pacman.jpg


Keep files organized (make multiple files for different functions if needed)



HTML 

-	Basic  h1 to showcase the title of the game
- Dont forget to Link the JavaScript files and the CSS file to the HTML head




CSS

-	Properly display default backgrounds and borders w/ personal customizations (Try to duplicate Pac Man setup)






JavaScript

- Gather Images needed for the game (Pink dot, Yellow dots, walls, Pac-man in all stages of the bite animation)

- Create a folder for the game as whole to help formn the display of the game

- Will involve creating functions For the  tiles & constrcutor

- Use an Array For the tile map. Assign the items to a value to make up the map 

-  forLoop used for the map and items on the map

- conditional statements (If/else) for map, for movements

- Set Intervals to update the screen

- Use functions to define different objects and images for pac-man then create an array to hold images

- add EventListeners

- Select the keys used to move pac-man and establish th directions through conditonal statement


- Provide Animations and roations for pac-man through functions, if statements, and defining different objects 

- Functions to return the text GameOver on the Screen 



HTML

Title: Use an H1 tag to display the title of the game inside of a div tag.

Display the Game Board: You the tag canvas with an Id of your choosing to be able to place your game on the canvas.

Link JavaScript to HTML: Link the main javascript file to the html page in between a script tag with src and type module for eveything to work.

Link Style Sheet: Link the style sheet to the html through a link tag


CSS

Style Canvas: Create a shadow box with measurements of your choosing

Style h1: align the h1 tag to the center and put color and font of your choosing

Style Body: Use flex to center the canvas on the page


JavaScript

Reference the context in JavaScript

Create a SetInerval to be able to refresh the screen with however much time in between to your liking

Create another JavaScript file for the game map to keep the codes organized and accessible

Export the map of the game from the game map file 

Import the map of the game into the initial game JavaScript file

Create an Array inside an array full of values and use the values to represent the image of your choice to create the board

Use the draw method to link the values to your images

BE CREATIVE: create your game board using the values in what ever pattern of your choosing

Use draw to loop and display the images on the canvas along with setting the sizing

Create a  Pacman Js file to work on pacman, Moving pacman file, and enemy file

Import Pacman Js file from the Gameboard Js and Export from the Pacman Js

Give pacman a constructor and define x, y, velocity, the game size, and the gameboard

Use a draw involving context to draw the pacman on the gameboard

Load all the images need for pacman (mouth closed, partially open, and wide open) & define them to a variable.

Use and array to be able to draw each image when needed

Decide which keys on the keyboard you want to use for the movement of pacman and involve the current and requested direction

Create If else statements to catch different scenarios when they happen throughout the game. 

Add a function for animation on pacman

Make sure you import and export the correct files to the Game board

Create different functions for wall collision, pacman eating the food, pacman eating the food to be able to eat the monsters

Everything that You want pacman to do, make sure you define it in the constructor of the pacman file.

Pacman has a lot of different responsibilities, it's your choice what you want it to do

Download any pictures you need for the monsters, pacman in all stages, and the different sounds when eating the food/monsters

Create different timmers to be able to control the movement of the monsters and when you want certain actions to occur (define them in the constructor, then create a function)


When working with canvas, make sure that each function is called in the draw method for it to show up in the game

Pacman needs to move, animate, rotate, eat food, and enemies

set forLoops for pacman and the enemies movement

Functions are needed when the game needs to Pause (at the beginning and end of the game )