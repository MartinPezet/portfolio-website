# portfolio-website

This is the code for my personal portfolio website.

## Notes for Next Session

- For projects you can use a prop for the component whether to have left or right image and use a useState hook to rerender it
- SSL Certificate for NGINX server
- Change article component to project
- Keep Website Features up to date
- Add Animations to all clickable links
- Changes to styles needed
- Sign In Popup needed
- Number of users needed

## Issues with current SSL

SSL certs can't be moved from host server and therefore cannot be accessed by the docker container
Could run the re cert everytime through docker

## Deployment

This project is going to be deployed using a docker image using nginx for natural load balancing, caching and general web serving ability

I am currently using GitHub Flow with being able to manually push to production using a GitHub Action

To deploy this app the following code is needed to be ran `docker run -d -p 80:80 martinpezet/portfolio-website:{version number from dockerhub}`

This will then run a docker container in the background
