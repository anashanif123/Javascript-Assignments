
var inputText = document.getElementById('inputs');
var textcolor = document.getElementById('textcolor')

document.getElementById('bold').addEventListener('click', function() {
   
    inputText.style.fontWeight = (inputText.style.fontWeight === 'bold'? 'normal' : 'bold');
  });
  
  document.getElementById('italic').addEventListener('click', function()  {
   
    inputText.style.fontStyle = (inputText.style.fontStyle === 'italic'? 'normal' : 'italic');
  });
  
  document.getElementById('underline').addEventListener('click', function()  {
    inputText.style.textDecoration = (inputText.style.textDecoration === 'underline'? 'none' : 'underline');
  });
  
  document.getElementById('fontsize').addEventListener('click', function()  {
  
    var fontSize = document.getElementById('sizes').value;
    inputText.style.fontSize = fontSize;
  });
  
  document.getElementById('fontfamily').addEventListener('click',function ()  {
   
    var fontFamily = document.getElementById('fontfamilies').value;
    inputText.style.fontFamily = fontFamily;
  });
  
textcolor.addEventListener("input", function () {
  inputText.style.color = textcolor.value;
});
document.getElementById('clear').addEventListener('click', function() {
  var inputText = document.getElementById('inputs');
  inputText.value = ''; 
  inputText.style.fontWeight = 'normal';
  inputText.style.fontStyle = 'normal';
  inputText.style.textDecoration = 'none';
  inputText.style.fontSize = ''; 
  inputText.style.fontFamily = ''; 
  inputText.style.color = ''; 
});