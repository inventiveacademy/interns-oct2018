# Trello KPI Dashboard
A simple project to collect metrics from a [Trello](https://www.trello.com) board and create a web-based KPI dashboard
Installation
----
Clone the [repository](https://github.com/inventivegroup/interns-oct2018)
With web-services as working directory, install npm dependencies with this command:
```
npm install
```
npm Commands
----
To sync the local client directory with the s3 bucket, use this command:
```
npm run sync
```
To deploy the web-services directory and its lambda functions to AWS:
```
npm run deploy
```
Postman Collection
----
We have included a Postman collection with API requests.  It will not work unless you enter the key and token for the project in the [collection variables](https://www.getpostman.com/docs/v5/postman/environments_and_globals/variables).

## Contributing
Pull requests are not welcome.  Contributions are limited to Inventive Group interns.

## Authors and acknowledgment
Thank you to Dana and Brandon for mentoring.  Thank you to Thinh, Roslyn and Camilo for your contributions.

## License
[MIT](https://choosealicense.com/licenses/mit/)