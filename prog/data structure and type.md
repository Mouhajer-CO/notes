# Data Type and Structure

Data types deal with the classification and representation of individual data items, while data structures focus on how to organize and store multiple data items in a way that facilitates efficient operations and algorithms.

Data types are the building blocks for constructing data structures, as the choice of data types used in a data structure influences its behavior and performance.

## Data Type

Data type is a classification of data based on the type of value it holds. It defines the constraints on the data and the set of operations that can be applied to them.
Data types determine how the data is stored in memory and the constraints on the data, such as the range of values it can hold and the operations that can be performed on it. Link to [MDN Data Type](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_overview#data_types)

| Primitive Type | Description                                  |
| -------------- | -------------------------------------------- |
| `Number`       | Double precision floating-point              |
| `BigInt`       | Integers with arbitrary magnitude            |
| `String`       | Series of characters                         |
| `Boolean`      | `true` or `false`                            |
| `undefined`    | undefined                                    |
| `null`         | Null                                         |

### String type

**String** type represents textual data, each element in the string occupies a position in the string. The first element is at index 0, the next at index 1, and so on.JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. String methods create new strings based on the content of the current string.

### Boolean Type

**Boolean** represents a logical entity and is inhabited by two values: true and false. Boolean values are mostly used for conditional operations, including ternary operators, if...else, while, etc.

### Number Type

**Number** values represent floating-point numbers like 1.61803, 3.14159 or 1.

### BigInt Type

**BigInt** type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.

### Null Type

**Null** indicates the absence of an object

### Undefined Type

**Undefined** indicates the absence of a value. JS language usually defaults to undefined when something is devoid of a value (return statement, accessing a nonexistent object property, variable declaration without initialization and others).

## Data Structure ("'simplified'")

Data structure is a way of organizing and storing data in a computer so that it can be accessed and manipulated efficiently.
Data structures are used to represent complex data in a structured manner. They provide algorithms for data storage, retrieval, and manipulation.

| Structure Type | Description                                       |
| -------------- | ------------------------------------------------- |
| `Array`        | Ordered sequence of values                        |
| `Object`       | Unordered collection of key/value pairs. And more |
| `Date`         | String, Number, Boolean, null etc                 |

### Array

**Array** object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations. Link to [MDN Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### Date

JavaScript Date objects represent a single moment in time. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). Link [MDN Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

```js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#examples
const today = new Date();
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
const birthday5 = new Date(628021800000); // passing epoch timestamp

nst date = new Date("2020-05-12T23:50:21.817Z");
date.toString(); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
date.toDateString(); // Tue May 12 2020
date.toTimeString(); // 18:50:21 GMT-0500 (Central Daylight Time)

date.toISOString(); // 2020-05-12T23:50:21.817Z
date.toJSON(); // 2020-05-12T23:50:21.817Z

date.toUTCString(); // Tue, 12 May 2020 23:50:21 GMT

date.toLocaleString(); // 5/12/2020, 6:50:21 PM
date.toLocaleDateString(); // 5/12/2020
date.toLocaleTimeString(); // 6:50:21 PM
```

### Object

**Objects** (in JS) can be seen as a collection of properties. Object properties are equivalent to key-value pairs. Property keys are either strings or symbols. Property values can be values of any type, including other objects, which enables building complex data structures.

```json
{
  "repos": {
    "list": ["repo1", "repo2"],
    "details": {
      "full_name": "org/repo1",
      "visibility": "public",
      "html_url": "https://github.com/org/repo1",
      "url": "https://api.github.com/repos/org/repo1",
      "description": "",
      "created_at": "2014-02-13T17:16:03Z",
      "archived": false,
      "members": [ "me", "you" ],
      "teams": null
    }
  }
}
// https://www.json.org/json-en.html
```

## MISC

Variable is associated with a specific data type when it is declared. This association determines the memory allocation and the set of operations that can be performed on the variable.

## Reference

- `https://en.wikipedia.org/wiki/Data_type`
- `https://www.w3schools.com/js/js_datatypes.asp`
- `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures`
- `https://tc39.es/ecma262/multipage/ecmascript-data-types-and-values.html`
