# HTML

- HTML stands for Hyper Text Markup Language.
- HTML is the standard markup language for creating Web pages.
- HTML describes the structure of a Web page.
- HTML consists of a series of elements or tags.
- HTML elements tell the browser how to display the content.
- HTML is not a programming language but the building blocks of the Web.
- HTML runs in the browser and does not need a server.

- The **Tag** has an opening, a content and a closing. The opening and closing are wrapped in opening and closing angle brackets, the closing tag includes a forward slash before the element name.
Some have selfclosing tags that do not have a content inside them, like `<br>`.
- There are **inline** elements and they do not start a new line and they take only the necessary width.
- Block element are starting on a new line, and they take full width available.
All tags can have attributes and they provide information about an element. They are placed within the start tag and they are formatted as key/value.

```html
The <!DOCTYPE html> declaration defines that this document is an HTML5 document
The <html> element is the root element of an HTML page
The <head> element contains meta information about the HTML page, it is the part that is not displayed in the web browser when the page is loaded. It contains information such as the page title, links to CSS (if you want to style your HTML content with CSS), links to custom favicons, links to script, and metadata (data about the HTML, such as who wrote it, and important keywords that describe the document).
The <title> element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
The <body> element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
The <h1> element defines a large heading (you have got, from <h1> to <h6> tags)
The <p> element defines a paragraph
The <a> element defines links and the link's destination is specified in the `href` attribute.
The <hr> element is most often displayed as a horizontal rule and is used to separate content
The <div> element defines a section in a document
The <br> element inserts a single line break and does not have content. They are empty elements and empty elements do not have an end tag!
```

```html
The <b> element defines bold text
The <em> element defines emphasized text 
The <i> element defines a part of text in an alternate voice or mood
The <small> element defines smaller text
The <strong> element defines important text
The <sub> element defines subscripted text
The <sup> element defines superscripted text
The <ins> element defines inserted text
The <del> element defines deleted text
The <mark> element defines marked/highlighted text

The <abbr> element defines an abbreviation or acronym
The <address> element defines contact information for the author/owner of a document
The <bdo> element defines the text direction
The <blockquote> element defines a section that is quoted from another source
The <cite> element defines the title of a work
The <q> element defines a short inline quotation
```

## Comment

```html
<!-- this is a comment -->

<!--
    Or you can comment out a
    large number of lines.
-->
```

## HTML link

```html
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes">The \<a> Attributes</a>
<a href="mailto:me@example.com">Email</a>
<a href="tel:+123456789">Call</a>
<a href="sms:+123456789&body=ha%20ha">Msg</a>
```

|          |                                                                 |
|----------|-----------------------------------------------------------------|
| `href`   | The URL that the hyperlink points to                            |
| `rel`    | Relationship of the linked URL                                  |
| `target` | Link target location: `_self`, `_blank`, `_top`, `_parent` |

## Image Tag

```html
<img loading="lazy" src="https://xxx.png" alt="Describe image here" width="400" height="400">
```

|           |                                          |
|-----------|------------------------------------------|
| `src`     | Required, Image location _(URL \| Path)_ |
| `alt`     | Describe of the image                    |
| `width`   | Width of the image                       |
| `height`  | Height of the image                      |
| `loading` | How the browser should load              |

