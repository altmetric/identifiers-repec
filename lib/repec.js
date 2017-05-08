"use strict";

function extract(str) {
    var matches = String(str).match(/\brepec:[^\s]+\b/ig);
    if (!matches) { return []; }

    return matches.map(normalize);
}

function normalize(repec) {
    var tail = repec.substring("repec:".length);
    return "RePEc:" + tail;
}

exports.extract = extract;
