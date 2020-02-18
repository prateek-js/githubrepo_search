This assignment is done using vanilla javascript

Open index.html on browser. Doesnt require any server to run. As it is standalone app

searches based on language or description.

Tried implementing ES6 concept.

No frameworks used except bootstrap for CSS. 

Process Followed while coding:-

1. app.js - this file creates two module
    a. UI.js which deals with whole of UI rendering and data parsing to be shown in UI
    b. github.js contains method to fetch the data from github source based on option selected and search parameter entered


2. UI.js - This file is responsible for traversing the data and selecting top 5 repos based on stars and sorting it by updated date
    And calculates the average score of top 5 repo shown on UI.