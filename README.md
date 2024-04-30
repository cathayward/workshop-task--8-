# workshop-task--8-

### notes:
website link: https://cathayward.github.io/workshop-task--8-/
- for this exercise I wanted to create a search engine within my sketch that will generate images provided by the MET Museum API.
- I found an example of a use of this API online at: https://editor.p5js.org/sebmorales/sketches/iJ-VgMk9o
    - finding this really helped me out when it came to learning how this specific API worked due to the overwhelming number of outputs that could be given as data.
    - it showed me which parts of the API were vital to my specific idea and what inputs were needed in order to search for specific search terms
- this helped me visualise the ways i could manipulate the search function and generate images related to a search put into an input box
- I then generated a button that would run the input for me, and adjusted the aspect functionality a little but
- Then I added an input box and set it up so the search function would become whatever text was input into the input box
- Lastly I formatted everything in a way that the images were centred alongside the button and input box
- One thing I have noted is that the inputs do take a long time to load, which is probably due to the fact that some search queries don’t produce an image result and thus must run again in order to find an image to draw
- I tried to look up some different ways this could run faster but it seems that this is the best option that I can think of.
- If I were to further this, I would look into adding text about the artwork and it’s artist to the side so that it is easy to look up and find an artwork that you may like
- I also want to come back and fix the issue I'm having where vertical images are too big and end up taking up too much of the screen
    - I have since fixed this issue by adding an if / else statement to the drawImage function.
- I will say this page does require a little bit of patience, so try not to pressthe 'show artwork' button too many times to allow it the time needed to  search for a valid image
