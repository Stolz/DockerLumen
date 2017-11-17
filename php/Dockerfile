FROM php:fpm-alpine

# Install PostgreSql PHP extension
RUN apk --no-cache add postgresql-dev && docker-php-ext-install pdo_pgsql

# Install Supervisor
RUN apk --no-cache add supervisor && mkdir -p /var/log/supervisor
COPY supervisord.conf /etc/supervisord.conf

# Configure PHP FPM
COPY php-fpm.conf /usr/local/etc/php-fpm.conf

WORKDIR /lumen

# Supervisor will run both PHP-FPM and the queue workers
CMD ["supervisord", "--nodaemon", "--configuration", "/etc/supervisord.conf"]
