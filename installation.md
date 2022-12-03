---
title: 1 Installation
layout: default
tags: pages
---

### Install Node.js
Your browser contains an environment that can execute JavaScript. To do the same thing outside your browser, we need to install a JavaScript runtime called Node.js, allowing you to write and run JavaScript in the terminal. 

1. Mac
    - The simplest way to install Node on Mac is with the package available on the Nodejs site. Download the file and install it: https://nodejs.org/en/download/
    - It is also possible to install Node with Homebrew. https://formulae.brew.sh/formula/node. `brew install node@18`
2. Windows
    - The simplest way to install Node on Windows is with the package available on the Nodejs site. Download the file and install it: https://nodejs.org/en/download/

3. Linux:
    - `sudo apt install nodejs`
    - https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04

### A quick tour around your new Node neighborhood

With Node installed, you'll get several new commands in your terminal.  

- `node` will open a Node shell that works much like the console in your browser. You can execute .js files with `node myfile.js`
- `node ls` will list the versions of Node installed on your machine.

#### npm 
npm (Node Package Manager) is the default package manager for Node.js. Packages are bundles of code that serve a specific need and are shared on the [npm hub](https://www.npmjs.com/). Most packages also have a GitHub repository, but npm provides a quick way to install packages and manage dependencies.  
- When initialized in a directory (`npm init`), npm will create a package.json file that keeps tracks of all the packages and the version needed for the project. 
- To install a package, type `npm install` or `npm i`. For example, `npm i @11ty/eleventy` installs 11ty. It is often helpful to find your package first at [npmjs.com/](https://www.npmjs.com/) where you'll find links to documentation and current versions. Once installed, you'll see your packaged listed in package-lock.json. The code for your package is stored in its own subdirectory in `node_modules`.  It's a good practice to add node_modules to your .gitignore file to save space. 

#### npx
npx (Node Package Execute) is included with npm. The `npx` command lets you run code in your project's environment with all the packages installed. For example: `npx eleventy`.


## To get started with 11ty, create a folder for your project
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

You will now see a package-lock.json file in your project directory.  This file lists all the packages needed for your project and their versions.

### How to run 11ty

`npx eleventy` -- build the site
`npx eleventy --serve` --run local dev in browser

