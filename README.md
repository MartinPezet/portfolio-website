# portfolio-website

This is the repo for Martin Pezet's personal portfolio website.

## Known Bugs

- #4 Can't access any session information outside of the success end point

## Notes for Next Session

- Make website responsive
- Create content for About me section
- Redo footer
- Fix favicon font
- Style all sections (Doesn't need to look amazing duie to restyle)
- Fix Modal implementation

## Features for future

- Email server
- Download CV
- Reskin website
    - Bouncing around Skills that are interactive (like pong)

### Google API Configuration

- Add App logo to Google API Consent Screen when completed
- Change Google API Domains when deploying

### Other OAuth providers to include

- Facebook
- Github
- Microsoft Azure

## Deployment

This project is going to be deployed using a docker image using nginx for natural load balancing, caching and general web serving ability

I am currently using GitHub Flow with being able to manually push to production using a GitHub Action

To deploy this app the following code is needed to be ran `docker run -d -p 80:80 martinpezet/portfolio-website:{version number from dockerhub}`

This will then run a docker container in the background
