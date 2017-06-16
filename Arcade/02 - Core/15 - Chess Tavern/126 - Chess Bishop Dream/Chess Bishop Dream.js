function chessBishopDream(size, pos, dir, k) {
    var hist = [];
    for (var i = 0; i < k; i++) {
        hist.push({pos:[pos[0], pos[1]], dir:[dir[0], dir[1]]});
        pos[0] += dir[0];
        pos[1] += dir[1];
        if (pos[0] < 0 || pos[0] >= size[0]) {
            dir[0] *= -1;
            pos[0] += dir[0];
        }
        if (pos[1] < 0 || pos[1] >= size[1]) {
            dir[1] *= -1;
            pos[1] += dir[1];
        }
        if (hist[0].pos[0] == pos[0] &&
           hist[0].pos[1] == pos[1] &&
           hist[0].dir[0] == dir[0] &&
           hist[0].dir[1] == dir[1]) {
            // We have already been in this position, going the same direction. We are in a cycle.
            return hist[(k - 1 - i) % hist.length].pos;
        }
    }
    return pos;
}
​