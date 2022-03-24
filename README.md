# Cypress core workshop
Repository for [Cypress core workshop](https://filiphric.com/cypress-core-workshop)

## What is Cypress core workshop
4 module workshop, during which you can learn core principles and patterns. Four 3-hour long online sessions are packed with quality content and many great tips from my more than 5 year long experience with Cypress.io. Workshop is built on "learn by doing" principle. This means you can look forward to many practical examples, working with code and real-life problem solving.

## Author
I am Filip. Som lead SDET in the company called [Slido](https://www.sli.do/) and a [Cypress ambassador](https://cypress.io/ambassadors/)

## What’s in this repo
This repo contains all the materials for the workshop. Most of the chapters start with `demo_start.js` and finish with `demo_end.js` file. YOu can find code challenges in the `challenge.js` file and solutions in the `challenge_solution.js` file.

## Trello clone app
Bundled as a submodule is an app that is a clone of a popular [Trello app](https://trello.com). You can create boards, lists and cards. You can drag and drop cards between tests or even upload a picture to the card detail. There’s also a very simple signup and login which will allow you to create private boards

### Installation
Super simpl
1. `npm install`
2. `npm start`
3. Open your browser on `http://localhost:3000`

### Database
The application uses a json file for a database which you can find in `trelloapp/backend/data/database.json`. Uploaded files are in `trelloapp/backend/data/uploaded` folder.

### Mini-apps
There are mini applications used for explaining some very simple concepts. These are usually just an html files that are in the `mini-apps` folder.

### Workshop scripts
For some of the workshop examples, I seed the database in the background. This seeding happens when a file is opened. The seeding is tied to the file name, so make sure you don’t rename test files or change their path. It’s still possible to run those test afterwards, but they are more likely to fail, because of different data.

### Application utilities
By typing `F2` key in the application, a small toolset appears that will allow you to reset your application to a desired state. You can delete boards, lists, cards, users or everything. This is useful when playing with the application manually.