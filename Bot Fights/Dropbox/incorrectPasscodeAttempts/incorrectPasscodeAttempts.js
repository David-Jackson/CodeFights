function incorrectPasscodeAttempts(passcode, attempts) {
    var cons = 0;
    for (var i = 0; i < attempts.length; i++) {
        if (attempts[i] == passcode) {
            cons = 0;
        } else {
            cons++;
        }
        if (cons == 10) return true;
    }
    return false;
}
