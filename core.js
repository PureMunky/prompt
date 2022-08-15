var lingo = (function() {
    function getNumber(top) {
        return Math.round(Math.random() * 100000) % top
    }

    function getSelectWord(list) {
        var i = getNumber(list.length);
        return list[i];
    }

    function getNoun() {
        var list = ['cat', 'dog', 'eagle', 'alien', 'game', 'child', 'bird', 'cheetah', 'clothing', 'outfit', 'beach', 'steward'];
        return getSelectWord(list);
    }

    function getAdjective() {
        var list = ['sneaky', 'copious', 'gargantuan', 'normal', 'super', 'tiny', 'diminutive', 'penultimate', 'prosperous', 'nostalgic'];
        return getSelectWord(list);
    }

    function getVerb() {
        var list = ['walks', 'runs', 'jumps', 'swims', 'pushes', 'waits', 'flies', 'builds', 'sits'];
        return getSelectWord(list);
    }

    function getPreposition() {
        var list =['through', 'around', 'on', 'over', 'before'];
        return getSelectWord(list);
    }

    return {
        getNoun: getNoun,
        getAdjective: getAdjective,
        getVerb: getVerb,
        getPreposition: getPreposition,
    };
}());

(function(lingo) {
    var output = document.getElementById('dvOutput');

    output.innerText = `The ${lingo.getAdjective()} ${lingo.getNoun()} ${lingo.getVerb()} ${lingo.getPreposition()} the ${lingo.getAdjective()} ${lingo.getNoun()}.`;
}(lingo))
