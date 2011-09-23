Callout is a balloon div that connects text, symbols, images to an element or a group of elements.

jCallout is jQuery implementation of callouts.

Here is a <b><a href="http://jsfiddle.net/anupamsm/zdbpj/5/embedded/result/">Live Demo</a></b> (I'll be updating this page with further version releases)

<b>Advantages</b>
<ul>
<li>Easy to use and implement</li>
<li>Only CSS+JQuery implementation (no images required).</li>
<li>Customizable options</li>
</ul>

<b>Usage</b>

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
```javascript
var $testDiv = $('#testDiv');
$testDiv.jCallout('initWithoutShow', { message: 'Hello world!' });
$testDiv.click(function() { $testDiv.jCallout('show'); });
```

Supressing the "close" button:
```javascript
$testDiv.jCallout({ message: 'Hello world!', $closeElement: $('') });
```

Events:
<pre>
$('.test4').jCallout('hide');//hide callout associated with the selected element(s)
</pre>

<pre>
$('.test4').jCallout('show');//show callout associated with the selected element(s)
</pre>

Future releases will have more options and event handling 