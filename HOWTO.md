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