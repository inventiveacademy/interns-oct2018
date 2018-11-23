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
The project also requested to create and deploy /boards endpoint on AWS that use Axios to get boards from Trello API. Then, call the /boards endpoint in jest testing and return at least one board.

To deploy /boards endpoint and run all tests use same commands as the above guide.

To run only a jest test for the deployed /boards endpoit
```
npm test boards.test
```
## Postman Collection
We have included a Postman collection with API requests.  It will not work unless you enter the key and token for the project in the [collection variables](https://www.getpostman.com/docs/v5/postman/environments_and_globals/variables).

----
### Contributing
Pull requests are not welcome.  Contributions are limited to Inventive Group interns.

### Authors and acknowledgment
Thank you to Dana and Brandon for mentoring.  Thank you to Thinh, Roslyn and Camilo for your contributions.

### License
[MIT](https://choosealicense.com/licenses/mit/)
