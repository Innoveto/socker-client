FROM ubuntu:13.10

# Enable EPEL for Node.js
RUN apt-get update

# Install Node.js and npm
RUN apt-get install -y nodejs npm git git-core

ADD start.sh /tmp/

RUN chmod +x /tmp/start.sh

CMD ./tmp/start.sh

EXPOSE  2001
