"use strict";

const repec = require("../lib/repec");

test("extracts RePEc IDs", () => {
    var str = "RePEc:wbk:wbpubs:2266\nRePEc:inn:wpaper:2016-03";

    expect(repec.extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});

test("normalizes RePec IDs", () => {
    var str = "REPEC:wbk:wbpubs:2266\nrepec:inn:wpaper:2016-03";

    expect(repec.extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});

test("extracts RePEc IDs separated by Unicode whitespace", () => {
    var str = "RePEc:wbk:wbpubs:2266 RePEc:inn:wpaper:2016-03";

    expect(repec.extract(str)).toEqual(["RePEc:wbk:wbpubs:2266", "RePEc:inn:wpaper:2016-03"]);
});
