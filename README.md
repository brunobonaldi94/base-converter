# Base Converter API

Base Converter API is a project that allow you to convert number in from one base to another base. 
The available bases are: binary, octal, decimal and hexadecimal.

You can check the project deployed on: https://base-converter-api.herokuapp.com/
## Motivation

I participated on 42 Sao Paulo basecamp held on Jan-Feb - 2022 and I would like to see if it would be possible to integrate C lang (which is the language taught during Basecamp) with Node and React.
## Description

The application has a form with 3 field:
* 1st field - Input: Add the number you would like to convert
* 2nd field - Select: Select the base - From 
* 3rd field - Select: Select the base - To

Then, click on convert and you'll see the result below the form. 

The Project was developed using:

* Front-End: React and Styled Components
* Back-End: Node
* C lang Integration: the main function that convert numbers is written in C lang and it was connected with Node using Node-Api (https://nodejs.org/api/n-api.html#node-api)
## To run locally

* First, run `npm run install_local` 
* Then, run `npm run dev` 
