# od-cli-api
## Local development
This project uses the `yarn` dependency manager.
1. Run `yarn install` to install dependencies.
2. Run `yarn dev` to start the development server.
3. Access server on `localhost:1337`
## Endpoints
### 1. Server health check
URL: `http://localhost:1337/api/ping`

Method: `GET`

Response: `{
"message": "pong"
}`

## Adding an endpoint
Endpoint consists of a route and a handler.
Route specifies method and endpoint. Handler
specifies how the request is handled. Route
then implements the handler. Finally, the route
is added to the server.

1. Create a new controller in `source/controllers`. Check existing controller as an example.
2. Create a new route in `source/routes`. Check existing route as an example.
3. Add the controller to the new route.
4. In `source/server.ts` add the new route.
   1. Search for `router.use('/api/`
   2. Add the new route.