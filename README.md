# Trello KPI Dashboard
##### A simple project to collect metrics from a [Trello](https://www.trello.com) board and create a web-based KPI dashboard

----
## Installation
Clone the [repository](https://github.com/inventivegroup/interns-oct2018)

Install npm dependencies in the client and web-services directories with this command:
```
npm install
```
## npm Commands
To sync the local client/src directory with the s3 bucket, use this command in the client directory:
```
npm run sync
```
To deploy the web-services directory and its lambda functions to AWS, use this command in the web-services directory:
```
npm run deploy
```
## Testing
The project has one test that tests the ping function to make sure that it returns "pong"

To run the test use this command in the web-services directory:
```
npm test
```
## Create a new /boards endpoint, and test it
The project contains a board endpoint that returns the names and ids of all boards on the Trello account

The endpoint uses private key and token to get Trello API data. These sensitive should not be put in codes because the codes can be seen by anyone on gitHub. So must create a file (env.yml) that loactes at parent of web-service folder contains these info, and it won't upload on gitHub. The default format of this file like below
```
env.yml
defaul:
    KEY: ----your key----
    TOKEN: ----your token----
```

Use serverless to deploy /boards endpoint using npm run deploy

Time permitting, we will use jest mock to write test for the endpoint



## Postman Collection
We have included a Postman collection with API requests.  It will not work unless you enter the key and token for the project in the [collection variables](https://www.getpostman.com/docs/v5/postman/environments_and_globals/variables).

----
### Contributing
Pull requests are not welcome.  Contributions are limited to Inventive Group interns.

### Authors and acknowledgment
Thank you to Dana and Brandon for mentoring.  Thank you to Thinh, Roslyn and Camilo for your contributions.

### License
[MIT](https://choosealicense.com/licenses/mit/)
