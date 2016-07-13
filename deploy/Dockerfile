FROM node:latest

# Install base packages
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get -yq install ssmtp git

WORKDIR /app


RUN git clone https://github.com/flareair/hr_app.git ./ && git checkout tags/0.2.0


ENV PORT 80
ENV NODE_ENV production

RUN npm i

CMD npm start

EXPOSE 80