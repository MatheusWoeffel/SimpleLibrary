# SimpleLibrary

A simple CRUD library implemented in [NestJS](https://nestjs.com/) following a microservice architecture.

# The architecture
To experiment with the microsservices architecture and implementation in NestJS, the application consists of an API which interacts with a microservice responsible for the database interaction with a [Postgres](https://www.postgresql.org/) relational database. The database is configured via [TypeORM](https://typeorm.io/#/) with the models being defined in the microservice.

![image](https://user-images.githubusercontent.com/37940382/150658479-d8311931-e618-42b7-b760-cd623403caf6.png)
