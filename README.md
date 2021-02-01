# Ball Catching Game

## Project Summary

Code Institute Milestone Project 2 - Interactive Frontend Development.

The objective of this project is to build a coordination based game for people of all ages to enjoy.
The concept of the game is an alien attack of earth and the only thing standing between this and 
the people is the defender of earth. 
As the fireballs are dropped the defender must defend their position to stop them hitting earth.
This game requires users to be alert and respond to the fireballs dropping.
The users must adjust their position in order to hit the fireball. 
The user cannot let a fireball drop or a life is lost. 
The user gets a score for each catch maintained on a counter and visible to the user.

![Game Desktop Wireframe](/readme_images/am-I-responsive.PNG)

[View the live project here](https://tomdillane.github.io/MS2_Ball-Catch_Game/index.html) 

## UX

#### Strategy

The overall aim of this project is to create a coordination challenging game for users to enjoy. 
The game must be possible to lose, and also scores made available to the user along with lives left.

#### Scope

The site will include the game itself, with instructions on how to play, the ability to start the game,
lose the game, and track score. Aside from the game, the user will be able to contact the developer.

#### Structure

The website will be delivered on two pages, where the home will become the game on game initiation, and the contact page.

#### Skeleton

The navigation will be simple to allow contact with the developer and return to home without using the back button.
It must be intuitive in terms of instructions on how to play and buttons to initiate. 

#### Surface

The format of the site will follow function. Colors, functions and navigation will keep UX to the fore.  

#### User Stories

##### Site users

- As a player, I want to be able to play a game that is enjoyable and challenging.
- As a player, I want to have clear instructions on the controls and rules.
- As a player, I want to be able to control when the game starts.
- As a player, I want to be see my score as I go along. 
- As a player, I want to see my end score.
- As a player, I want the game to become more difficult as it progresses.
- As a player, I want to be able to contact the developer for details on this game and others.

##### Site Owner

-  As the owner, I want to be able to showcase my game.
-  As the owner, I want players to find it challenging so they play it again and again.
-  As the owner, I want players to be able to contact me with feedback.
-  As the owner, I want to garner followers on social media. 

#### Design

- The colors and images used for the backgrounds of the home page and game page are dark and in keeping with a night sky
  to give the mood of the game. 
- The contact page background uses a blue themed background but a hint at cyber imagery to 
  draw the user's mind to technology given it is to associate with the developer. 
- The fonts used were Anton, Londrina, Josefin and Potta One and the colors of red and off white work together
  to convey the message and keep the theme of the game. 

#### Wireframes

The home page contains a header with the name of the game and a contact button 
to navigate to a page that allows contact with the developer via form.
Below this are the instructions on how to play the game and the "start", button.
The footer contains social media links of the developer.

##### Home page - Desktop
![Home Desktop Wireframe](/readme_images/home.desktop1.png)

##### Home page - Mobile
![Home Mobile Wireframe](/readme_images/home.mobile1.png)

The game takes up the screen once started. The score is displayed 
top right and the lives count top left. 

##### Game page - Desktop
![Game Desktop Wireframe](/readme_images/game.desktop1.png)

##### Game page - Mobile
![Game Mobile Wireframe](/readme_images/game.mobile1.png)

The contact page contains a header with the name of the game and a Home button 
to return to the home page.
Below this in the main body is a contact form including name, email and message.
In line with the home page, the footer contains the social media links of the 
developer.

##### Contact page - Desktop
![Contact Desktop Wireframe](/readme_images/contact.desktop1.png)

##### Contact page - Mobile
![Contact Mobile Wireframe](/readme_images/contact.mobile1.png)

## Features

#### Current Features

- The site will be responsive on all devices
- Each page will have a NAV bar at the top with no reliance on the back button
- There will be social media links in the footer
- The game's concept and instructions will be presented to the user on landing
- The game will launch at the user's command via start button
- On game over, the user will be presented with their score and option to try again
- The contact page has a form to allow the user to contact the developer

#### Future Features

- A leaderboard stored to maintain results
- Ability to buy games from the developer

## Technologies Used

#### Frameworks, Tools and Libraries

- [Bootstrap 4.5.2](https://www.bootstrapcdn.com/)
    +   Leveraged for responsiveness and bootstrap css
- [jQuery](https://cdnjs.com/libraries/jquery)
    +   Used to get the screen height and width for the canvas
- [Font Awesome](https://fontawesome.com/)
    +   Used to put some style on the site's header and footer instructions
- [Google Fonts](https://fonts.google.com/)
    +   Used to style the text throughout
- [Balsamiq](https://balsamiq.cloud/spaces)
    +   Used for wireframe design
- [Github](https://github.com/)
    +   Used to store all code and publish the site

#### Languages

- [HTML](https://en.wikipedia.org/wiki/HTML) - the main language to structure the elements of the site.
- [CSS](https://en.wikipedia.org/wiki/CSS) - used to style the site.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) - used to write the game logic.

## Testing

#### Tools 

- [HTML validator](https://validator.w3.org/)

![Home Page](/readme_images/index-html-validator-results.PNG)

+   Two empty headings are there to take data from the game once over. 

![Contact Page](/readme_images/contact-html-validator-results.png)

+   Two warnings on type attributes being unnecessary. I followed the Code Institute instruction on these types
 and am happy they don't negatively impact my game.
+   One warning WRT page lacking heading. This is intentional on my part as the page does not need it.

- [css validator](https://jigsaw.w3.org/css-validator/) 

![css results](/readme_images/css-file-validator-results.PNG)

+   No issues found.

- [JS Validator](https://jshint.com/)

+   No errors. Warnings WRT let availability not an issue. 

- [Reponsivity validator](http://ami.responsivedesign.is/#) - all of my pages opened on all the device sizes.
- In addition, I opened each page and played the game on every device option in Developer tools.

#### User Story Tests

![user story test results](/readme_images/site-user-test.PNG)

#### Site Owner Tests

![site owner test results](/readme_images/site-owner-test.PNG)

I used the site extensively to ensure it functioned as expected.
The game instructions are presented clearly.
The game initiation is at the control of the user.
The game controls are straightforward.
The progress and result are easy to see.
The game becomes more difficult based on the score and this created a will to beat my previous score.
The contact function works and for completeness, I set up an auto reply.
Along with this, I requested friends and family members to review and provide feedback. 
The results were positive.

#### Known backgrounds

+ On portrait orientation, the fireballs are not perfectly round. I expect users to use the game in landscape, however, 
I will try to address this.

## Deployment

#### Publishing Steps

- Log in to GitHub and navigate to the relevant repository (https://github.com/TomDillane/MS2_Ball-Catch_Game)
- Click "Settings".
- Scroll down to "GitHub Pages".
- Under "Source", select the relevant branch, in my case "Master".
- Click Save.
- Site is confirmed as published at (https://tomdillane.github.io/MS2_Ball-Catch_Game/)

#### Clone Steps

- Go to GitHub and navigate to the main page of the repository (https://github.com/TomDillane/MS2_Ball-Catch_Game)
- Click the "Code", drop down.
- Click the "Copy", icon next to the url.
- Install Github on your machine and launch the repository that you wish to use.
- Open Git Bash and navigate to where you want to put the clone.
- Type git clone https://github.com/TomDillane/MS2_Ball-Catch-Game.git
- Press "Enter".

## Credits

#### Code

- The background images and ninja are from pngtree.com - Attribution on the contact page.
- My mentor pointed me toward using two canvas elements. 
-  Bootrap was used throughout for reponsiveness and styling.
- jQuery was used to get get the screen sizes of the user.

#### Content

- All content was written by Tom Dillane. 

#### Acknowledgements

- I would like to thank my mentor for the constant support in this project. He pushed me to learn and do 
better than I thought I could myself. 









