Callout is a balloon div that connects text, symbols, images to an element or a group of elements.

jCallout is jQuery implementation of callouts.

Here is a **[Live Demo](http://jsfiddle.net/anupamsm/zdbpj/5/embedded/result/)** (I'll be updating this page with further version releases)

**Advantages**
* Easy to use and implement
* Only CSS+JQuery implementation (no images required).
* Customizable options

**Usage**

Basic:
<pre>
$('#testDiv').jCallout({message:"hello there. This is a test"});
</pre>

With options:
<pre>
$('#testDiv').jCallout({
   message:"hello there. This is a test",
   position:"right", //other possible values- 'top', 'bottom', 'left'
   backgroundColor:"cyan", //hex code can be used
   textColor:"#fff",
   borderColor:"cyan"
 });
</pre>

Click to open:
<pre>
var $testDiv = $('#testDiv');
$testDiv.jCallout('initWithoutShow', { message: 'Hello world!' });
$testDiv.click(function() { $testDiv.jCallout('show'); });
</pre>

Supressing the "close" button:
<pre>
$testDiv.jCallout({ message: 'Hello world!', $closeElement: $('') });
</pre>

Using the 'close' icon from JQuery UI:
<pre>
$testDiv.jCallout({
   message: tipText,
   $closeElement: $('<span/>', {'class':'ui-icon ui-icon-circle-close','style':'float: right'})
})
</pre>

Events:
<pre>
$('.test4').jCallout('hide');//hide callout associated with the selected element(s)
</pre>

<pre>
$('.test4').jCallout('show');//show callout associated with the selected element(s)
</pre>

Future releases will have more options and event handling 