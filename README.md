# msadevops2020

https://jkr-msa-2020-devops.azurewebsites.net/


Description of Build and Release pipelines:

Build Pipeline: In implementing my build pipeline, I followed instructions provided from https://github.com/NZMSA/2020-Phase-1/tree/master/DevOps%20-%20Azure%20Pipeline. I would also like to note that this is triggered on new commits to the master and develop branches - as stated in the yaml file.

Release Pipeline: The first and second release was induced when following the instructions stated above. The third and fourth release was induced when I copied my already completed React Web App to this new repository. In these releases I have implemented a web app that allows users to input a number, and retrieve "useless" facts about it using an API sourced from www.numbersapi.com. I chose this API because it was intriguing to see that such a site existed.

Note: the API call does not work in this deployment, but works in the github repository linked in my Front End Development pathway. I am unsure how to fix this (See console error below).

"MediaGrid.tsx:23 Mixed Content: The page at 'https://jkr-msa-2020-devops.azurewebsites.net/' was loaded over HTTPS, but requested an insecure resource 'http://numbersapi.com//trivia?json'. This request has been blocked; the content must be served over HTTPS."
