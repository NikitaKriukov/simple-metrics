#Simple REST Monitoring service

## General idea
The service is a REST application. It can be started at a computer 
and can provide 2 metrics: 
- System CPU utilization (%)
- Java VM Memory utilization (%)

The metrics data can be accessed remotely with a simple web application. 
Such way the metrics can be seen remotely. It allows watching how much a remote computer is loaded. 

The solution is done in education purposes, so it isn't suppose security measures.  

## Design description
The application consists of 2 components - backend and frontend. 
The backend part is implemented with as a Java application with embedded 
Jetty server. It should be started on the target computer in order to start 
providing the metrics from it. The application REST API is accessible on port 8080.

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

## How to start backend? 
The application is provided as a ZIP. Here below the steps to start it:
- unpack the ZIP 
- open a terminal inside of the root directory ./appl 
- there is a start.sh (or start.bat) starting script. 
It's necessary to start it in the terminal. 

In order to stop the application just press Ctrl+C in the terminal and press Y when it's prompted. 

