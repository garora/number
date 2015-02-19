'use strict';

var isNumber = require( './../lib' );

console.log( isNumber( 5 ) );
// returns true

console.log( isNumber( new Number( 5 ) ) );
// returns true

console.log( isNumber( NaN ) );
// returns false