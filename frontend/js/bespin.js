/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1
 *
 * The contents of this file are subject to the Mozilla Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied.
 * See the License for the specific language governing rights and
 * limitations under the License.
 *
 * The Original Code is Bespin.
 *
 * The Initial Developer of the Original Code is Mozilla.
 * Portions created by the Initial Developer are Copyright (C) 2009
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   Bespin Team (bespin@mozilla.com)
 *   Ben and Dion (ben@galbraiths.org, dion@almaer.com)
 *
 * ***** END LICENSE BLOCK ***** */

var Bespin = {
    version: 'tip'
};

var _ = Bespin; // alias away!

var _editor;
var _editors = [];

// ** {{{ window.load time }}} **
//
// Loads and configures the objects that the editor needs
Event.observe(document, "dom:loaded", function() {
    // find some Bespin instances and instantiate them
    var editorElements = $$(".bespin-editor");
    if (editorElements.length == 0) return; // no bespins here, move along

    editorElements.forEach(function(element) {
        _editors.push(new Bespin.Editor.API(element));
    });

    //_editor = new Bespin.Editor.API($(editorElements[0]));

    Element.observe(window, 'resize', doResize);
});

//function loadLib(url, callback) {
//    var script = document.createElement("script");
//    script.src = url;
//    if (callback) script.onload = callback;
//    document.body.appendChild(script);
//}

function doResize() {
    _editors.forEach(function(editor) {
        editor.paint();
    });
    //_editor.paint();
}