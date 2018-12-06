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
> __WARNING:__

> __Project is deployed.  Any new deployment will require a new endpoint url to be entered in the /client/src/client.js file!__

To sync the local client/src directory with the s3 bucket, use this command in the client directory:
```
npm run sync
```
To deploy the web-services directory and its lambda functions to AWS, use this command in the web-services directory:
```
npm run deploy
```
To remove the web-services directory and its lambda functions to AWS, use this command in the web-services
directory:
```
npm run remove
```
## Testing
The project has one test that tests the ping function to make sure that it returns "pong"

To run the test use this command in the web-services directory:
```
npm test
```
## env.yml
The project contains a /chartdb endpoint that returns created and resolved dates

The endpoint uses a private key and token to get Trello API data. In order to protect the data, you must create a file (env.yml) to store the key and token. It is ignored and won't upload on gitHub. 

To create the env.yml, edit the env.yml.default file in the web-services folder with the correct info and save it as env.yml in the parent folder (interns-oct2018)

Time permitting, we will use jest mock to write tests for the endpoint

## Postman Collection
We have included a Postman collection with API requests.  It will not work unless you enter the key and token for the project in the [collection variables](https://www.getpostman.com/docs/v5/postman/environments_and_globals/variables).

----
### Contributing
Pull requests are not welcome.  Contributions are limited to Inventive Group interns.

### Authors and acknowledgment
Thank you to Dana and Brandon for mentoring.  Thank you to Thinh, Roslyn and Camilo for your contributions.

### License
[MIT](https://choosealicense.com/licenses/mit/)
