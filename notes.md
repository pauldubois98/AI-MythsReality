# Intelligence artificielle : mythes et réalités

what is ai?
=> smth that behaves/mimics like human; some are v stupid, some v smart
ofc, we are more interested in the "smart" ones

AI can be done in various ways:
- classical: tell computer what to do (if this do that, etc...)
- deep: let the computer deduce by himself what is the best behaviors
=> Today, we will try to understand how computers can "learn by themself"

Imagine a machine that can do very complex things with correct settings, but you don't know what are the correct settings (insert image from artist?)
- black box machine interface + test (QR code) a(x-c)+b=y; test on 10-15 points (light up green/red if prediction is within acceptable error)
[explanation]
- white box machine interface + test (QR code) a(x-c)+b=y; test on line + line to fit (turn green/red if line is within acceptable error)
=> it is possible to explain simple models like this one

describe architecture for image labeling (input image, output label, instead of input x, output y)
[give example of MNIST]

how did you all manage to have green lights on the black box model?
=> trial and error
you needed to have the green / red lights... these turn out to be points

for more complex data, such as images, to be able to say if a light is red or green, you need to have the *label* (desired output for your machine) for each image you want to test
=> hence, data is crucial
then, we can also follow the process of trial and error, even for very complex machine, like the one able to eat an image and throw out a label
[show evolution of the predictions + accuracy on ~10 images while training]
this is how you teach a computer to recognize digits, and by extension writting

if you want to generate an image from a label, you can reverse your architecture & train again (NB: this is *very* simplified)

============== [ entracte ] ==================

now, how do we get AI to deal with text?
input text architecture (word to token)
predict next word/token => self supervised (no labelled data needed!)
frame it to obtain chatGPT

--------------

CCL:
Myth: AI will take over and blah blah blah
Myth: AI is "smart" => show fails (e.g. when image is different from the ones in the training)
Reality: AI is making big progresses, thanks to lots of computer power + lots of data
Reality: AI as a tool is becming more and more efficient
Reality: some jobs might change with AI, but mostly to become less boring (e.g. organ contouring)
Myth: AI will replace humans (e.g. humans still have to check up organ contouring)