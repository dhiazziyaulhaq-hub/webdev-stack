
FROM php:8.3-apache

# Mengaktifkan ekstensi database PHP
RUN docker-php-ext-install mysqli pdo pdo_mysql

# Direktori kerja aplikasi
WORKDIR /var/www/html

# Port Apache
EXPOSE 80
