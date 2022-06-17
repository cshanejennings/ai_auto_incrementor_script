/**
 * @author Shane Jennings <cshanejennings@gmail.com>
 * @url
C:\Program Files\Adobe\Adobe Illustrator 2022\Presets\en_US\Scripts\ai-incrementor.jsx
 */
#target illustrator
#script "Ai Incrementor"

/** begin dialog.jsx code **/

// created using https://scriptui.joonas.me/
// to edit, paste dialog-config.json into import popup

function get_dialog(create_from_labels, create_from_rectangle) {

var setting = {
  tick_marks: {
    enabled: true,
    length: 50,
    placement: 'Above Label',
  },
  labels: {
    increment: 1,
    template: '#',
  },
  import_from: {
    rectangle: {
      label_count: 18,
    },
    labels: {

    }
  }
};

/** begin generated javascript **/

// AUTO_INCREMENT_DIALOG
// =====================
var auto_increment_dialog = new Window("dialog", undefined, undefined, {maximizeButton: true, minimizeButton: true});
  auto_increment_dialog.text = "Auto Incremented Numbers";
  auto_increment_dialog.orientation = "column";
  auto_increment_dialog.alignChildren = ["left","top"];
  auto_increment_dialog.spacing = 10;
  auto_increment_dialog.margins = 20;

var global_settings_lbl = auto_increment_dialog.add("statictext", undefined, undefined, {name: "global_settings_lbl"});
  global_settings_lbl.text = "Global Settings";

// GLOBAL_CONFIG_TAB_PANEL
// =======================
var global_config_tab_panel = auto_increment_dialog.add("group", undefined, undefined, {name: "global_config_tab_panel"});
  global_config_tab_panel.alignChildren = ["left","fill"];
var global_config_tab_panel_nav = global_config_tab_panel.add ("listbox", undefined, ['Ticks','Labels']);
  global_config_tab_panel_nav.preferredSize.width = 120
var global_config_tab_panel_innerwrap = global_config_tab_panel.add("group")
  global_config_tab_panel_innerwrap.alignment = ["fill","fill"];
  global_config_tab_panel_innerwrap.orientation = ["stack"];
  global_config_tab_panel.alignment = ["fill","top"];

// TICKS_TAB
// =========
var ticks_tab = global_config_tab_panel_innerwrap.add("group", undefined, {name: "ticks_tab"});
  ticks_tab.text = "Ticks";
  ticks_tab.orientation = "row";
  ticks_tab.alignChildren = ["left","top"];
  ticks_tab.spacing = 0;
  ticks_tab.margins = 0;

// TICKS_CONFIG_PANEL
// ==================
var ticks_config_panel = ticks_tab.add("panel", undefined, undefined, {name: "ticks_config_panel"});
  ticks_config_panel.text = "Tick Mark Settings";
  ticks_config_panel.preferredSize.width = 400;
  ticks_config_panel.preferredSize.height = 200;
  ticks_config_panel.orientation = "column";
  ticks_config_panel.alignChildren = ["left","top"];
  ticks_config_panel.spacing = 10;
  ticks_config_panel.margins = [20,20,20,0];
  ticks_config_panel.alignment = ["left","top"];

var tick_marks_enable_checkbox = ticks_config_panel.add("checkbox", undefined, undefined, {name: "tick_marks_enable_checkbox"});
  tick_marks_enable_checkbox.text = "Enable Tick Marks";
  tick_marks_enable_checkbox.preferredSize.height = 24;
  tick_marks_enable_checkbox.alignment = ["fill","top"];

var tick_mark_length_lbl = ticks_config_panel.add("statictext", undefined, undefined, {name: "tick_mark_length_lbl"});
  tick_mark_length_lbl.text = "Tick Mark Length (as % of font size)";
  tick_mark_length_lbl.alignment = ["fill","top"];

var tick_mark_length_div_top = ticks_config_panel.add("panel", undefined, undefined, {name: "tick_mark_length_div_top"});
  tick_mark_length_div_top.alignment = "fill";

// TICK_MARK_HEIGHT_GROUP
// ======================
var tick_mark_height_group = ticks_config_panel.add("group", undefined, {name: "tick_mark_height_group"});
  tick_mark_height_group.orientation = "row";
  tick_mark_height_group.alignChildren = ["left","center"];
  tick_mark_height_group.spacing = 10;
  tick_mark_height_group.margins = 0;
  tick_mark_height_group.alignment = ["fill","top"];

var tick_marks_height_slider = tick_mark_height_group.add("slider", undefined, undefined, undefined, undefined, {name: "tick_marks_height_slider"});
  tick_marks_height_slider.minvalue = 0;
  tick_marks_height_slider.maxvalue = 100;
  tick_marks_height_slider.value = 50;
  tick_marks_height_slider.preferredSize.width = 220;
  tick_marks_height_slider.preferredSize.height = 25;
  tick_marks_height_slider.alignment = ["left","top"];

var tick_marks_height_value = tick_mark_height_group.add('edittext {justify: "right", properties: {name: "tick_marks_height_value"}}');
  tick_marks_height_value.helpTip = "set hight";
  tick_marks_height_value.text = "50%";
  tick_marks_height_value.preferredSize.width = 80;
  tick_marks_height_value.preferredSize.height = 25;
  tick_marks_height_value.alignment = ["left","top"];

// TICKS_CONFIG_PANEL
// ==================
var tick_mark_length_div_bottom = ticks_config_panel.add("panel", undefined, undefined, {name: "tick_mark_length_div_bottom"});
  tick_mark_length_div_bottom.alignment = "fill";

// TICK_MARK_LABEL_POSITION_GROUP
// ==============================
var tick_mark_label_position_group = ticks_config_panel.add("group", undefined, {name: "tick_mark_label_position_group"});
  tick_mark_label_position_group.orientation = "row";
  tick_mark_label_position_group.alignChildren = ["left","center"];
  tick_mark_label_position_group.spacing = 10;
  tick_mark_label_position_group.margins = 0;
  tick_mark_label_position_group.alignment = ["fill","top"];

var tick_mark_position_lbl = tick_mark_label_position_group.add("statictext", undefined, undefined, {name: "tick_mark_position_lbl"});
  tick_mark_position_lbl.text = "Tick Mark Placement";
  tick_mark_position_lbl.preferredSize.width = 190;
  tick_mark_position_lbl.preferredSize.height = 30;
  tick_mark_position_lbl.alignment = ["left","top"];

var tick_mark_placement_value_array = ["Above Label","Left of Label","Right of Label","Below Label"];
var tick_mark_placement_value = tick_mark_label_position_group.add("dropdownlist", undefined, undefined, {name: "tick_mark_placement_value", items: tick_mark_placement_value_array});
  tick_mark_placement_value.selection = 0;
  tick_mark_placement_value.preferredSize.width = 110;
  tick_mark_placement_value.preferredSize.height = 30;
  tick_mark_placement_value.alignment = ["left","top"];

// LABEL_TAB
// =========
var label_tab = global_config_tab_panel_innerwrap.add("group", undefined, {name: "label_tab"});
  label_tab.text = "Labels";
  label_tab.orientation = "column";
  label_tab.alignChildren = ["fill","top"];
  label_tab.spacing = 10;
  label_tab.margins = 0;

// GLOBAL_CONFIG_TAB_PANEL
// =======================
global_config_tab_panel_tabs = [ticks_tab,label_tab];

for (var i = 0; i < global_config_tab_panel_tabs.length; i++) {
  global_config_tab_panel_tabs[i].alignment = ["fill","fill"];
  global_config_tab_panel_tabs[i].visible = false;
}

global_config_tab_panel_nav.onChange = showTab_global_config_tab_panel;

function showTab_global_config_tab_panel() {
  if ( global_config_tab_panel_nav.selection !== null ) {
    for (var i = global_config_tab_panel_tabs.length-1; i >= 0; i--) {
      global_config_tab_panel_tabs[i].visible = false;
    }
    global_config_tab_panel_tabs[global_config_tab_panel_nav.selection.index].visible = true;
  }
}

global_config_tab_panel_nav.selection = 0;
showTab_global_config_tab_panel()

// LABEL_CONFIG_PANEL
// ==================
var label_config_panel = label_tab.add("panel", undefined, undefined, {name: "label_config_panel"});
  label_config_panel.text = "Label Settings";
  label_config_panel.preferredSize.width = 400;
  label_config_panel.preferredSize.height = 200;
  label_config_panel.orientation = "column";
  label_config_panel.alignChildren = ["left","top"];
  label_config_panel.spacing = 10;
  label_config_panel.margins = [10,20,10,10];
  label_config_panel.alignment = ["left","top"];

// LABEL_INCREMENT_GROUP
// =====================
var label_increment_group = label_config_panel.add("group", undefined, {name: "label_increment_group"});
  label_increment_group.preferredSize.height = 35;
  label_increment_group.orientation = "row";
  label_increment_group.alignChildren = ["left","center"];
  label_increment_group.spacing = 0;
  label_increment_group.margins = [10,0,0,0];
  label_increment_group.alignment = ["fill","top"];

var label_increment_lbl = label_increment_group.add("statictext", undefined, undefined, {name: "label_increment_lbl"});
  label_increment_lbl.text = "Increment Label By";
  label_increment_lbl.preferredSize.width = 190;
  label_increment_lbl.preferredSize.height = 30;
  label_increment_lbl.alignment = ["left","top"];

var label_increment_value = label_increment_group.add('edittext {justify: "right", properties: {name: "label_increment_value"}}');
  label_increment_value.text = "1";
  label_increment_value.preferredSize.width = 110;
  label_increment_value.preferredSize.height = 30;
  label_increment_value.alignment = ["left","top"];

// LABEL_SUFFIX_GROUP
// ==================
var label_suffix_group = label_config_panel.add("group", undefined, {name: "label_suffix_group"});
  label_suffix_group.orientation = "row";
  label_suffix_group.alignChildren = ["left","center"];
  label_suffix_group.spacing = 0;
  label_suffix_group.margins = [10,0,0,0];
  label_suffix_group.alignment = ["fill","top"];

var label_suffix_lbl = label_suffix_group.add("statictext", undefined, undefined, {name: "label_suffix_lbl"});
  label_suffix_lbl.text = "Label Template";
  label_suffix_lbl.preferredSize.width = 190;
  label_suffix_lbl.preferredSize.height = 30;
  label_suffix_lbl.alignment = ["left","top"];

var label_suffix_value = label_suffix_group.add('edittext {justify: "right", properties: {name: "label_suffix_value"}}');
  label_suffix_value.helpTip = "text to append to each label";
  label_suffix_value.text = "#";
  label_suffix_value.preferredSize.width = 110;
  label_suffix_value.preferredSize.height = 30;
  label_suffix_value.alignment = ["left","top"];

// AUTO_INCREMENT_DIALOG
// =====================
var import_settings_lbl = auto_increment_dialog.add("statictext", undefined, undefined, {name: "import_settings_lbl"});
  import_settings_lbl.text = "Import Settings";

// IMPORT_TAB_PANEL
// ================
var import_tab_panel = auto_increment_dialog.add("group", undefined, undefined, {name: "import_tab_panel"});
  import_tab_panel.alignChildren = ["left","fill"];
var import_tab_panel_nav = import_tab_panel.add ("listbox", undefined, ['From Labels','From Rectangle']);
  import_tab_panel_nav.preferredSize.width = 120
var import_tab_panel_innerwrap = import_tab_panel.add("group")
  import_tab_panel_innerwrap.alignment = ["fill","fill"];
  import_tab_panel_innerwrap.orientation = ["stack"];
  import_tab_panel.alignment = ["fill","top"];

// LABEL_IMPORT_SETTINGS_TAB
// =========================
var label_import_settings_tab = import_tab_panel_innerwrap.add("group", undefined, {name: "label_import_settings_tab"});
  label_import_settings_tab.text = "From Labels";
  label_import_settings_tab.orientation = "column";
  label_import_settings_tab.alignChildren = ["fill","top"];
  label_import_settings_tab.spacing = 10;
  label_import_settings_tab.margins = 0;

// LABEL_IMPORT_SETTINGS_PANEL
// ===========================
var label_import_settings_panel = label_import_settings_tab.add("panel", undefined, undefined, {name: "label_import_settings_panel"});
  label_import_settings_panel.text = "Label Import Settings";
  label_import_settings_panel.preferredSize.width = 399;
  label_import_settings_panel.preferredSize.height = 200;
  label_import_settings_panel.orientation = "column";
  label_import_settings_panel.alignChildren = ["left","top"];
  label_import_settings_panel.spacing = 10;
  label_import_settings_panel.margins = 10;

var from_text_field_report = label_import_settings_panel.add("statictext", undefined, undefined, {name: "from_text_field_report"});
  from_text_field_report.text = "X Labels Selected and will be Incremented by Y";
  from_text_field_report.alignment = ["fill","top"];

var create_from_label_btn = label_import_settings_panel.add("button", undefined, undefined, {name: "create_from_label_btn"});
  create_from_label_btn.text = "Create";
  create_from_label_btn.preferredSize.width = 200;
  create_from_label_btn.alignment = ["left","top"];

var instructions_divider = label_import_settings_panel.add("panel", undefined, undefined, {name: "instructions_divider"});
  instructions_divider.alignment = "fill";

var instructions_text = label_import_settings_panel.add("group");
  instructions_text.preferredSize.width = 310;
  instructions_text.orientation = "column";
  instructions_text.alignChildren = ["left","center"];
  instructions_text.spacing = 0;
  instructions_text.alignment = ["left","top"];

  instructions_text.add("statictext", undefined, "Note: Designate text fields with the \u0022#\u0022 symbol,", {name: "instructions_text"});
  instructions_text.add("statictext", undefined, "where will increment as 1, 2, 3... and ### will", {name: "instructions_text"});
  instructions_text.add("statictext", undefined, "increment as 001, 002, 003...", {name: "instructions_text"});
  instructions_text.preferredSize.width = 310;

// RECTANGLE_IMPORT_SETTINGS_TAB
// =============================
var rectangle_import_settings_tab = import_tab_panel_innerwrap.add("group", undefined, {name: "rectangle_import_settings_tab"});
  rectangle_import_settings_tab.enabled = false;
  rectangle_import_settings_tab.text = "From Rectangle";
  rectangle_import_settings_tab.orientation = "column";
  rectangle_import_settings_tab.alignChildren = ["fill","top"];
  rectangle_import_settings_tab.spacing = 10;
  rectangle_import_settings_tab.margins = 0;

// IMPORT_TAB_PANEL
// ================
import_tab_panel_tabs = [label_import_settings_tab,rectangle_import_settings_tab];

for (var i = 0; i < import_tab_panel_tabs.length; i++) {
  import_tab_panel_tabs[i].alignment = ["fill","fill"];
  import_tab_panel_tabs[i].visible = false;
}

import_tab_panel_nav.onChange = showTab_import_tab_panel;

function showTab_import_tab_panel() {
  if ( import_tab_panel_nav.selection !== null ) {
    for (var i = import_tab_panel_tabs.length-1; i >= 0; i--) {
      import_tab_panel_tabs[i].visible = false;
    }
    import_tab_panel_tabs[import_tab_panel_nav.selection.index].visible = true;
  }
}

import_tab_panel_nav.selection = 0;
showTab_import_tab_panel()

// RECTANGLE_IMPORT_SETTINGS_PANEL
// ===============================
var rectangle_import_settings_panel = rectangle_import_settings_tab.add("panel", undefined, undefined, {name: "rectangle_import_settings_panel"});
  rectangle_import_settings_panel.text = "Rectangle Import Settings";
  rectangle_import_settings_panel.preferredSize.width = 400;
  rectangle_import_settings_panel.preferredSize.height = 200;
  rectangle_import_settings_panel.orientation = "column";
  rectangle_import_settings_panel.alignChildren = ["left","top"];
  rectangle_import_settings_panel.spacing = 10;
  rectangle_import_settings_panel.margins = 10;

// LABEL_COUNT_GROUP
// =================
var label_count_group = rectangle_import_settings_panel.add("group", undefined, {name: "label_count_group"});
  label_count_group.orientation = "row";
  label_count_group.alignChildren = ["left","center"];
  label_count_group.spacing = 10;
  label_count_group.margins = 0;
  label_count_group.alignment = ["fill","top"];

var label_count_lbl = label_count_group.add("statictext", undefined, undefined, {name: "label_count_lbl"});
  label_count_lbl.text = "Label Count";
  label_count_lbl.preferredSize.width = 175;
  label_count_lbl.preferredSize.height = 30;
  label_count_lbl.alignment = ["left","top"];

var label_count_value = label_count_group.add('edittext {justify: "right", properties: {name: "label_count_value"}}');
  label_count_value.text = "18";
  label_count_value.preferredSize.width = 70;
  label_count_value.preferredSize.height = 30;
  label_count_value.alignment = ["left","top"];

// RECTANGLE_IMPORT_SETTINGS_PANEL
// ===============================
var create_from_rect_btn = rectangle_import_settings_panel.add("button", undefined, undefined, {name: "create_from_rect_btn"});
  create_from_rect_btn.text = "Create";
  create_from_rect_btn.alignment = ["fill","top"];

auto_increment_dialog.show();

/** end generated javascript **/

var set_import_type_to = (function() {
  var nav = import_tab_panel_nav,
      label_import = label_import_settings_tab,
      rectangle_import = rectangle_import_settings_tab,
      LABLE = 0,
      RECTANGLE = 1;
  return {
    label : function () {
      nav.selection = LABLE;
      label_import.enabled = true;
      rectangle_import.enabled = false;
      showTab_import_tab_panel();
    },
    rectangle : function () {
      nav.selection = RECTANGLE;
      label_import.enabled = false;
      rectangle_import.enabled = true;
      showTab_import_tab_panel();
    },
  }
}());

function toggle_tick_marks() {
  var enabled = tick_marks_enable_checkbox.value;
  setting.tick_marks.enabled = enabled;
  tick_mark_length_lbl.enabled = enabled;
  tick_mark_height_group.enabled = enabled;
  tick_marks_height_slider.enabled = enabled;
  tick_marks_height_value.enabled = enabled;
  tick_mark_label_position_group.enabled = enabled;
  tick_mark_position_lbl.enabled = enabled;
  tick_mark_placement_value.enabled = enabled;
}

tick_marks_enable_checkbox.onChange = toggle_tick_marks;
toggle_tick_marks();

function set_tick_mark_length() {
  var length = Math.round(tick_marks_height_slider.value);
  setting.tick_marks.length = length;
  tick_marks_height_value.text = setting.tick_marks.length + "%";
}
tick_marks_height_slider.onChange = set_tick_mark_length;
set_tick_mark_length();

tick_marks_height_value.onChange = function() { try {
    var str = tick_marks_height_value.text,
        length = str.match(/^[\d]*/)[0];
    setting.tick_marks.length = length;
    tick_marks_height_value.text = setting.tick_marks.length + "%";
} catch (e) { set_tick_mark_length(); } }

// Above Label,Left of Label,Right of Label,Below Label
function update_placement() {
  var selected_index = tick_mark_placement_value.selection;
  var placement = tick_mark_placement_value_array[selected_index];
  setting.tick_marks.placement = placement;
}
tick_mark_placement_value.onChange = update_placement;
update_placement();

function update_increment() { // "1"
  setting.labels.increment = parseInt(label_increment_value.text, 10);
}
label_increment_value.onChange = update_increment;
update_increment();

function update_template() { // "#"
  setting.labels.template = label_suffix_value.text;
}
label_suffix_value.onChange = update_template;
update_template()

function update_label_count() { // "18"
  setting.import_from.rectangle.label_count = parseInt(label_count_value.text, 10);
}
label_count_value.onChange = update_label_count;
update_label_count();


create_from_label_btn.onClick = create_from_labels;
create_from_rect_btn.onClick = create_from_rectangle;



function show() { auto_increment_dialog.show(); }
function hide() { auto_increment_dialog.hide(); }

  return {
    show,
    hide,
    set_import_type_to,
    setting
  }
}

