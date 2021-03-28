game.splash("Today we will calculate the area of a trapezoid")
let Length = game.askForNumber("Enter the length in cm:")
let Width = game.askForNumber("Enter the width in cm:")
let Height = game.askForNumber("Enter the height in cm:")
let Area = (Length + Width) / 2 * Height
game.splash("The area of the rectangle with length " + Length + "cm, width " + Width + "cm and height " + Height + "cm is " + Area + "cm squared.")
