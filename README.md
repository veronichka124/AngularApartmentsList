# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.1.

## Environment Variables

To run this project, you will need to add the following environment variables

### Adding Environment Variables

1. **Create Environment Files:**
   - In terminal run  ``` ng g environments ```

2. **Define Environment Variables:**
   - Open each environment file and define your environment variables.
  ```typescript
  // src/environments/environment.ts
    export const environment = {
    production: false,
    unsplash: {
      UNSPLASH_ACCESS_KEY: 'YOUR_ACCESS_KEY',
      UNSPLASH_SECRET_KEY: 'YOUR_SECRET_KEY',
      UNSPLASH_URL: 'https://api.unsplash.com',
    },
  };
  
  ```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
