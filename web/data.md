# Data Serialization and Format

**Serialization** (or serialisation) is the process of translating a data structure or object state into a format that can be **stored** or **transmitted** and reconstructed later (**deserialization**).

Choice of data serialization format for an application depends on factors such as data complexity, need for human readability, speed and storage space constraints.

- Persisting data onto files.
- Storing data into Databases.
- Transferring data through the network
- XML, JSON, CSV, YAML are some commonly used data serialization formats and there are [many](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats).
- ...

## Commonly used data serialization formats

### JSON

**JSON (JavaScript Object Notation)** is an open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and arrays.
JSON is a language-independent data format. It was derived from JavaScript, but many modern programming languages include code to generate and parse JSON-format data. JSON filenames use the extension **.json**.
JavaScript has included the built-in JSON object and its methods **JSON.parse()** and **JSON.stringify()**.

### XML

**XML (Extensible Markup Language)** is a markup language and file format for storing, transmitting, and reconstructing arbitrary data.
XML defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.
XML is used for the interchange of data over the Internet.
XML is a textual data format. XML filename extension **.xml**.

### CSV

**CSV (Comma-Separated Values)**, table structure with delimiters and human-readable textual data.

### YAML

**YAML (YAML Ain't Markup Language)**, lightweight text format and human-readable, supports complex data types and is used in configuration settings.

### BSON

**BSON (Binary JSON)**, created and internally used by MongoDB.
BSON is a binary format, not human-readable. Deals with attribute-value pairs like JSON.
BSON Includes datetime, bytearray and other data types not present in JSON.
BSON is used in web apps with rich media data types such as live video. Primary use is storage, not network communication.

## HTTP Sending Data

You can use several HTTP methods (GET, POST ...) in an HTTP request. Each method sends data in the request in a different way.

### HTTP Get

GET method uses the query string of the RequestURI to pass parameter and value pairs. Link [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web)
Example  `http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument`

### HTTP Post

POST method sends data to the server. The type of the body of the request is indicated by the **Content-Type** header.
POST method uses HTTP message body to send data in the request.
All methods except the GET method accept data in the body of the HTTP message.

```html
<!-- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form -->
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```

POST request is typically sent via an HTML form and results in a change on the server. In this case, the content type is selected by putting the adequate string in the enctype attribute of the `<form>` element [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attributes_for_form_submission).

POST request is sent via a method other than an HTML form — like via an XMLHttpRequest — the body can take any type.
Link [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST)

## ASCII and UTF-8

**ASCII (American Standard Code for Information Interchange)**, coding methods used by computers for converting letters, numbers, punctuation and control codes into digital form. Link to [ASCII](https://en.wikipedia.org/wiki/ASCII).

**UTF-8** is the World Wide Web's most common character encoding. Each character is represented by one to four bytes. UTF-8 is backward-compatible with ASCII and can represent any standard Unicode character. Link to [UTF-8](https://en.wikipedia.org/wiki/UTF-8).

## MIME

**MIME (Multipurpose Internet Mail Extensions)** is a standard that extends the format of email messages to support text in character sets other than ASCII, as well as attachments of audio, video, images, and application programs.

Message bodies may consist of multiple parts, and header information may be specified in non-ASCII character sets.

MIME was designed mainly for Mail, its content types are also important in other communication protocols **HTTP**.

MIME header field is inserted at the beginning of any Web transmission (eg. `content-type: text/html`). Clients use the content type or media type header to select an appropriate viewer application for the type of data indicated. Link [MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).

## Links

- [Serialization - Wikipedia](https://en.wikipedia.org/wiki/Serialization)
- [ASCII - Wikipedia](https://en.wikipedia.org/wiki/ASCII)
- [Comparison of data-serialization formats - Wikipedia](https://en.wikipedia.org/wiki/Comparison_of_data-serialization_formats)
