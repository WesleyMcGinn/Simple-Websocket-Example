# Instructions for Localhost Document Setup
## You will need:
 - A computer (Preferably on windows software),
 - Access to the localhost document repository (the one you are in now),
 - The ability to download an app.

## Installing node.js and Websocket
Node.js is a software that will allow you to easily host websites of all kinds using your computer as the server.  It is one of the best server softwares to use because it can handle multiple requests simultaneously.

To install node.js, click either button on [this page](https://nodejs.org/).

When the file finishes downloading, open it and follow through the instructions to install node.js on your computer.  Once node.js is finished installing, it is recommended that you restart your computer.

After you have restarted your computer, open the Command Prompt.  If you are using a windows device, you can find the command prompt by typing "Command Prompt" into the search bar on the taskbar at the bottom of your screen.

In the Command prompt, type the following:
```
node -v
```

If node.js is properly installed, you should see the version of node.js that you are using, which will be something like `v16.17.0`.

Now, you will need to install websocket.  Don't worry!  This will be a lot easier than installing node.js.  Just type the following into the Command Prompt:
```
npm install ws
```

Now you have all the installation and software that you need!

## Setting up the server
Download or copy `server.js` from this repository into the folder `C:\Users\<your name>`.

To run the server, go to the Command Prompt and type the following:
```
node server.js
```

Congratulations!  Your computer is now a server!

**Note:** You can stop your computer from being a server at any time by going to the Command Prompt and using the keyboard shortcut `Ctrl + c`.  Your computer also stops being a server when you close the Command Prompt.

To see if your server setup was sucessful, try going to Chrome and typing `localhost:80` into the URL bar.  You can also go there by clicking [this link](http://localhost:80).

You should see a 404-file-not-found error.  This is because we haven't set up the page, yet.  If you see the 404 error, then your server works!  If not, please go to the [discussions page]() of this repository for help.

## Setting up the html page
Download or copy `page.html` from this repository into your desktop.

Now, you will need to do some editing specific to your device.

Open `page.html` with Visual Studio Code or some kind of code editor.  (Do not double click it because that will open it with a web browser, which will show what the code does rather than a place to edit the code.)
