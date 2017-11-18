FROM php:fpm-alpine

# Create webroot
RUN mkdir -p /lumen/public && echo 'Lumen volume not mounted' > /lumen/public/index.php && chown -R www-data:www-data /lumen

# Install PostgreSql PHP extension
RUN apk --no-cache add postgresql-dev && docker-php-ext-install pdo_pgsql

# Install Supervisor
RUN apk --no-cache add supervisor && mkdir -p /etc/supervisor.d/ /var/log/supervisor

# Supervisor will run both PHP-FPM and Lumen queue workers
WORKDIR /lumen
CMD ["supervisord", "--nodaemon", "--configuration", "/etc/supervisord.conf"]
