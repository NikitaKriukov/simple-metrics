#Simple REST Monitoring service

## General idea
The service is a REST application. It can be started at a computer 
and can provide 2 metrics: 
- System CPU utilization (%)
- Java VM Memory utilization (%)

The metrics data can be accessed remotely with a simple web application. 
Such way the metrics can be seen remotely. It allows watching how much a remote computer is loaded. 

The solution is done in education purposes, so it isn't suppose security measures. 
Also be aware that the memory utilization shows only Java VM memory. 
But technically it's not a problem to take OS memory utilizatoin. The required information can be taken through JMX with the same MBean which is used for getting CPU utilization data: com.sun.management.OperatingSystemMXBean

## Design description
The application consists of 2 components - backend and frontend. 
The backend part is implemented with as a Java application with embedded 
Jetty server. It should be started on the target computer in order to start 
providing the metrics from it. The application REST API is accessible on port 8080. 
The frontend part is implemented with React JS library. 

## How to use?
The metrics can be got either directly or with web front-end application. 
Here are the commands to get instant metrics values with CURL:
- curl http://localhost:8080/usage/cpu
- curl http://localhost:8080/usage/memory

The ```localhost``` domain name can be changed correspondingly. 

Another way to watch the metrics is to open them with web frontend application. 
Open the page http://localhost:8080/ with a web browser. The page shows current 
instant values of the both metrics. The values are updated automatically. 
The CPU utilization is updated each second. The memory utilization is updated each 5 sec.

## How to build and start backend? 
At first run ```gradle clean build```. It with copy all required files to the docker/appl directory. 

One way to start the application is to go to the directory and run the start.sh. The directory docker/appl must be current. 
- open a terminal
- cd ./docker/appl
- ./start.sh

Another way is to start application from docker container. 
- open a terminal 
- cd ./docker 
- ./buildDocker.sh  -- it will create a new Docker image
- ./runDocker.sh    -- it will start a new Docker container from the generated image. 

After the backend part is started, just open http://localhost:8080/ at a browser. You can note that the application start showing CPU and Memory utilization metrics. 

In order to stop the application just press Ctrl+C in the terminal and press Y when it's prompted. 
You can note that the metrics now show N/A.
