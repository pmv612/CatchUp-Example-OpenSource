# CatchUp

## Summary
CatchUp News project, illustrating how to fetch and present news from a news service, with news source logo obtained from a third-party service. The project is developed using Angular Framework, TypeScript, and Angular Material UI Library. The project also includes support for internationalization, with the possibility of language switching between English and Spanish.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.3.

## Pre-requisites
- Node.js
- Angular CLI
- News API Key

## Dependencies
- Angular
- Angular Material
- NGX-Translate

## External Services
- News API
- Clearbit Logo API

## Angular Commands
```
> ng new catch-up --no-standalone
> ng add @angular/material
> ng g s shared/services/LogoApi
> ng g class news/model/ArticleEntity
> ng g class news/model/SourceEntity
> ng g s news/services/NewsApi
> ng g c news/components/ArticleList
> ng g c public/components/FooterContent
> ng g c public/components/SideNavigationBar
> ng g c news/components/SourceListItem
> npm i @ngx-translate/core @ngx-translate/http-loader
> ng g c public/components/LanguageSwitcher
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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
