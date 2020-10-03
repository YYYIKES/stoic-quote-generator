/*

Created by:     GHXXST
Website:        https://github.com/GHXXST/

Project:        Stoic Quote Generator
Description:    Generates new stoic quotes based on Marcus Aurelius' 'Meditations'.

Requirements:   p5.js, rita.js

*/


var generator;
const n = 3;  // N-gram length


function setup() {
    noCanvas();
    
    // First argument is N-gram length
    generator = new RiMarkov(n, recognizeSentences=true, allowDuplicates=false);
    generator.loadFrom('dictionaries/stoic-dictionary.txt');
    // Button setup
    var button = select('#button');
    button.mousePressed(generate);
}


function generate() {
    var text = generator.generateSentences(3);
    var output = select('#gen0');
    output.html(text[0]);
}
