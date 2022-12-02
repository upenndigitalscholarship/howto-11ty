---
layout: default
---

### Install Node.js
Your browser contains an enviornment that can execute JavaScript. To do the same thing outside of your browser, we need to install a JavaScript runtime called Node.js. This will allow you to write and execute JavaScript in the terminal.   

Mac:
https://nodejs.org/en/download/
Windows:
https://nodejs.org/en/download/

Linux:
`sudo apt install nodejs`
https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

### A quick tour around your new Node neighborhood

npm
npx
nvm

package.json

## To get started, create a folder for your project
`mkdir my-project`
`cd my-project` 

## Initialize node in your project directory
`npm init -y`

## Install the version of Eleventy that you want.
https://www.npmjs.com/package/@11ty/eleventy?activeTab=versions

For example, the internationalization is currently only included in eleventy 2.0.  If you want that, you can install:

`npm i @11ty/eleventy@2.0.0-canary.18`

or if you just want whatever the current version is: 

`npm install @11ty/eleventy`


### How to run 11ty

`npx eleventy` -- build the site
`npx eleventy --serve` --run local dev in browser

