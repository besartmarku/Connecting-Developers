# Connecting-Developers
Small social network app built to help Developers communicate, share, post beetwen each-other 

## Quick Start

```bash
# Install dependencies for server
npm install

# Install dependencies for client
npm run client-install

# Run the client & server with concurrently
npm run dev

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

You will need to create a keys_dev.js in the server config folder with

```
module.exports = {
  mongoURI: 'YOUR_OWN_MONGO_URI',
  secretOrKey: 'YOUR_OWN_SECRET'
};
```

# Features
This application includes:
* Create a Developer Account
* Edit Profile
* List all Developers account
* View each developer account and github repos
* Creating Posts
* Replying to Posts etc
 
# Used technologies
* Nodejs / Express
* React
* Redux
* MongoDB
* Mongoose
* Redux-thunk

