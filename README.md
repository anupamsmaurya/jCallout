Callout is a balloon div that connects text, symbols, images to an element or a group of elements.

jCallout is jQuery implementation of callouts.

Here is a **[Live Demo](http://jsfiddle.net/anupamsm/zdbpj/5/embedded/result/)** (I'll be updating this page with further version releases)

**Advantages**

* Easy to use and implement
* Only CSS+JQuery implementation (no images required).
* Customizable options

**Usage**

Basic:

```javascript
    $('#testDiv').jCallout({message:"hello there. This is a test"});
```

With options:

```javascript
    $('#testDiv').jCallout({
       message:"hello there. This is a test",
       position:"right", //other possible values- 'top', 'bottom', 'left'
       backgroundColor:"cyan", //hex code can be used
       textColor:"#fff",
       borderColor:"cyan",
       showEffect:"blind", //see http://jqueryui.come/demos/show/ for other possible values
       showSpeed:500, //500 miliseconds
       hideEffect:"explode", //see http://jqueryui.come/demos/hide/ for other possible values
       hideSpeed:"fast"
    });
```

Click to open:

```javascript
    var $testDiv = $('#testDiv');
    $testDiv.jCallout('initWithoutShow', { message: 'Hello world!' });
    $testDiv.click(function() { $testDiv.jCallout('show'); });
```

Supressing the "close" button:

```javascript
    $testDiv.jCallout({ message: 'Hello world!', $closeElement: $('') });
```

Using the 'close' icon from JQuery UI:

```javascript
    $testDiv.jCallout({
       message: tipText,
       $closeElement: $('<span/>', {'class':'ui-icon ui-icon-circle-close','style':'float: right'})
    })
```

Events:

```javascript
    $('.test4').jCallout('hide');//hide callout associated with the selected element(s)
    $('.test4').jCallout('show');//show callout associated with the selected element(s)
```

Future releases will have more options and event handling 