/** end dialog.jsx code **/


// https://ioconsolerykerprod.blob.core.windows.net/adobe-apiplatform-prod-ioconsole-cdn/installers/ai/scripting/2022/vb_script/v2/Illustrator%20VBScript%20Reference.pdf?sv=2020-04-08&se=2022-06-17T02%3A08%3A18Z&sr=c&sp=r&sig=qX4f2Lxcf7uX%2FnqeS6vRbeya1Ej4h4ZS0jkck9%2FWvEY%3D
// https://ai-scripting.docsforadobe.dev/introduction/viewingTheObjectModel.html
// https://ai-scripting.docsforadobe.dev/introduction/executingScripts.html
// https://helpx.adobe.com/in/illustrator/using/automation-scripts.html
// https://developer.adobe.com/console/home
// https://community.adobe.com/t5/illustrator-discussions/how-can-i-create-a-shortcut-to-execute-a-script/m-p/10524390
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
  alert('create_from_labels called');
  var textFrames = filter_elements_from_selection(create_element_node_test("typename", "TextFrame"))
    .sort(sort_text_fields_left_to_right)
    .filter(filter_text_fields_by_content_regex(/^[#]*$/))
    .map(map_numbers);
}

function create_from_rectangle() {}

var dialog = get_dialog(create_from_labels, create_from_rectangle);
