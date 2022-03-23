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

If you recorded multiple GIFs for all the implemented features, you can add them here:

Part 1 of 3 of full game















![](https://i.imgur.com/JkRNnCX.gif)

Part 2 of 3















![](https://i.imgur.com/w7uhzzH.gif)

Part 3 of 3















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

I would like to work with and learn about different frameworks to improve the coding
process and efficiency of my websites. Also, I would like to want to know how to
incorporate other languages with web devopment and understand how to use databases with my
websites to pull and push data from a server that I oversee. In respect to using other
langages, my curiosity lies in how one may use another language to run tests on a website,
such as Python. I know i can right code in C, and then have a Python script that runs all
sorts of tests on my C program. I would love to learn how I can incorparate my knowledge 
of other languages into web development, which may help with my personal development of 
iOS apps as well.


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

The visual appearance of the code is very important to consider, so I would make the code
more readable and comment if possible. I would have liked to add a strike counter so the
user does not have to remember the count from the alerts displayed. I wanted to add a 
shiny glass effect over the buttons with transparent overlay images, but I felt it may
have broken up the simplest design I was aiming for. There was also the issue of finding
an actual transparent image that was free to use. Another idea I scrapped was adding a 
shining .gif image to the bottom right corner of the screen to display that you have 
beaten the game. Also, I wanted to add confetti falling after winning but settled for a
victory sound file instead. I was unsure if adding too many animations would distract the
user, anyway. A difficulty setting was intended because when my friends playtested, they
were beating the game too easily. I adjusted the clue sequence timing to add difficulty
but knew it was possible to go further. What if the sequence was randomized every turn?
What if you could make the game go faster with a selectable setting? This would have been
the next big feature I would have added because it adds replayability and the user will
stay on the website for longer. Adding victory streaks and a leaderboard would have been
the absolute limit of my imagination for this game.




## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
