# DockerLumen

Sample [Lumen](https://lumen.laravel.com/) Application running on Docker services.

Docker containers are based on [Alpine Linux](https://www.alpinelinux.org/about/) images which makes them smaller, more secure and more resource efficient.

## Requirementes

You will need to install these programs:

- [Git](https://git-scm.com/downloads).
- [Docker](https://www.docker.com/get-docker).
- [Docker Compose](https://docs.docker.com/compose/install/).

## Set up

Clone this repository

    git clone https://github.com/Stolz/DockerLumen.git && cd DockerLumen

Install Lumen dependencies

    docker run --rm --interactive --tty --volume $PWD/lumen:/lumen --user $(id -u):$(id -g) composer install --ignore-platform-reqs --no-dev --no-suggest --classmap-authoritative --working-dir=/lumen

Build and start the containers

    docker-compose up --build

## Debugging

These two files have been included only for debugging purposes and they should be deleted for production enviroment:

- lumen/public/phpinfo.php
- [lumen/public/adminer.php](https://www.adminer.org/)

You can visit the database panel at <http://localhost/adminer.php?pgsql=db&username=lumen&db=lumen&ns=public>. The default database password is `secret`.
