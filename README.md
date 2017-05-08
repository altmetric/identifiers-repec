# Identifiers - RePEc IDs [![Build Status](https://travis-ci.org/altmetric/identifiers-repec.svg?branch=master)](https://travis-ci.org/altmetric/identifiers-repec)

Extract, validate and normalize [RePEc IDs](https://en.wikipedia.org/wiki/Research_Papers_in_Economics).

**Current version:** 0.1.0  
**Supported Node.js versions:** 4, 5, 6, 7

## Installation

Add the following to your `package.json` via `yarn add identifiers-repec` or `npm install --save identifiers-repec`:

```shell
"identifiers-repec": "^0.1.0"
```

## Usage

```javascript
const repec = require("identifiers-repec");

repec.extract("REPEC:wbk:wbpubs:2266\nrepec:inn:wpaper:2016-03");
//=> ["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]
```

## Other versions

We also maintain versions of this library for [Ruby](https://github.com/altmetric/identifiers) and [PHP](https://github.com/altmetric/php-identifiers).

## License

Copyright © 2017 Altmetric LLP

Distributed under the [MIT License](http://opensource.org/licenses/MIT).
