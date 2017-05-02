# javascript-exercises

Coding exercises in JavaScript.  For practice, for fun or for showing you belong to `/r/iamverysmart`.  


## Getting Started

Download or clone the repo to your local.  Go into the directory and run `npm install`, once complete you can run tests in the appropriate directories.  Some directories won't have test files, so you should just browser the `README` file for the question/challenge.

Your terminal should look something like below from the initial install to your first test run.

```bash

$ git clone https://github.com/markehost/javascript-exercises
$ cd javascript-exercises
$ npm install
$ cd factorial
$ npm test

```


This uses a TDD approach, look at the `test.js` file in each directory to see what needs to be implemented, write an index.js as the solution file.  If there is no test file look at the `README` for the question/challenge.


## Contributing 

If you're want to contribute please adhere to the current structure.

1. Create a directory
2. Copy the contents from `/factorial` as a template (package.json, README.md & test.js).
3. Modify the test file for your use case
4. Provide as much detail in the `README` as you can.  Try explaining what you're looking for in an answer.
5. (optional) Provide a solution in the `solutions` branch with passing test cases or a detailed answer in teh `README`.



##### Credits

I used this project https://github.com/kolodny/exercises as a structural example.  I wanted to do things a little different so I didn't fork the repo, but it's worth checking out for some solid JavaScript functions that [lodash](https://lodash.com/) and [underscore](http://underscorejs.org/) abstract away from us. 