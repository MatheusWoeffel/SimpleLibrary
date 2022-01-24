# 1. Setup postgres on docker
` docker run -d --name dev-postgres -e POSTGRES_PASSWORD=password -v C:/postgres2:/var/lib/postgresql/data -p 5433:5432 postgres`

user: postgres
password: postgres

# 2. Create table with typeorm
yarn add @nestjs/typeorm
yarn add pg -> driver do postgres

1. Criar module e definir classe entity.
2. Usar o TypeOrmModule.ForRoot e configurar conexão do banco, referenciar entity


# 3. Use a service defined in another module that uses a TypeORM repository
https://stackoverflow.com/questions/64282183/nestjs-cant-inject-a-repository-from-a-different-module

# 4. Return different status code on exceptions
Try/Catch + HttpExceptions:
```javascript
throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: "There's no book with the given id.",
      }, HttpStatus.NOT_FOUND);
```

# 5. Payload vazio ao enviar mensagens
You can't send null or undefined payloads to microservices, you can, instead, send empty objects.
```javascript
const result = this.client.send<BookDto[]>({cmd: "getAllBooks"}, {});
```

# 6. Application hanging when using Redis transporter
You must use the same redis package version on both the client and api. Also, the version must be redis@3, as noted in https://docs.nestjs.com/microservices/redis
