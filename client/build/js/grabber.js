// Content Scraping Algorithm
// Pavan Ravipati & Richard Kho
// 2015
// ===============================


//Work on escaping the common the tags

//title, h1, h2, h3, h4, p
//edge cases: U.S.A or 2.3 both look like they should be separated sentences

function process(textContent) {
  textContent = textContent.replace(/*everything at the tail up to the last char*/)
  textContent = textContent.replace(/*evetyhing at the beginning up to the first char*/)

}


function strip(html) {
   var tmp = document.createElement("DIV");
   tmp.innerHTML = html;
   return tmp.textContent || tmp.innerText || "";
}

function stripTags() {
  var rawTags = document.querySelectorAll('title, p');
  rawTags = Array.prototype.slice.call(rawTags);

  var result = rawTags.reduce(function(acc, tag) {
    console.log(tag.textContent);
    //process out each line a bit to see if we should add it in or not to result
    //push everything into an array
    //keep stripping the first and last non-character values
    //join all array strings with '.' or other demarcation
    return acc + strip(tag.textContent)
  }, '')
  return result;

}