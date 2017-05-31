function isInformationConsistent(evidences) {
    for (var j = 0; j < evidences[0].length; j++) {
        var guilty = false,
            innocent = false;
        for (var i = 0; i < evidences.length; i++) {
            if (evidences[i][j] == 1) guilty = true;
            if (evidences[i][j] == -1) innocent = true;
        }
        if (guilty && innocent) return false;
    }
    return true;
}
​