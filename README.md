# Weatherappfe

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## TODO

What's next?
- Retain previous searches and show them as options for the user to quickly / easily search on. Ie when user makes a successful weather search (no point saving search values that result in errors), save the search value somehow, and then when the search component loads, retrieve the list of saved searches. Two possible ways:  
    - at the client level, ie in the browser application data
    - at the API level, ie handled entirely by the API:
        - client will call API to get a list of saved searches
        - API will save a successful search, either as a successful search happens, or client explicitly calls API and says 'save this search'. First way breaks the REST principle but saves an API call.
- Improve search by city ui
    - Validate search field (eg blank)

## Tech Debt

- Config (eg urls)
- Logs
- Write a url concat helper - this is a good one to help avoid issues where you 