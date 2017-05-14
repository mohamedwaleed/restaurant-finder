# Restaurant-finder
Website for helping tourists to find the nearby restaurants 
# Getting Started
1- Restaurant-client.
* [Configuring Project](#Restaurant-client)
* For testing and building the project, Please read [Grunt Tasks](#Grunt-Tasks).
* Deployment

2- Restaurant-server.
* [Configuring Project](#Restaurant-server).
* Testing and building the project.
* Deployment

3- Integration with jenkins.

1- Restaurant-client :
--------------------
Configuring Project
--------------------
Required software: NodeJS, Node Package Manager, Grunt, Yeoman, Bower.
Install NodeJS and npm according to your operating system.
Then run the following commands

    npm install -g grunt-cli bower

After cloning the repository, you need install the neccessary node modules and bower libraries by running these commands inside **restaurant-client** folder.

    npm install
    bower install
    
**Then run all the tests and a complete build to ensure that the project is configured correctly**, Check [Grunt Tasks](#grunt-tasks).

Grunt Tasks
--------------
    grunt test                  # Run all unit tests
    grunt serve                 # Run the server on port 9000
    grunt build                 # Build a distrubtable version
    grunt jshint:all            # Run jshint for project files
	grunt			# Run all unit tests and build a distrubtable version

Deployment
--------------
Install **nginx** in the machine that you want to deploy and make sure that it is running.
Run the follwing command 
    
    grunt build

This command will create a folder called **dist** that has all nessesary files to deploy the appliation but there 3 more steps you have to do : 
- copy **bower_component** folder to **dist** folder.
- open original index.html file and copy all link tags that is exist in the head tag and past them in index.html inside the **dist** folder
- copy the dist folder to nginx directory ( in linux /var/www/html )

You can rename your folder to whatever you want.
access the apppliation by goto the following address : 
http://{domain}/{folder name} -> in our case **dist**



2- Restaurant-server :
--------------------
Configuring Project
--------------------
Required software: NodeJS, Node Package Manager, mongodb.
Install NodeJS and npm according to your operating system.
Install mongodb according to your operating system.
**Make sure that mongo authentication is disabled**
**Make sure that mongo database is up**
After cloning the repository, you need install the neccessary node modules by running these commands inside **restaurant-server** folder.

    npm install
    
Testing and building the project.
----------------------------------
Run the following command to start the server on port 3000 :
    
    npm start
    
For running the unit tests run the following command: 

    npm test
    
Deployment
------------
Install **nginx** in the machine that you want to deploy and make sure that it is running.
We will use nginx as a reverse proxy to our appliation server.
Run the following command : 
    
        npm start

The server will be up on port 3000
Then we want to tell nginx to redirect any request to /app to out application server and here the reverse proxy come to play.
Good link for setup nginx reverse proxy :
[nginx reverse proxy](https://www.nginx.com/resources/admin-guide/reverse-proxy/)

Integration with jenkins
-------------------------
* Add new project in jenkins, point to github repository
* Choose build trigger : **GitHub hook trigger for GITScm polling**
* Add 5 build step as the following :    
    - cd restaurant-server , npm install.
    - cd restaurant-client , npm install, bower install.
    - cd restaurant-server, npm test.
    - cd restaurant-client, grunt test.
    - cd restaurant-client, grunt jshint:all.
* Also you can increase number of build steps for automated deployment.

