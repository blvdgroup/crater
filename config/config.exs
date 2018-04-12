# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
#
# Note that some secret keys are already set. I know, but this
# is in most part okay, since we set our *actual* production
# keys inside `config/prod.secret.exs`
use Mix.Config

# General application configuration
config :crater, ecto_repos: [Crater.Repo]

# Configures the endpoint
config :crater, CraterWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "r1rx/7RF5nHDxbxoH046bSPu3md0s2MWIXCGC5siVY4Gyr3rw7xjHs5eY7L/6rh4",
  render_errors: [view: CraterWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Crater.PubSub, adapter: Phoenix.PubSub.PG2]

config :crater, CraterWeb.Auth.Guardian,
  issuer: "crater",
  secret_key: "LWnS4L4hI0Vhm3k+VvfOt9CgOElgf+XvrsfChlQlz1mhkRtEXHYz7KA2DWdrqhd8"

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
