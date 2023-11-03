function play(songs, isShuffle, isRepeat) {
  if (songs.length === 0) {
    console.log("Playlist is empty.");
    return;
  }

  let list = songs.slice();

  if (isShuffle) {
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  for (let i = 0; i < (isRepeat ? 2 : 1); i++) {
    for (let j = 0; j < list.length; j++) {
      console.log("Playing: " + list[j]);
    }

    if (!isRepeat) {
      console.log("End of playlist.");
      break;
    }
  }
}

// Example usage:
const mylist = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
play(mylist, true, true);
