# Instructions for Localhost Document Setup

## You will need:
 - Computer (This tutorial is written for windows software)
 - Wifi (If you are viewing this you probably have it)

## Installing node.js and Websocket
Node.js is a software that will allow you to easily host websites of all kinds using your computer as the server.  It is one of the best server softwares to use because it can handle multiple requests simultaneously.

Download node.js from [this page](https://nodejs.org/).

When the file finishes downloading, open it and follow the instructions to install node.js on your computer.  Once node.js is finished installing, it is recommended that you restart your computer.

After you have restarted your computer, open the Command Prompt.  If you are using a windows device, you can find the command prompt by typing "Command Prompt" into the search bar on the taskbar at the bottom of your screen.

In the Command prompt, type the following:
```
node -v
```

If node.js is properly installed, you should see the version of node.js that you are using, which will be something like `v22.5.1`.

Now, you will need to install websocket.  This will be a lot easier than installing node.js.  Just type the following into the Command Prompt:
```
npm i ws
```

Now you have all the software that you need!

## Setting up the server
Download or copy `server.js` from this repository into the folder `C:\Users\<your_username>`, where "<your_username>" is replaced with the username you use to log into your device.

Next, download or copy `page.html` from this repository into your desktop.  If you do not want to put this file in your desktop, you will have to change line 11 in `server.js` to match its new directory.

To run the server, go to the Command Prompt and type the following:
```
node server.js
```

Congratulations!  Your computer is now a server!

**Note:** You can stop your computer from being a server at any time by going to the Command Prompt and using the keyboard shortcut `Ctrl + c`.  Your computer also stops being a server when you close the Command Prompt.

To see if your server setup was sucessful, go to Chrome or any other web browser on the serving device and type the word `localhost` directly into the URL bar.  You can also go there by clicking [this link](http://localhost:80).

If the page loads, congratulations!  Your server works!  If not, please go to the [discussions page](https://github.com/WesleyMcGinn/Localhost-Document/discussions/1) of this repository for help.

## Access from another device

To access your server from another device _connected to the same wifi network_, you can simply use the IPv4 address of your computer as a URL.

To find out what your IPv4 address is, open the Command Prompt and type:
```
ipconfig
```

You will see a lot of information.  One section of the information will look something like this:
```
Wireless LAN adapter Wi-Fi:

   Connection-specific DNS Suffix  . : attlocal.net
   IPv6 Address. . . . . . . . . . . : 2602:301:7777:3f00::48
   IPv6 Address. . . . . . . . . . . : 2602:301:7777:3f00:e9e8:ae6f:c003:aa84
   Temporary IPv6 Address. . . . . . : 2602:301:7777:3f00:48fa:b4ed:d7d2:27c2
   Link-local IPv6 Address . . . . . : fe80::e9e8:ae6f:c003:aa84%12
   IPv4 Address. . . . . . . . . . . : 192.168.1.100
   Subnet Mask . . . . . . . . . . . : 255.255.255.0
   Default Gateway . . . . . . . . . : fe80::42b7:f3ff:fe54:62f0%12
                                       192.168.1.254
```

Your IPv4 address will probably be in the third line from the bottom of this chunk:
```
   IPv4 Address. . . . . . . . . . . : 192.168.1.100
```

In the above example, `192.168.1.100` is the IPv4 address.  Your IPv4 will probably be different.  Copy it (or memorize it), but take note that your IP address may change with certain events.  If you want to always have the same IP address, try looking into [setting up a static IP](https://www.pcmag.com/how-to/how-to-set-up-a-static-ip-address).

On another device connected to the same wifi network as your server, type your IPv4 address into the URL bar of any web browser.  You should see the page load.

Now, anything you type in the text box on the page will update the text box for all devices with the page open.

## Running the server

If you closed the Command Prompt or pressed `Ctrl + c` to stop the server, you can start it up again by going back to the Command Prompt and typing:
```
node server.js
```

**Note:** You cannot access the localhost document if you are not connected to the same wifi network as the server.  If you want to be able to do that, please look into [Port Forwarding](https://www.wikihow.com/Set-Up-Port-Forwarding-on-a-Router).

## HELP
If something doesn't turn out right, just let me know in the [discussions page](https://github.com/WesleyMcGinn/Localhost-Document/discussions/1) of this repository.  I'd be glad to help!
