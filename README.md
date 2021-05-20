# Countdown Clone

A solo project to practice and improve my knowledge of the M.E.R.N stack. 
This web application imitates the design and features of the online countdown shop.


### Demo available at
> https://www.hashimkhanzada.com/

## Installation (Windows)

#### Pre-requisites
> [Node v14.*](https://nodejs.org/en/download/)
> [NPM].(https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

#### Steps
- Clone the repo
- Open the repo folder with the command prompt
- Download dependencies for client and server:
```cmd
cd client
countdown-clone-master\client> npm install
```
```cmd
cd server
countdown-clone-master\server> npm install
```
 

#### Change base URL to localhost
Connect the client to the local server by navigating to 
```
client\src\api\axios.ts
```

Change the baseURL on line 3 to `http://localhost:5002/api/`

#### Connect the server to your mongoDB database
Follow [these instructions](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb--how-to-get-connected-to-your-database) to create a mongodb cluster, and retrieve a connection string.
It should look like this

```
mongodb+srv://username:password@your-cluster-url/test?retryWrites=true&w=majority
```

Navigate to 
```
server\src\index.ts
```

On line 28:
```
.connect(process.env.CONNECTION_URL || "", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
```
enter your connection string inside the empty quotation marks

#### Run client:
```cmd
countdown-clone-master\client> npm start
```

#### Run server:
```cmd
countdown-clone-master\server> npm run dev
```
