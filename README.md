# crater

> 🚀 place to put your code in

**This project is in a pre-alpha state. Until such point that crater is marked "stable" and/or "ready for production," nothing from this repository should be used in a production environment.**

## getting started

Requirements:

* [Elixir](https://elixir-lang.org/install.html) (v1.6+)
* [Node.js](https://nodejs.org/en/) (v8.0+)
* [Yarn](https://yarnpkg.com/en/) - optional. you can use `npm` if you want to, but it's for your own sanity.

## phoenix side (backend)

```bash
# install dependencies
mix deps.get

# run the database migration
mix ecto.setup

# start the server
mix phx.server
```

your API server is now live at [`localhost:4000`](http://localhost:4000)

## react side (frontend)

the React frontend is stored in the `priv/crater-web` directory, so `cd` there first.

```bash
cd priv/crater-web
# install dependencies
yarn # or `npm install`

# start the development server
yarn start # or `npm start`
```

your frontend is now live at [`localhost:3000`](http://localhost:3000). all API requests will be proxied to port 4000.
