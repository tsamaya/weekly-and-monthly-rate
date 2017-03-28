# weekly-and-monthly-rate
Convert between weekly rate and monthly rate

## Usage

install via `npm`

```shell
$ npm install weekly-and-monthly-rate
```

## API

TBD

## Samples

1.Convert weekly to monthly rate

```javascript
var rateConverter = require('weekly-and-monthly-rate');
rateConverter.ratePerMonth(300);
// 1300
```

2.Convert monthly to weekly rate

```javascript
var rateConverter = require('weekly-and-monthly-rate');
rateConverter.ratePerWeek(1300);
// 300
```

## How the calculation is made

>PCM = PW × 52 / 12

TODO:

>PW = PCM × 12 / 365.25 × 7

This means that to get the rental rate per week, the monthly value is multiplied by 12 to get the rent per year, then divided by 365.25 (the average number of days in a year, including leap years) to get the daily value, then multiplied by 7. To convert back into months, the reverse operation is applied.

## Building / testing

### Requirements
* [node](https://nodejs.org/), install node
* [gulp](http://gulpjs.com/), install gulp-cli with `npm install -g gulp-cli`

### Quick start
1. clone of fork the repo
1. cd `weekly-and-monthly-rate `
1. run `npm install`
1. run `gulp`

### test coverage

```shell
$ npm run-script test_coverage
```

## Issues
Find a bug or want to request a new feature? Please let me know by submitting an [issue](https://github.com/tsamaya/weekly-and-monthly-rate/issues).

## Contributing
Anyone and everyone is welcome to contribute.

1. Fork it ( https://github.com/tsamaya/weekly-and-monthly-rate and click "Fork" )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

## Resources
* [nodeJS](https://nodejs.org)
* [JQuery](https://jquery.com)
* [Bootstrap](http://getbootstrap.com/)
* [bootswatch paper](https://bootswatch.com/paper/)

## Licensing
Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
