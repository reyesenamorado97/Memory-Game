# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Robert Reyes-Enamorado**

Time spent: **8** hours spent in total

Link to project: https://glitch.com/edit/#!/mysterious-inquisitive-mule?path=index.html%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] A countdown timer appears where necessary
- [x] Unique sound plays when the user has lost
- [x] Unique sound plays when the user has won
- [x] Cursor will change to a waiting cursor while the clue sequence is playing only


## Video Walkthrough (GIF)


Part 1 of 3 of full game:











![](https://i.imgur.com/JkRNnCX.gif)


























Part 2 of 3:





















![](https://i.imgur.com/w7uhzzH.gif)




















Part 3 of 3:















![](https://i.imgur.com/7rkBlk9.gif)

Displaying Below: 
- Animation on button hover (looks like a real button being pressed)
- Time expiration results in strike
- Timer resets after a strike
- Losing a game 

![](https://i.imgur.com/K56q6Kh.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.howtocodeschool.com/2020/10/button-bounce-effect-using-css.html 

https://www.w3schools.com/css/css3_buttons.asp 

https://codepen.io/Momika/pen/ydaWmQ 



2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
 
The most difficult part of the entire assignment was getting the timer to work countdown
timer to work correctly. Implementing the timer without a visible timer was not very 
challenging, but matching a visible timer required the knowledge of hiding/revealing page
elements and the use of 'setTimeout.' The timer needed to reset every time when the game
was started, a clue sequence started, when the guess was wrong, the guess was correct,
when the game was won or lost, and when the timer timeout resulted in a strike. These were
the areas to consider because otherwise, the timer might start off at a random number
between (5-0) and then change the displayed time back to 5. This could be confusing to the 
user, so I made sure that was not an issue by carefully placing a function that would 
clear the timer and restart it. Another layer on top of this was the fact that every clue 
sequence did not last the same amount of time and the game needed to speed up with each 
turn. Proper use of the given 'delay' variable proved to be very useful in cueing when my
timer should fire off. After solving this. I could easily implement another feature that I
thought was very useful: a wait indicator attached to the cursor while the clue sequence
was playing. This would allow the user to know when the sequence has finished being 
displayed. Understanding how to implement the timer made this process much easier because 
the code was similar.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would like to work with and learn about different frameworks to improve the coding process and 
efficiency of my websites.Also, I would like to know how to incorporate other languages with web 
development and understand how to use databases withmy websites to pull and push data from a server
that I oversee. With respect to using other languages, my curiosity lies inhow one may use another 
language to run tests on a website, such as Python. The backend of web design fascinates me. I know 
I can write code in C, and then have a Python script that runs all sorts of tests on my C program. 
I would love to learn how I can incorporate my knowledge of other languages into web development, 
which may help with my current development of iOS apps
as well.

Beyond this, I have an interest in how memory allocation works with different compilers and 
programming languages. Personally,I would like to know how browsers compile HTML, CSS, and JavaScript 
source code into useful files for the computer. Is it anything like how the C compiler on an x86-64 machine 
will produce an executable file from a C source file? Having a better grasp of how compilation works will 
help save time when debugging.

Finally, are there any textbook recommendations one can consider for expanding their knowledge? Practicing 
PROGRAMMING is extremely important, but from my experience, textbooks have pushed me to become a
better PROGRAMMER. Time complexity, understanding data structures through their invariants, and memory
allocation are not topics I can learn from programming alone. Still, programming is a tool for a 
computer scientist to understand the machines and processes of compilers we work with.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

The visual appearance of the code is very important to consider (especially at the production level),
 so I would make the code more readable and comment if possible. I would have liked to add
a strike counter so the user does not have to remember the count from the alerts displayed. I wanted 
to add a shiny glass effect over the buttons with transparent overlay images, but I felt it may
have broken up the simplistic design I was aiming for. There was also the issue of finding
an actual transparent image that was free to use. Another idea I scrapped was adding a 
shining .gif image to the bottom right corner of the screen to display that you have 
beaten the game. Also, I wanted to add confetti falling after winning but settled for a
victory sound file instead. I was unsure if adding too many animations would distract the
user. A difficulty setting was intended because when my friends playtested, they
were beating the game too easily. I adjusted the clue sequence timing to add difficulty
but knew it was possible to go further. What if the sequence was randomized every turn?
What if you could make the game go faster with a selectable setting? This would have been
the next big feature I would have added because it adds replayability and the user will
stay on the website for longer. Adding victory streaks and a leaderboard would have been
the absolute limit of my imagination for this game. I've used Back4App for a clone Instagram app
made for CodePath's iOS development course to manage user-specific data, so I would imagine
that adding stats for users would not be very difficult given the right amount of time.




## Interview Recording URL Link

I understand my interview is a little bit longer than requested. This is due to thanking CodePath,
Course Hero and WorkDay at the start. I apologize for any inconvenience this may cause.

[My 5-minute Interview Recording](
https://user-images.githubusercontent.com/97928078/161342357-692d130a-f47e-4007-89b7-1d1ca9fe3887.mp4
)


## License

    Copyright Robert Reyes-Enamorado

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
