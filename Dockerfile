# Utiliser une image Apache officielle avec PHP (si nécessaire)
FROM php:8.1-apache

# Copier les fichiers de votre projet dans le répertoire racine du serveur Apache
COPY ./ /var/www/html/

# Donner les permissions nécessaires pour Apache
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Exposer le port 80 pour le serveur HTTP
EXPOSE 80

# Lancer le serveur Apache
CMD ["apache2-foreground"]
