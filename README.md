# Countries Info 🎉
<p align="center">
  <a href="https://github.com/vivek1996/rest-countries/issues"><img src="https://img.shields.io/github/issues/vivek1996/rest-countries.svg?style=flat-square" alt="GitHub issues"></a>
  <a href="https://github.com/vivek1996/rest-countries/network"><img src="https://img.shields.io/github/forks/vivek1996/rest-countries.svg?style=flat-square" alt="GitHub forks"></a>
    <a href="https://github.com/vivek1996/rest-countries/stargazers"><img src="https://img.shields.io/github/stars/vivek1996/rest-countries.svg?style=flat-square" alt="GitHub stars"></a>
  <a href="https://david-dm.org/vivek1996/rest-countries"><img src="https://david-dm.org/vivek1996/rest-countries.svg" alt="DEPENDENCIES"></a>
  <a href="https://snyk.io/test/github/vivek1996/rest-countries"><img src="https://snyk.io/test/github/vivek1996/rest-countries/badge.svg?style=flat-square" alt="Known Vulnerabilities" data-canonical-src="https://snyk.io/test/github/vivek1996/rest-countries" style="max-width:100%;"></a>
  <a href="https://github.com/vivek1996/rest-countries"><img src="https://forthebadge.com/images/badges/built-with-love.svg" alt="forthebadge"></a>
</p>
Shows Info of the countries in a specific region and specific country. Using the [Restcountries API](https://restcountries.eu/) .

# Installation :

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## [](https://github.com/vivek1996/rest-countries#build)Build 🔧

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Description

The app has 3 views such as **All region view** , **All countries view** and **Single Country view**.

#### All region view :

The All region view is the homepage and it contains the option to select the regions. Clicking this region will navigate to the All countries view with respective region .

#### All countries view :

The all countries view has list of all countries in the selected region. This view displays countries in format of bootstrap cards with country flags as the image of the card and displays only the important details of that particular country like Name, Capital, timezone,Currency, Subregions etc. On clicking on a particular country, a detailed view of that country is opened.

#### Single country view :

This view uses the flag of the country as cover image and display all the information about the countries in different and well differentiated sections of the page.

## Options :

**Currency Filter** : On clicking on currency name in any of the above view, all
countries view is opened again but this time with a currency filter applied. I.e
it will display that currency filter has been applied, show the selected currency
and will should the country list which have the same currency (irrespective of the region).
**Language Filter** - On clicking a particular language in any of the above views, All countries view will open again, but this time with a language filter applied. I.e it will display the countries which have the selected language (irrespective of the region).

> All countries view has the option to search for the country with its name and sort the list with timezone, language, subregion.

> Service Workers are used for offline compatibility 🔥 .

## TODO

- [x] Add Service Worker

For any other features rise an issue .
