# README

Here is blog https://www.sanketkarve.com/blog/vue-rails-integration/
to understand how to integrate Vue.js and Rails 5

## Prerequisites for webpacker gem

* Ruby 2.2+
* Rails 4.2+
* Node.js 6.0.0+
* Yarn 0.25.2+

## How to use it:
1. Clone the repository
2. Install bundles

```
  bundle install
```

3. Setup Database
  ```
    rails db:setup
    rails db:migrate
  ```

4. Install webpacker
  ```
    bundle exec rails webpacker:install
  ```

5. Start the Server:

  Starting Rails Server
  ```
    rails s
  ```
  Starting webpack dev server on other terminal
  ```
    ./bin/webpack-dev-server
  ```

* NOTE: You can use gem liske formen to start rails and webpacker server

##Reference website:

- https://github.com/codahale/bcrypt-ruby
- https://github.com/rails/webpacker
- https://vuejs.org/v2/guide/index.html
