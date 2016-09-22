# README

This project is in extreme early alpha. If you'd like to contribute fork and clone this repo

## Setup:

```bash
$ bundle && npm install
$ rake db:create migrate seed
$ foreman start -f Procfile.dev
```

Login as any user in seed file (ex. user: user1@email.com, password: password)
and visit http://localhost:3000/home
