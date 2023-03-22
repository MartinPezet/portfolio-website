# portfolio-website

This is the code for my personal portfolio website.

## Known Bugs

- #4 Can't access any session information outside of the success end point

## Notes for Next Session

- Keep Website Features up to date
- Changes to styles needed
- Number of users needed

- Adaption for large screens

### Google API Configuration
- Added App logo to Google API Consent Screen when completed
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
