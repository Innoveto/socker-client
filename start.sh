cd /tmp

# try to remove the repo if it already exists
rm -rf socker-client; true

git clone https://github.com/Innoveto/socker-client.git

cd socker-client

npm install

bower install

grunt serve
