// Content Scraping Algorithm
// Pavan Ravipati & Richard Kho
// 2015
// ===============================


//Work on escaping the common the tags

//title, h1, h2, h3, h4, p


var escapeHMTL = function(obj, type)

//I: with regex we'll overwrite _escapedHTML 

var _escapedHTML = obj.html;
  switch (type) {
    case 'span':
      _escapedHTML = _escapedHTML.replace(/<span([^>]*?)>/gi, '');
      _escapedHTML = _escapedHTML.replace(/<\/span>/gi, '');
              


  }
