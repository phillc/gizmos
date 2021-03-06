## Cycle - a Javascript implementation of Rails' Text Helper

Built to ease zebra-striping a table. I've avoided any JS library-provided niceties to maximize portability.

Basic usage:

    >>> Cycle.thru('one', 'two');
    "one"
    >>> Cycle.thru('one', 'two');
    "two"
    >>> Cycle.thru('one', 'two');
    "one"
    
Passing an object literal containing a name property allows for reset functionality:
    
    >>> Cycle.thru('one', 'two', 'three', {name: 'numbers'});
    "one"
    >>> Cycle.thru('one', 'two', 'three', {name: 'numbers'});
    "two"
    >>> Cycle.reset('numbers');
    >>> Cycle.thru('one', 'two', 'three', {name: 'numbers'});
    "one"