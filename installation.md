---
layout: default
---

### Install Node.js
https://www.digitalocean.com/community/tutorial_collections/how-to-install-node-js

### A quick tour around your new Node neighborhood

npm
npx
nvm

package.json
package-lock.json

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

