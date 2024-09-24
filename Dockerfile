FROM harbor.strasbourg.cloud/dockerhub-proxy/nginx:alpine

ENV appDir /app

RUN mkdir ${appDir} &&\
    adduser www-data -G www-data -D &&\
    touch /var/run/nginx.pid && \
    chown -R www-data:www-data /var/run/ && \
    chown -R www-data:www-data /var/cache/nginx &&\
    chown -R www-data:www-data ${appDir}

COPY conf/nginx.conf /etc/nginx/
COPY --chown=www-data:www-data src ${appDir}

USER www-data

EXPOSE 8080

CMD ["/bin/sh", "-c", "nginx -g 'daemon off;'"]