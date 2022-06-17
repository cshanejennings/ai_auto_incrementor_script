/**
 * @author Shane Jennings <cshanejennings@gmail.com>
 * @url C:\Program Files\Adobe\Adobe Illustrator 2022\Presets\en_US\Scripts\ai-incrementor.jsx
 */
#target illustrator
#script "Ai Incrementor"

/** begin dialog.jsx code **/



/** end dialog.jsx code **/

// polyfills (not all are used)
Array.prototype.map=function(c){var a=[],i=0,t=this;for(i;i<t.length;i++){a.push(c(t[i],i,t));}return a;}
Array.prototype.filter=function(c){var a=[],i=0,t=this;for(i;i<t.length;i++){if(c.call(t,t[i],i,t)){a.push(t[i]);}}return a;}
Array.prototype.reduce=function(c,v,u){var a=v,i=0,t=this;for(i;i<t.length;i++){if(a!==u){a=c.call(u,a,t[i],i,t);}else{a=t[i];}}return a;}

/** util functions **/
// returns the active document or an empty object (to prevent null pointers)
function get_active_doc(){return(app.documents.length>0)?app.activeDocument:{};}
// gets the current selection or returns an empty array
function get_selection(){var s=get_active_doc().selection; return(s&&s.length)?s:[];}
// function to pass into Array.sort if no sort function is provided (makes no change)
function no_sort(){return 0;}
// creates a test for a filter function that will check to see if an element has a prop equal to value
function create_element_node_test(prop, value){ return function(el){return(el[prop]===value);}}
// grabs the current selection and filters based on a filter test function
function filter_elements_from_selection(test){return get_selection().filter(test);}


function sort_text_fields_left_to_right(a, b) {
  if (a.anchor[0] > b.anchor[0]) return 1;
  if (a.anchor[0] < b.anchor[0]) return -1;
  return 0;
}

function filter_text_fields_by_content_regex(regex) {
  return function (el) { return (el.contents.match(regex)) ? true : false; }
}

// https://ai-scripting.docsforadobe.dev/jsobjref/Lines.html
function add_tick_mark(x, top, h) {
  var bottom = top + h;
  app.activeDocument.pathItems.add().setEntirePath([[x, top], [x, bottom]]);
}

// https://ai-scripting.docsforadobe.dev/jsobjref/TextFrameItem.html
function map_numbers(txt, i) {
  var num = i + 1,
      pad = txt.contents.replace(/#/g, "0"),
      contents = (pad + num).substr(-pad.length);
  txt.paragraphs[0].justification = Justification.CENTER;
  txt.contents = (parseInt(contents, 10) === num) ? contents : num;
  var x = (txt.left + (txt.width / 2)), y = (txt.top + (txt.height / 2));
  add_tick_mark(x, y, txt.height);
}


function create_from_labels() {
  dialog.hide();
  var textFrames = filter_elements_from_selection(create_element_node_test("typename", "TextFrame"))
    .sort(sort_text_fields_left_to_right)
    .filter(filter_text_fields_by_content_regex(/^[#]*$/))
    .map(map_numbers);
}

function create_from_rectangle() {}

var dialog = get_dialog(create_from_labels, create_from_rectangle);
dialog.init();

/**
C:\Program Files\Adobe\Adobe Illustrator 2022\Presets\en_US\Scripts\ai-incrementor.jsx
**/
