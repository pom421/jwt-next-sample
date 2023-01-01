## How to use JWT for authentication in Next.js

### Features

- Jsonwebtoken only used (no Passport)
- token stored in cookie
- check the token in every page who needs to


```js
yarn # to install
yarn dev # to run on http://localhost:3001
```

## How it works

1. on the index.js page, the user fills his authentication data
1. onSubmit calls the login API endpoint, which sign a JWT token with an secret key and an expiration time. The token, as well as the user info (non private ones), is returned to the API caller
1. if the authentication is correct, the router accepts to lead the user to the homepage.js
1. this page makes a verification in the getInitialProps (Server or client side routing): it calls an API endpoint to check if the token is valid. If not, it displays an error.

--- 
Edit 2022 : 

The cookie with token should be set by the backend and not in the frontend, like it is presented here.
See https://github.com/SocialGouv/medle/blob/master/src/pages/api/login.js.
