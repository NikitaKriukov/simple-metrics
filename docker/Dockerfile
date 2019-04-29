FROM openjdk

MAINTAINER <nikita.krjukov@gmail.com>

RUN mkdir /appl
COPY appl /appl
RUN chmod +x /appl/start.sh

CMD bash -c "cd /appl && ls -la && ./start.sh"

EXPOSE 8080


