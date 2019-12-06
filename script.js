var array = document.getElementsByClassName("track-name-wrapper");
var obj_result = {};

for (var i = 0; i < array.length; i++) {
    var element = array[i];
    var artist = element.getElementsByClassName("tracklist-row__artist-name-link")[0].innerText;
    var song_name = element.getElementsByClassName("tracklist-name")[0].innerText;

    if (obj_result[artist]) {
        obj_result[artist].push(song_name);
    } else {
        obj_result[artist] = [song_name];
    }
}
console.log(JSON.stringify(obj_result));
console.log(obj_result);
