# README

Visualization of data from Mongo DB

## Bootstrapping using Docker

1. Install [Docker](https://docs.docker.com/) and [Docker-Compose](https://docs.docker.com/compose/install/);
2. Create `.env`, `database.yml` from related `.example` files and set all needed variables;
3. Create `docker-compose.override.yml` file and copy the code from `docker-compose.development.yml`;
4. Create `backend-modules` volume:

  ```bash
  docker volume create --name=backend-modules
  ```  
5. Run:

  ```bash
  docker-compose up
  ```
6. Create development & test Postgres db's:

  ```bash
  docker-compose exec web rake db:create
  ```

## Useful gems

1. [Brakeman](https://github.com/rubysec/bundler-audit): analyse possible security vulnerabilities.
   Run `docker-compose exec web brakeman` or `docker-compose exec web brakeman -o brakeman.html` (for HTML output).
2. [Bundler-audit](https://github.com/rubysec/bundler-audit): check for vulnerable versions of gems & other helpful staff.
   Run `docker-compose exec web bundle-audit update && docker-compose exec web bundle-audit check` for security check.
3. [Rails Best Practicies](https://github.com/flyerhzm/rails_best_practices): is a code metric tool to check the quality of Rails code.
   Run `docker-compose exec web rails_best_practices .` or `docker-compose exec web rails_best_practices -f html .` (for HTML output).
4. [Rubocop](https://github.com/bbatsov/rubocop): check ruby style writing code
   Run `docker-compose exec web rubocop`

