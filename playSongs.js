function playSongs(songs, isShuffle, isRepeat) 
{
  //check if playlist is empty
  if (songs.length === 0)
  {
    console.log("Playlist is empty.");
    return;
  }

  //create a sublist of playlist using slice method
  let list = songs.slice();

  //shuffling playlist
  if (isShuffle) 
  {
    for (let i = list.length - 1; i > 0; i--) 
    {
      const j = Math.floor(Math.random() * (i + 1));//Pick a random index between 1 and the current position 
      [list[i],list[j]] = [list[j], list[i]];//swapping the elements at i and j
    }
  }
  //playing shuffled playlist 
  while (true)
  {
    for (let i = 0; i <list.length; i++) 
    {
      console.log("Playing: " +list[i]);
    }
    //not repeat then do this
    if (!isRepeat) 
    {
      console.log("End of playlist.");
      break;
    }
  }
}


