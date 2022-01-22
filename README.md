# SimpleLibrary

A simple CRUD library implemented in [NestJS](https://nestjs.com/) following a microservice architecture.

# Architecture
To experiment with the microsservices architecture and implementation in NestJS, the application consists of an API which interacts with a microservice responsible for the database interaction with a [Postgres](https://www.postgresql.org/) relational database. The database is configured via [TypeORM](https://typeorm.io/#/) with the models being defined in the microservice.

![image](https://user-images.githubusercontent.com/37940382/150658479-d8311931-e618-42b7-b760-cd623403caf6.png)

# Project structure
1. library-service: The library microservice project
2. simple-library: 
3. HOWTO.md: A document describing problems encountered  + solutions adopted along the development of the application.

# How can i run the project?
1. Docker postgres container: docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password -v C:/postgres2:/var/lib/postgresql/data -p 5433:5432 postgres
2. cd library-service && yarn run start (to run the microservice)
3. cd simple-library && yarn run start (to run the simple-library API)
4. access localhost:5000/api to view the API documentation, powered by swagger
