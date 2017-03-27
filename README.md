# weekly-and-monthly-rate
Convert between weekly rate and monthly rate

## Usage

install via npm

```shell
$ npm install weekly-and-monthly-rate
```

1.Convert weekly to monthly rate

```javascript
var rateConverter = require('weekly-and-monthly-rate');
var monthlyRate = rateConverter.ratePerMonth(300);
// 1300
```

2.Convert monthly to weekly rate

```javascript
var rateConverter = require('weekly-and-monthly-rate');
var monthlyRate = rateConverter.ratePerWeek(300);
// 300
```

### Requirements
* [node](https://nodejs.org/), install node
* [gulp](http://gulpjs.com/), install gulp-cli with `npm install -g gulp-cli`

### Quick start
1. clone of fork the repo
1. cd `weekly-and-monthly-rate `
1. run `npm install`
1. run `gulp`

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
* [JQuery](https://jquery.com)
* [Bootstrap](http://getbootstrap.com/)
* [bootswatch paper](https://bootswatch.com/paper/)

## Licensing
Licensed under the MIT License

A copy of the license is available in the repository's [LICENSE](LICENSE) file.
