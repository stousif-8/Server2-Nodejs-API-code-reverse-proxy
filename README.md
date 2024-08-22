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
