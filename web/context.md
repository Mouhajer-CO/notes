# Context and Introduction to programming

## Overview

**HTML** is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.

**CSS** is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.

- **How does CSS and HTML interact with the browser**, link [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works#how_does_css_actually_work).
- The browser loads the HTML (e.g. receives it from the network, through **HTTP**).
- It converts the HTML into a DOM (Document Object Model). The DOM represents the document in the computer's memory (open the console).
- The browser then fetches most of the resources that are linked to by the HTML document, such as embedded images, videos, and even linked CSS! JavaScript is handled a bit later on in the process.
- The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them (DOM nodes) as required (this intermediate step is called a **render tree**).
- The render tree is laid out in the structure it should appear in after the rules have been applied to it.
- The visual display of the page is shown on the screen (this stage is called **painting**).

The **DOM** Document Object Model is an API (Application Programming Interface) that represents and interacts with any HTML or XML document. The DOM is a document model loaded in the browser and representing the document as a node tree, where each node represents part of the document (e.g. an element, text string, or comment). The nodes are defined by their relationship to other DOM nodes. Some elements are parents of child nodes, and child nodes have siblings.

**HTTP**: is an application layer protocol that allows web-based applications (client–server software application accessible over the internet) to communicate and exchange data or generally an application protocol for distributed, hypermedia information systems. HTTP is the foundation of data communication for the World Wide Web, where hypertext documents include hyperlinks to other resources that the user can access.
HTTP functions as a request-response protocol in the client–server computing model, and it is not only used to send and retrieve data for browsers, but it’s also a very common method of integrating applications. Link to [MDN HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).

- **Request**: A packet of information sent from a client (often a browser) to a web server.
- **Response**: The payload that a webserver sends back to a client in response to the request.
- **User Agent**: A user agent is a piece of software acting on behalf of the user, typically a browser.
- **URL**: Uniform Resource Locator. Indicates how to get to something on the web. It’s essentially an address.
- **Headers**: A set of key/value pairs sent as part of a web request, or received as a response to a request that aren’t part of the contents. These are essentially request metadata.
- **HTTP Methods**: Indicates the intent or action of a web request.
- **Cookie**: A small piece of data that the server sends to the client (and vice versa) that is maintained for the client as long as the client session lasts.
- **Session**: The server side storage of information that should persist for the period of a user’s interaction with a website.
- **Cache**: A store of the response to an http request. This is intended to lighten the load on the server by keeping requests from going to the server when there is no need to do so.
- HTTP is a **stateless protocol**. A stateless protocol does not require the HTTP server to retain information or status about each user for the duration of multiple requests. However, some web applications implement states or server side sessions using for instance HTTP cookies or hidden variables within web forms.
- **HTTPS** extention of HTTP and it is essentially a way of encrypting HTTP traffic. This prevents man-in-the-middle attacks and data sniffing. It also ensures that you are communicating with the server that you think you are communicating with by identifying the server.

```txt
Request:
  GET / HTTP/1.1
  Host: developer.mozilla.org
  Accept-Language: fr

Response
  HTTP/1.1 200 OK
  Date: Sat, 09 Oct 2010 14:28:02 GMT
  Server: Apache
  Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
  ETag: "51142bc1-7449-479b075b2891b"
  Accept-Ranges: bytes
  Content-Length: 29769
  Content-Type: text/html
```

- **REST**, stands for REpresentational State Transfer. REST is web standards based architecture and uses HTTP Protocol. It revolves around resource where is identified by URIs (Uniform Resource Identifier) and accessed by using HTTP standard methods and uses various representation like text, JSON, XML.

- Server simply provides access to resources
- Client accesses and modifies the resources using HTTP protocol.
- REST HTTP methods,
  - GET − This is used to provide a read only access to a resource.
  - PUT − This is used to create a new resource or replace resource.
  - DELETE − This is used to remove a resource.
  - POST − This is used to update a existing resource or create a new resource.
- Web services based on REST Architecture are known as RESTful web services. RESTfull key peinciples are:
  - Everything is a resources.
  - Each resources is identifiable by a unique identifier (URI).
  - Use the standard HTTP methods. The native HTTP protocol defines eight actions, also known as verbs (GET, POST, PUT, DELETE, HEAD, OPTIONS, TRACE and CONNECT). There is a parallel with SQL relative the action of Creating, Reading, Updating and Deleting abbreviated as CRUD.
  - Resources can have multiple representations.
  - Communicate statelessly. Implicitly means that partial resource updates are not supported. Essentially, what this means is that the necessary state to handle the request is contained within the request itself, whether as part of the URI, query-string parameters, body, or headers.

The term **Asynchronous** refers to two or more objects or events not existing or happening at the same time. Modern software design increasingly revolves around using asynchronous programming, to allow programs to do more than one thing at a time.
The fetch() method provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method takes one mandatory argument, the path to the resource you want to fetch. It returns a Promise that resolves to the Response to that request. A Promise is an object representing the eventual completion or failure of an asynchronous operation. Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

**Synchronous** refers to real-time communication where each party receives (and if necessary, processes and replies to) messages instantly (or as near to instantly as possible). A human example is the telephone — during a telephone call you tend to respond to another person immediately. Many programming commands are also synchronous — for example when you type in a calculation, the environment will return the result to you instantly, unless you program it not to.

**Web server** is a piece of software designed to serve web pages/web sites/web services. It handles HTTP requests sent by the HTTP client. Examples are IIS, Apache and many more. It is a application/network application (if with multiapps) that is running in some machine to listen in some particular port. The name can also refer to the hardware running this software.

**Web application** is a software that is running in a server side and answer the request from the client. As web application/web service will be running inside a web server - normally serving up JSON/XML or performing some action in response to input.

### MISC

- An **API** (Application Programming Interface) is a set of features and rules that exist inside a software program (the application) enabling interaction with it through software - as opposed to a human user interface. The API can be seen as a simple contract (the interface) between the application offering it and other items, such as third-party software or hardware. In Web development, an API is generally a set of code features (e.g. methods, properties, events, and URLs) that a developer can use in their apps for interacting with components of a user's web browser, other software/hardware on the user's computer, or third-party websites and services. Link [here](https://developer.mozilla.org/en-US/docs/Glossary/API).
- **HTTP/1.1** was first documented in RFC 2068 in 1997.
- **HTTP/2** is a more efficient expression of HTTP's, it is now supported by major web servers and browsers over Transport Layer Security (TLS) using an Application-Layer Protocol Negotiation (ALPN) extension where TLS 1.2 or newer is required.
- **HTTP/3** is the successor of HTTP/2, is using UDP instead of TCP for the underlying transport protocol. Like HTTP/2, it does not obsolete previous major versions of the protocol.

- **Scaling**: *Horizontal scaling* means that you scale by adding more machines into your pool of resources whereas *Vertical scaling* means that you scale by adding more power (CPU, RAM) to an existing machine.
