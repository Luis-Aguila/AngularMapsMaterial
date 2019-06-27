<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
</head>
<body>
	<p align="center"><img src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/Angular-maps.png" alt="Logo/Imagen Proyecto" width="150px" height="150px"></p>
	<h1 align="center">Mapas de Angular-Maps</h1>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/angular.png" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/html5.png" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/Angular-maps.png" alt="Imagen 3">
        </td>
        <td align="center" valign="middle">
          <img width="222px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-tecnology/material-design.png" alt="Imagen 4">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>
	<h3>Introducción</h3>
  <p>Este sistema esta creado con la finalidad de trabajar con los mapas de google maps, implementandolo a un proyecto desarrollado en angular, para este motivo se utilizo Angular-maps desde https://angular-maps.com/ y los estilos se trabajaron implementando Material Design desde la página https://material.io/design/.</p>
  <p>El sistema consiste en la visualización de un mapa y la gestión de marcadores dentro del mismo, al momento de seleccionar una ubicación del mapa, se generara un nuevo marcador, el cual se podra editar y almacenar en el LocalStorage.</p>
  <p>Para la implementación de este sistema, se tuvo que trabajar con los mapas de google, apuntandonos en u sitio web como desarrollador, una vez realizado este paso, obtendremos una clave api (ApiKey) para el desarrollo de nuestro proyecto, luego se importan desde el archivo de modules.ts nuestro componente a importar "AgmCoreModulev" y en el apartado de imports, declaramos dicho componente adjuntandole nustra apikey.</p>
  <p>Para este proyecto se utilizaron 2 componentes, uno para visualización y gestion del mapa y el siguiente para la modificación de la información de los marcadores, a su vez para esto ultimo, se utilizo una pequela clase para el control de la información.</p>
  <h3>Información del Proyecto</h3>
  <p>Proyecto desarrollado a modo de aprendizaje en cursos guiados.</p>
	<h3>Objetivo</h3>
  <ul>
    <li>Utilización de mapas en Angular.</li>
    <li>Utilización de Material Design en los estilos del sistema.</li>
    <li>Utilización de LocalStorage para el guardado de los marcadores</li>
  </ul>
	<h3>Tecnologías</h3>
  <ul>
    <li>Angular 2+</li>
    <li>Material Design</li>
    <li>Mapas de Google (Angular-maps)</li>
    <li>LocalStorage</li>
  </ul>
	<h3>Componentes</h3>
  <ul>
    <li>Mapa</li>
    <li>mapa-editar (Se editan los marcadores)</li>
  </ul>
	<h3>Vistas del sistema</h3>
  <table>
    <tbody>
      <tr>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/Mapas/index1.PNG" alt="Imagen 1">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/Mapas/index2.PNG" alt="Imagen 2">
        </td>
        <td align="center" valign="middle">
          <img width="300px" src="https://github.com/Luis-Aguila/Contenido/blob/master/assets/img-proyect/Mapas/index3.PNG" alt="Imagen 3">
        </td>
      </tr><tr></tr>
    </tbody>
  </table>

	




</body>
</html>



# Mapas

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).