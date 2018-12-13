Marcella Park / SLS 12: Understanding Darwinism / Final Project due 2018-12-13

## About this project
To culminate a semester full of nuanced ideas about how populations change, many diverse forms of scientific evidence to do with our origins, and much more, I opted to create a web game representation of the evolution of the peppered-moth, learning how to use Phraser 3 (a JavaScript game engine / coding framework) in the process. Click [here](marcypark.me) to play.

### How to play
Your objective: Eat as many moths as you can in five quick rounds! All you must do to eat a moth is find it and click on it, though this may turn out to be more difficult than you're thinking right now ...

Pro tip: You won't be able to eat that many moths if you eat them all before they can breed!

### Features
- **Melanic and non-melanic forms of *Biston betularia*** appear in this game against dark (de-lichened) and light (lichened) tree bark to simulate the real conditions of bird predation of peppered moths at varying levels of industrial pollution before, during, and after the Industrial Revolution. Game testers have found that they catch melanic forms much more easily than non-melanic forms against light bark and vice-versa against dark bark. This leads to population patterns in the game resembling those surrounding the Industrial Revolution and is also an opportunity for game players to strategize according to predicted pollution patterns over the five rounds of the game. (Hint: The five rounds of the game try to follow pollution in England from 1848 to the present day -- From almost non-existent, to severe, to severe again, then reduced, and in the fifth round, almost non-existent in half of games and severe in half of games to represent the uncertainty of today's political climate). I found the Clarke, Mani, and Wynne paper "Evolution in reverse: clean air and the peppered moth" enlightening in examining the reversal of the trend toward melanic forms as pollution decreased.
- **Reproduction between moth generations** is simulated starting in Hardy-Weinberg equilibrium (p = 0.3) and by randomly pairing surviving moths at the end of each round to produce offspring with genotypes determined probabilistically according to the Punnett squares corresponding to parent genotypes. This simulation over generations is key in demonstrating the work of natural selection over time through the survival / non-survival of individuals with / without certain traits to reproduction. In this work I consulted Hardy's note on the subject in *Science*, and for some more examples of the math involved, my notes from practice problem sessions with Teaching Fellow Cat Chamberlain.

### Limitations
- **My model of reproduction** between generations is not as accurate as it could be. I do recognize that moths lay eggs and that there are many, many other factors that go into the survival of the caterpillars that hatch from those eggs; that moths probably aren't monogamous; and that a generation of moths definitely reproduces and dies faster than trees drastically change color due to changes in pollution level -- It is in fact this fast reproductive cycle that made such a conspicuous evolutionary process possible!
- **The case of the peppered moths is a complicated one** -- much too complicated for me to do justice to in this project, and complicated enough that many people still dispute its significance. Though many of those dissenters are creationists, trained scientists (among them Walton and Stevens, whom I discuss below) are still looking into how exactly, on a more fine-grained level, the numbers of the different strains of peppered moths ended up the way they did over time. It was surprising to me when we read Cook, et al.'s research for section that scientists were still spending time defending the idea that industrial melanism in the case of peppered moths counts as evidence for evolution. But spending more time in the literature has acquainted me with some of the more subtle disputes *within* the scientific community over the peppered moths. Haldane, in response to Kettlewell's famous paper on the subject, advanced a quantitative argument suspicious of the large claims at hand through his estimation of the favorability of melanic trait given Kettlewell's data, an estimation that seemed out of the scientific norm at the time. It has been extremely interesting and gratifying to see these disputes at play -- to see how subtle something as abstract-seeming as observations about groups of organisms can be in the form of population genetics. It is also extremely gratifying to know that the researchers I cite had to make up a lot of the science they were doing to be able to attempt the explanations they did -- Hardy's note in *Science* seems to be an example of something general that came out of an attempt to answer a narrower question.
- **By the fact that we are human and that this game takes place on a two-dimensional screen,** it becomes clear that my project does not perfectly accurately simulate a bird's hunting vision. Walton and Stevens in a recent paper closely examine the phenomena of camouflage and avian vision at the center of what we have thought of for so long as a remarkable, amazingly teachable example of natural selection. If I were to improve my project further, these models of avian vision would be some of the first things onto which I would hope to shed more light, for the sort of philosophical sake of expanding horizons on the meaning of "sight," and a bit selfishly as a computer science concentrator, for the practice with modeling vision.

## Citations

Clarke, C.A., Mani, G.S., and Wynne, G. (1985) Evolution in reverse: clean air and the peppered moth. *Biological Journal of the Linnaean Society*

Cook, L.M., Grant, B.S., Saccheri, I.J., and Mallet, J. (2012) Selective bird predation on the peppered moth: the last experiment of Michael Majerus. *Biology Letters*.

Haldane, J.B.S. (1924-1934) *A Mathematical Theory of Natural and Artificial Selection*.

Hardy, G.H. (1908) Mendelian proportions in a mixed population. *Science*.

Kettlewell, H.B.D. (1958) A survey of the frequencies of *Biston betularia* (L.) (Lep.) and its melanic forms in Great Britain. *Heredity*.

Walton, Olivia C. and Stevens, Martin. (2018) Avian vision models and field  experiments determine the survival value of peppered moth camouflage. *Communications Biology*.

## Credits
Many thanks to Professors Andrew Berry and Janet Browne, and to Teaching Fellow extraordinaire Cat Chamberlain, for their guidance on this project.

Images used in the game are from Wikipedia (moths), jooinn.com (tree bark), and judahcreative.com (tree bark); and edited for color.
