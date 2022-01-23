# SimpleLibrary

A simple library CRUD implemented in [NestJS](https://nestjs.com/) following a microservice architecture.

## Architecture
To experiment with the microsservices architecture and implementation in NestJS, the application consists of an API which interacts with a microservice responsible for the database interaction with a [Postgres](https://www.postgresql.org/) relational database. The database is configured via [TypeORM](https://typeorm.io/#/) with the models being defined in the microservice.

![image](https://user-images.githubusercontent.com/37940382/150658479-d8311931-e618-42b7-b760-cd623403caf6.png)

## Project structure
1. library-service: The library microservice project
2. simple-library: 
3. HOWTO.md: A document describing problems encountered  + solutions adopted along the development of the application.

## How can i run the project?
1. Docker postgres container: docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password -v C:/postgres2:/var/lib/postgresql/data -p 5433:5432 postgres
2. cd library-service && yarn run start (to run the microservice)
3. cd simple-library && yarn run start (to run the simple-library API)
4. access localhost:5000/api to view the API documentation, powered by swagger
5. Access postman api collection [Postman Link](https://www.postman.com/matheuswoeffel/workspace/simplelibrary/collection/13236172-797bc1ed-9bdb-402b-8c16-87187cfea67d)

## Capabilities
The project consists of a CRUD library managing Books, which are objects with the following properties:
```javascript
class Book {
  title: string;
  synopsis: string | null;
  genres: string[]
}
```
- Create book
- Retrieve book by id
- Update book by id
- Delete book by id
- Retrieve all books
- EXTRA: Query for books of a given genre (sci-fi, horror, dystopias)...

## Further Work
- Explore the disacoplation between the API and microservice to insert another microservice with different databases, which enables us to switch between different databases without changing the API code.
- Implement a front-end client (possibly using React)


