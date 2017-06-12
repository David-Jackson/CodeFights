function htmlEndTagByStartTag(startTag) {
    temp = startTag.split("<")[1].split(" ")[0].split(">")[0];
    return "</" + temp + ">";
}
​