# od-cli-api
## Local development
This project uses the `pnpm` dependency manager.
1. Run `pnpm install` to install dependencies.
2. Run `pnpm dev` to start the development server.
3. Access dev server on `localhost:3001`
4. Access prod server on `https://od-cli.onrender.com`

## Endpoints
### 1. Server health check
Endpoint: `/api/ping`

Method: `GET`

Response: `{
"message": "pong"
}`

### 2. Db version
Endpoint: `/db/version`

Method: `GET`

Response:
```
{
   "version": 62,
   "lastMigration": "20220411085539_add_fellow_to_company"
}
```

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