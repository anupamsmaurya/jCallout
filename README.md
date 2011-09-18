Callout is a balloon div that connects text, symbols, images to a HTML element or a group of elements.

jCallout is jQuery implementation of callouts.

Here is a <a href="http://jsfiddle.net/anupamsm/r2hKN/1/embedded/result/">basic demo</a> (I'll be updating this page with the version releases)

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

Future releases will have more options and event handling 