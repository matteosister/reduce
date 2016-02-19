FROM msaraiva/elixir-dev:1.2.2

RUN apk update && apk add nodejs inotify-tools

WORKDIR /code
RUN mix local.hex --force && mix hex.info
RUN mix local.rebar --force
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

CMD ["/entrypoint.sh"]
