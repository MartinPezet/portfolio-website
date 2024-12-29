# portfolio-website

This is the repo for Martin Pezet's personal portfolio website.

## Notes for Next Session

- Deploy

## Features for future

- On Scroll the titles have a more intensifying background gradient
- Bouncing around Skills that are interactive (like pong)
- Project window buttons do things
- Experience cards can be flipped to reveal key projects I undertook
- Changing emphasis font easter egg

### Google API Configuration

- Add App logo to Google API Consent Screen when completed
- Change Google API Domains when deploying

## Deployment

This project is going to be deployed using a docker image using nginx for natural load balancing, caching and general web serving ability

I am currently using GitHub Flow with being able to manually push to production using a GitHub Action

To deploy this app the following code is needed to be ran `docker run -d -p 80:80 martinpezet/portfolio-website:{version number from dockerhub}`

This will then run a docker container in the background
