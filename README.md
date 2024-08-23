#Note: this project setup works with server1-UI-code setup available in my other repository , please check with server-1-ui code setup first
#steps to install nodejs in amazon linux os
sudo yum update -y
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
node -v
npm -v

#project structure
api-backend/
├── index.js
├── node_modules/
├── package-lock.json
├── package.json
└── README.md
Nginx Configuration
You already set up Nginx on the frontend server. For completeness, ensure your Nginx configuration (frontend.conf) correctly proxies requests to your backend API server.

Make sure to replace <server1-UI-public-ip> and <server2-API-private-ip> with the actual IPs.

#Navigate to Your Backend folder
cd /path/to/api-backend

#yeah you can install dependencies
npm install
npm start

start the backends server browse it via the <public ip>:3000




#to run in background, use below one 
nohup node index.js > backend.log 2>&1 &

or if you can use below one also

Using pm2 (recommended for better management):
npm install -g pm2
pm2 start index.js --name backend-api
pm2 save


if suppose your backend public ip sometimes wont works after configuring it from frontend so that's beacuse backend port is running with PID 
sudo lsof -i :3000
we need to delete that ID 
[root@ip-172-31-20-254 api-backend]# sudo lsof -i :3000
COMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF NODE NAME
node    31097 root   19u  IPv6  55426      0t0  TCP *:hbci (LISTEN)

sudo kill -9 <PID>
delete that ID and run
npm start 
that's all 
copy the public IP and browse it :3000
