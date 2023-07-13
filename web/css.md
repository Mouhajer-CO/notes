# CSS

- CSS stands for Cascading Style Sheets, describes how HTML elements are to be displayed and can be added to HTML elements in 3 ways: **Inline** by using the style attribute in HTML elements, **Internal** by using a `<style>` element in the `<head>` section, **External** by using an external CSS file with `<link>`.

```html
<!-- External stylesheet -->
<link href="./path/style.css" rel="stylesheet" type="text/css" />

<!-- Internal stylesheet -->
<style>
  body {
    background-color: linen;
  }
</style>

<!-- Inline styles -->
<h2 style="text-align: center;">Centered text</h2>
<p style="color: blue; font-size: 18px;">Blue, 18-point text</p>
```

- CSS is a set of rules where each rule consists of a selector and a declaration block.

## CSS building blocks

- The **selector** points to the HTML element you want to style.
  - The element selector selects HTML elements based on the element name
  - The id selector uses the id attribute of an HTML element to select a specific element (hash (#))
  - The class selector selects HTML elements with a specific class attribute period (.)
  - CSS selector can contain more than one simple selector. Between the simple selectors, we can include a combinator [descendant selector(space) child selector (>), adjacent sibling selector (+) and general sibling selector (~)].
  - The [attribute] selector is used to select elements with a specified attribute ( a[target] { background-color: yellow; }).
  - CSS Pseudo-class is used to define a special state of an element (:hover, :first-child), `selector:pseudo-class { property: value; }`
  - CSS Pseudo-element is used to style specified parts of an element, `selector::pseudo-element { property:value; }`
- The **declaration block** contains one or more declarations separated by semicolons sorrounded by curly braces.
- Each **declaration** includes a CSS property name and a value, separated by a colon.
  - display property is the most important CSS property for controlling layout, specifies if/how an element is displayed.
  - position property specifies the type of positioning method used for an element (static, relative, fixed, absolute or sticky).
  - overflow property controls what happens to content that is too big to fit into an area. The overflow property has the following values: visible, hidden, scroll and auto.
  - float property specifies how an element should float: left, right , none and inherit.
  - border defines a border around an HTML element
  - padding defines a padding (space) between the text and the border
  - margin defines a margin (space) outside the border.
  - background-image adds a background image on an HTML element by using url('img.jpg');
  - border-collapse If you want the borders to collapse into one border
  - border-spacing specifies the space between the cells in the table tag.
  - opacity property specifies the opacity/transparency of an element
  - gradients let you display smooth transitions between two or more specified colors.
  - text-align(-decoration, -transform, -shadow)
  - font-family: "Times New Roman", Times, serif;
  - list-style-type property to define the list item marker
  - float: left or display:inline to display a list horizontally
  - a:link(:visited,:hover,:active)

There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style.

### Type selector

A type selector is sometimes referred to as a tag name selector or element selector because it selects an HTML tag/element in your document. In the example below, we have used the span, em and strong selectors.

```css
span {
    background-color: yellow;
}

strong {
    color: rebeccapurple;
}

em {
    color: rebeccapurple;
}
```

### Class selector

The class global attribute is a space-separated list of the case-sensitive classes of the element. Classes allow CSS and JavaScript to select and access specific elements via the class selectors or functions like the DOM method `document.getElementsByClassName`.

Link to [class](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/class)

```html
<div class="classname"></div>
<div class="class1 ... classn"></div>
```

Support multiple classes on one element.

### Id selector

An ID selector begins with a **#** rather than a dot character, but is used in the same way as a class selector. However, an ID can be used only once per page, and elements can only have a single id value applied to them.

```css
#one {
    background-color: yellow;
}

h1#heading {
    color: rebeccapurple;
}
```

### !important

Overrides all previous styling rules.

```css
.post-title {
  color: blue !important;
}
```

### Selector

link to [selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors)

```css
h1 {
}
#job-title {
}
/* Chaining Selector */
div.hero {
}
div > p {
}
/* Attribute selectors */
a[href="https://example.com"]
{
}
/* Pseudo-classes and pseudo-elements */
p::first-line {
}
/* First Child Selector */
p:first-child {
  font-weight: bold;
}
```

### Text color

link to [color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

```css
color: #00ff00;
color: green;
color: rgb(214, 122, 127);
color: hsla(30, 100%, 50%, .3);
```

### Background

link to [background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)

```css
background-color: blue;
background-image: url("../../media/examples/cat.png");
```

### Font

link to [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)

```css
.page-title {
  font-weight: bold;
  font-size: 30px;
  font-family: "Courier New";
}
```

### Position

link to [position](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

```css
.box {
  position: relative;
  top: 20px;
  left: 20px;
}
```

### Comment

```css
/* This is a single line comment */

/* This is a 
   multi-line comment */
```

## CSS The Box Model

- The **CSS box model** is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content and allows us to add a border around elements, and to define space between elements.

```css
/*  Maximums/Minimums */
.column {
  max-width: 200px;
  width: 500px;
}

/*  Margin / Padding */
.block-one {
  margin: 20px;
  padding: 10px;
}

/*  Box-sizing */
.container {
  box-sizing: border-box;
}

/*  Visibility */
.invisible-elements {
  visibility: hidden;
}

/*  Auto keyword */
div {
  margin: auto;
}

/*  Overflow */
.small-block {
  overflow: scroll;
}
```

## Flex layout

- **CSS Flexbox**: The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure.
  - To start using the Flexbox model, you need to first define a flex container. The flex container becomes flexible by setting the display property to flex.
  - The **flex-direction** property defines in which direction the container wants to stack the flex items.
  - The **flex-wrap** property, in the container, specifies whether the flex items should wrap or not.
  - The **justify-content** property is used to align the flex items
  - The **align-content** property is used to align the flex lines.

Links to Flex [W3S](
https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox) and [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

## Grid layout

- **CSS grid**. Many web pages are based on a grid-view, which means that the page is divided into columns. It is very helpful when designing web pages. It makes it easier to place elements on the page. A responsive grid-view often has 12 columns, and has a total width of 100%, and will shrink and expand as you resize the browser window.

Links to Grid [W3S](
https://www.w3schools.com/css/tryit.asp?filename=trycss3_flexbox) and [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/grid)

## Responsive

- Responsive Web Design is about using HTML and CSS to automatically resize, hide, shrink, or enlarge, a website, to make it look good on all devices (desktops, tablets, and phones), by using for example:
  - Media Queries: With media queries you can define completely different styles for different browser sizes.
  - Using the max-width Property in width size
  - Setting The Viewport. The viewport is the user's visible area of a web page `[<meta name="viewport" content="width=device-width, initial-scale=1.0">]`.
  - Using well known CSS layout techniques [W3S CSS Layout Templates](https://www.w3schools.com/css/css_templates.asp) and [MDN CSS Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Introduction)

## Reset style

```css
/* Groups Selector */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## MISC and Quick overview

| Selector             | Description                           |
| -------------------- | ------------------------------------- |
| `*`                  | All elements                          |
| `div`                | All div tags                          |
| `.classname`         | All elements with class               |
| `#idname`            | Element with ID                       |
| `div,p`              | All divs and paragraphs               |
| `#idname *`          | All elements inside #idname           |
| -------------------- | ------------------------------------- |
| `div.classname`      | Div with certain classname            |
| `div#idname`         | Div with certain ID                   |
| `div p`              | Paragraphs inside divs                |
| `div > p`            | All p tags<br>_one level deep in div_ |
| `div + p`            | P tags immediately after div          |
| `div ~ p`            | P tags preceded by div                |
| -------------------- | ------------------------------------- |
| `a[target]`          | With a <yel>target</yel> attribute    |
| `a[target="_blank"]` | Open in new tab                       |
| `a[href^="/index"]`  | Starts with <yel>/index</yel>         |
| `[class*="chair"]`   | containing <yel>chair</yel>           |
| `[title~="chair"]`   | Contains the word <yel>chair</yel>    |
| `a[href$=".doc"]`    | Ends with <yel>.doc</yel>             |
| `[type="button"]`    | Specified type                        |
| ----------------------- | -------------------------- |
| `p:first-child`         | First child                |
| `p:last-child`          | Last child                 |
| `p:first-of-type`       | First of some type         |
| `p:last-of-type`        | Last of some type          |
| `p:nth-child(2)`        | Second child of its parent |
| `p:nth-child(3n42)`     | Nth-child (an + b) formula |
| `p:nth-last-child(2)`   | Second child from behind   |
| `p:nth-of-type(2)`      | Second p of its parent     |
| `p:nth-last-of-type(2)` | ...from behind             |
| `p:only-of-type`        | Unique of its parent       |
| `p:only-child`          | Only child of its parent   |

## CSS Flexbox tips

### Vertical center

```css
.container {
  display: flex;
}

.container > div {
  width: 100px;
  height: 100px;
  margin: auto;
}
```

### Vertical center (2)

```css
.container {
  display: flex;

  /* vertical */
  align-items: center;

  /* horizontal */
  justify-content: center;
}
```

### Reordering

```css
.container > .top {
  order: 1;
}

.container > .bottom {
  order: 2;
}
```

### Mobile layout

```css
.container {
  display: flex;
  flex-direction: column;
}

.container > .top {
  flex: 0 0 100px;
}

.container > .content {
  flex: 1 0 auto;
}
```

A fixed-height top bar and a dynamic-height content area.

### Table-like

```css
.container {
  display: flex;
}

/* the 'px' values here are just suggested percentages */
.container > .checkbox {
  flex: 1 0 20px;
}
.container > .subject {
  flex: 1 0 400px;
}
.container > .date {
  flex: 1 0 120px;
}
```

This creates columns that have different widths, but size accordingly according
to the circumstances.

### Vertical

```css
.container {
  align-items: center;
}
```

Vertically-center all items.

### Left and right

```css
.menu > .left {
  align-self: flex-start;
}
.menu > .right {
  align-self: flex-end;
}
```

## Links

- [MDN CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [W3S CSS](https://www.w3schools.com/css/default.asp)