See: [MDN - HTML Img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

## Section Divisions

These are the tags used to divide your page up into sections

|                 |                                      |
|-----------------|--------------------------------------|
| `<div></div>`   | Division or Section of Page Content  |
| `<span></span>` | Section of text within other content |
| `<p></p>`       | Paragraph of Text                    |
| `<br>`          | Line Break                           |
| `<hr>`          | Horizontal Line                      |

## JavaScript in HTML

The `<script>` HTML element is used to embed executable code or data, see: [The Script element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

```html
<script type="text/javascript">
    const text = "Do not use Alert!!!";
    alert(text);
</script>
```

```html
<!-- External JavaScript -->
<head>
    <script src="script.js"></script>
</head>
```

## CSS in HTML

```html
<style type="text/css">
    body { color: green; }
</style>
```

```html
<!-- External stylesheet -->
<head>
    ...
    <link rel="stylesheet" href="style.css"/>
</head>
```

## Document

```html
<body>
  <header>
    <nav>...</nav>
  </header>
  <main>
    <h1>HTML5</h1>
  </main>
  <footer>
    <p>©2023 HTML5</p>
  </footer>
</body>
```

## Header Navigation

```html
<header>
  <nav>
    <ul>
      <li><a href="#">Edit Page</a></li>
      <li><a href="#">Twitter</a></li>
      <li><a href="#">Facebook</a></li>
    </ul>
  </nav>
</header>
```

|                                                                                    |                                        |
|------------------------------------------------------------------------------------|----------------------------------------|
| [article](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/article)       | Content that’s independent             |
| [aside](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/aside)           | Secondary content                      |
| [audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio)           | Embeds a sound, or an audio stream     |
| [bdi](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi)               | The Bidirectional Isolate element      |
| [canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)         | Draw graphics via JavaScript           |
| [data](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data)             | Machine readable content               |
| [datalist](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist)     | A set of pre-defined options           |
| [details](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details)       | Additional information                 |
| [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)         | A dialog box or sub-window             |
| [embed](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed)           | Embeds external application            |
| [figcaption](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figcaption) | A caption or legend for a figure       |
| [figure](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure)         | A figure illustrated                   |
| [footer](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/footer)         | Footer or least important              |
| [header](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/header)         | Masthead or important information      |
| [main](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main)             | The main content of the document       |
| [mark](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark)             | Text highlighted                       |
| [meter](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter)           | A scalar value within a known range    |
| [nav](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nav)               | A section of navigation links          |
| [output](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output)         | The result of a calculation            |
| [picture](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)       | A container for multiple image sources |
| [progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)     | The completion progress of a task      |
| [rp](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rp)                 | Provides fall-back parenthesis         |
| [rt](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt)                 | Defines the pronunciation of character |
| [ruby](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ruby)             | Represents a ruby annotation           |
| [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)       | A group in a series of related content |
| [source](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source)         | Resources for the media elements       |
| [summary](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary)       | A summary for the \<details> element   |
| [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)     | Defines the fragments of HTML          |
| [time](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)             | A time or date                         |
| [track](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track)           | Text tracks for the media elements     |
| [video](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)           | Embeds video                           |
| [wbr](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/wbr)               | A line break opportunity               |

## HTML5 progress

```html
<progress value="50" max="100"></progress>
```

## Table

```html
<table>
    <thead>
        <tr>
            <td>Name</td>
            <td>Age</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Mark</td>
            <td>40</td>
        </tr>
        <tr>
            <td>Elis</td>
            <td>38</td>
        </tr>
    </tbody>
</table>
```

### HTML Table Tags

| Tag                                                                               | Description                      |
|-----------------------------------------------------------------------------------|----------------------------------|
| [\<table>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)       | Defines a table                  |
| [\<th>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th)             | Defines a header cell in a table |
| [\<tr>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr)             | Defines a row in a table         |
| [\<td>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td)             | Defines a cell in a table        |
| [\<caption>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption)   | Defines a table caption          |
| [\<colgroup>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup) | Defines a group of columns       |
| [\<col>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col)           | Defines a column within a table  |
| [\<thead>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead)       | Groups the header content        |
| [\<tbody>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody)       | Groups the body content          |
| [\<tfoot>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot)       | Groups the footer content        |

### \<td> Attributes

See: [td Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td#attributes)

| Attribute | Description                                   |
|-----------|-----------------------------------------------|
| `colspan` | Number of columns a cell should span          |
| `headers` | One or more header cells a cell is related to |
| `rowspan` | Number of rows a cell should span             |

### \<th> Attributes

See: [th Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attributes)

| Attribute                                                                        | Description                                   |
|----------------------------------------------------------------------------------|-----------------------------------------------|
| `colspan`                                                                        | Number of columns a cell should span          |
| `headers`                                                                        | One or more header cells a cell is related to |
| `rowspan`                                                                        | Number of rows a cell should span             |
| `abbr`                                                                           | Description of the cell's content             |
| [scope](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th#attr-scope) | The header element relates to                 |

## HTML Lists

### Unordered list

See: [Unordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul)

```html
<ul>
    <li>I'm Jon</li>
    <li>I'm Mark</li>
    <li>I'm Daisy</li>
</ul>
```

### Ordered list

See: [The Ordered List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol)

```html
<ol>
    <li>I'm the first item</li>
    <li>I'm the second item</li>
    <li>I'm the third item</li>
</ol>
```

### Definition list

See: [The Description List element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl)

```html
The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).

<dl>
    <dt>A Term</dt>
    <dd>Definition of a term</dd>
    <dt>Another Term</dt>
    <dd>Definition of another term</dd>
</dl>
```

## HTML Forms

### Form tags

The HTML `<form>` element is used to collect and send information to an external source.

```html
<form method="POST" action="api/login">
  <label for="mail">Email: </label>
  <input type="email" id="mail" name="mail">
  <br/>

  <label for="pw">Password: </label>
  <input type="password" id="pw" name="pw">
  <br/>

  <input type="submit" value="Login">
  <br/>
</form>
```

### Form Attribute

| Attribute  | Description                                                                                         |
|------------|-----------------------------------------------------------------------------------------------------|
| `name`     | Name of form for scripting                                                                          |
| `action`   | URL of form script                                                                                  |
| `method`   | HTTP method, `POST` / `GET` _(default)_                                                             |
| `enctype`  | Media type, See [enctype](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype) |
| `onsubmit` | Runs when the form was submit                                                                       |
| `onreset`  | Runs when the form was reset                                                                        |

### Label tags

```html
<!-- Nested label -->
<label>Click me 
    <input type="text" id="user" name="name"/>
</label>
```

```html
`for` in a label references an input's `id` attribute
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname" value="John"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname" value="Doe">
</form> 
```

### Input tags

See: [HTML Input Attributes](https://www.w3schools.com/html/html_form_attributes.asp)

```html
<label for="Name">Name:</label>
<input type="text" name="Name" id="">
```

### Textarea tags

Textarea is a multiple-line text input control

```html
<textarea rows="2" cols="30" name="address" id="address"></textarea>
```

### Radio Buttons

Radio buttons are used to let the user select exactly one

```html
<input type="radio" name="gender" id="m">
<label for="m">Male</label>
<input type="radio" name="gender" id="f">
<label for="f">Female</label>
```

### Checkboxes

Checkboxes allows the user to select one or more

```html
<input type="checkbox" name="s" id="soc">
<label for="soc">Soccer</label>
<input type="checkbox" name="s" id="bas">
<label for="bas">Baseball</label>
```

### Select tags

A select box is a dropdown list of options

```html
<label for="city">City:</label>
<select name="city" id="city">
    <option value="1">Sydney</option>
    <option value="2">Melbourne</option>
    <option value="3">Cromwell</option>
</select>
```

### Fieldset tags

```html
<fieldset>
    <legend>Your favorite monster</legend>
    <input type="radio" id="kra" name="m">
    <label for="kraken">Kraken</label><br/>
    <input type="radio" id="sas" name="m">
    <label for="sas">Sasquatch</label>
</fieldset>
```

### Datalist tags

```html
<label for="b">Choose a browser: </label>
<input list="list" id="b" name="browser"/>
<datalist id="list">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>
```

### Submit and Reset Buttons

`Submit` the data to server; `Reset` to default values

```html
<form action="register.php" method="post">
  <label for="foo">Name:</label>
  <input type="text" name="name" id="foo">
  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

### Input Attributes

See: [Attributes \<input> element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)

### Input types

|  Input types  |    Example                             |
|-------------------|--------------------------------------------------------|
| `type="checkbox"` | <input type="checkbox" class="border border-slate-400">                              |
| `type="radio"`    | <input type="radio" class="border border-slate-400">                                |
| `type="file"`     | <input type="file" class="border border-slate-400">                                  |
| `type="hidden"`   | <input type="hidden" class="border border-slate-400">                                  |
| `type="text"`     | <input type="text" class="border border-slate-400">                                  |
| `type="password"` | <input type="password" class="border border-slate-400">                              |
| `type="image"`    | <input type="image" class="border border-slate-400">|
| `type="reset"`    | <input type="reset" class="border border-slate-400">                                |
| `type="button"`   | <input type="button" class="border border-slate-400">Button</input>                                                                       |
| `type="submit"`   | <input type="submit" class="border border-slate-400">                                  |

#### New Input Types in HTML5

|                         |                                                                     |
|-------------------------|---------------------------------------------------------------------|
| `type="color"`          | <input type="color" value="#0FB881" class="border border-slate-400"> |
| `type="date"`           | <input type="date" class="border border-slate-400">                  |
| `type="time"`           | <input type="time" class="border border-slate-400">                  |
| `type="month"`          | <input type="month" class="border border-slate-400">                 |
| `type="datetime-local"` | <input type="datetime-local" class="border border-slate-400">        |
| `type="week"`           | <input type="week" class="border border-slate-400">                  |
| `type="email"`          | <input type="email" class="border border-slate-400">                 |
| `type="tel"`            | <input type="tel" class="border border-slate-400">                   |
| `type="url"`            | <input type="url" class="border border-slate-400">                   |
| `type="number"`         | <input type="number" class="border border-slate-400">                |
| `type="search"`         | <input type="search" class="border border-slate-400">                |
| `type="range"`          | <input type="range" class="border border-slate-400">                 |

### Meta tags

The meta tag describes meta data within an HTML document. It explains additional material about the HTML.

```html
<meta charset="utf-8">
```

```html
<!-- title -->
<title>···</title>
<meta property="og:title"  content="···">
<meta name="twitter:title" content="···">
```

```html
<!-- url -->
<link rel="canonical"       href="https://···">
<meta property="og:url"  content="https://···">
<meta name="twitter:url" content="https://···">
```

```html
<!-- description -->
<meta name="description"         content="···">
<meta property="og:description"  content="···">
<meta name="twitter:description" content="···">
```

```html
<!-- image -->
<meta property="og:image"  content="https://···">
<meta name="twitter:image" content="https://···">
```

```html
X-UA-Compatible is a document mode meta tag that allows web authors to choose what version of Internet Explorer the page should be rendered as
<!-- ua -->
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
```

```html
The viewport is the user's visible area of a web page. The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="width=1024">
```

## Example

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>

<body>
    <h1>Heading</h1>
    <hr>
    <h2>Heading</h2>
    <hr>
    <h3>Heading</h3>
    <hr>
    <h4>Heading</h4>
    <hr>
    <h5>Heading</h5>
    <hr>
    <h6>Heading</h6>
    <hr>
    <p>Paragraph</p>
    <hr>
    <a href="https://www.w3schools.com/tags/default.asp">Link</a>
    <hr>
    <img src="https://img.etimg.com/thumb/msid-86166020,width-300,height-225,imgsize-172700,,resizemode-75/london-uk-.jpg"
        alt="wikipedia nature" width="300" height="225">
    <hr>
    <b> Bold text </b>
    <hr>
    <strong> Important text </strong>
    <hr>
    <i> Italic text </i>
    <hr>
    <em> Emphasized text </em>
    <hr>
    <mark> Marked text </mark>
    <hr>
    <small> Smaller text </small>
    <hr>
    <del> Deleted text </del>
    <hr>
    <ins> Inserted text </ins>
    <hr>
    <sub> Subscript text </sub>
    <hr>
    <sup> Superscript text </sup>
    <hr>

    <abbr> Defines an abbreviation or acronym </abbr>
    <hr>
    <address> Defines contact information for the author/owner of a document </address>
    <hr>
    <bdo> Defines the text direction </bdo>
    <hr>
    <blockquote> Defines a section that is quoted from another source </blockquote>
    <hr>
    <cite> Defines the title of a work </cite>
    <hr>
    <q> Defines a short inline quotation </q>
    <hr>
    
</body>

</html>
```
