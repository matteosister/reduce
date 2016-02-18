ExUnit.start

Mix.Task.run "ecto.create", ~w(-r Reduce.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r Reduce.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(Reduce.Repo)

