/**
 * Created by Josh on 1/28/16.
 */
var findvars = (function () {
    function findvars() {
    }
    //finds number of vars
    findvars.countvars = function (input) {
        var matches = input.match(/\{[^ \{\}]\}/g);
        return matches.length;
    };
    //finds all vars in string
    findvars.getvars = function (input) {
        return input.match(/\{[^ \{\}]\}/g);
    };
    //checks for duplicate variables in the string
    findvars.checkduplicates = function (input) {
        var found = findvars.getvars(input);
        var counts = {};
        for (var i = 0; i < found.length; i++) {
            if (found[i] in counts)
                return false;
            else
                counts[found[i]] = 1;
        }
        return true;
    };
    return findvars;
})();
var replacevars = (function () {
    function replacevars() {
    }
    replacevars.replacevar = function (input, keys) {
        for (var key in keys) {
            var patt = new RegExp("{" + key + "}");
            input = input.replace(patt, keys[key]);
        }
        return input;
    };
    return replacevars;
})();

//main function for template strings
function FormString(string, obj) {
    if(findvars.checkduplicates(string)) return replacevars.replacevar(string, obj);
    else throw "You have a duplicate bracket in the string";
}