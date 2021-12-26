FROM mysql:5.6

ENV TZ Asia/Tokyo
ENV MYSQL_ROOT_PASSWORD=password

COPY 01_init_db.sql /docker-entrypoint-initdb.d/01_init_db.sql
COPY ./my.cnf /etc/mysql/my.cnf
