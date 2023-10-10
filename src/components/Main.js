import { React, useState, useEffect } from "react";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import AddSong from "./AddSong";
import ReactPlayer from "react-player";
import { listSongs } from "../graphql/queries";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { CiPause1 } from "react-icons/ci";
import { FaRegPlayCircle } from "react-icons/fa";

const Main = (props) => {
  const [songs, setSongs] = useState([]);
  const [songsPlaying, setSongsPlaying] = useState("");
  const [audioURL, setAudioURL] = useState("");
  const [showAddSong, setShowAddSong] = useState(false);
  const [imgURLlist, setImageURLlist] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // when everytime App rerender
  useEffect(() => {
    fetchSongs();
  }, []);

  const toggleSong = async (index) => {
    if (songsPlaying === index) {
      setSongsPlaying("");
      return;
    }

    const songFilePath = songs[index].filePath;
    const regex = /key=(.*?)}/;
    const match = songFilePath.match(regex);

    console.log("songFilePath => ", songFilePath);
    try {
      if (match) {
        const key = match[1]; // 获取匹配的部分
        console.log("key => ", key);
        const fileAccessUrl = await Storage.get(key, { expires: 240 }); // 4分鐘後過期
        console.log("fileAccessUrl => ", key, fileAccessUrl);
        setAudioURL(fileAccessUrl);
        setSongsPlaying(index);
        return;
      } else {
        const fileAccessUrl = await Storage.get(songFilePath, { expires: 240 }); // 4分鐘後過期
        console.log("fileAccessUrl => ", songFilePath, fileAccessUrl);
        setAudioURL(fileAccessUrl);
        setSongsPlaying(index);
        return;
      }
    } catch (error) {
      // 有失誤的話就不播東西
      console.error("error access the file from S3 => ", error);
      setAudioURL("");
      setSongsPlaying("");
    }
  };

  const fetchSongs = async () => {
    try {
      const songData = await API.graphql(graphqlOperation(listSongs));
      const songList = songData.data.listSongs.items;
      console.log("song List => ", songList);

      const songsWithImgLinks = [];
      const regex = /key=(.*?)}/;

      await Promise.all(
        songList.map(async (song) => {
          const imgPath = song.imgPath;
          const match = imgPath.match(regex);
          if (match) {
            const key = match[1]; // 获取匹配的部分
            console.log("key => ", key);
            const imgAccessUrl = await Storage.get(key, { expires: 180 });
            console.log("key, imgAccessUrl => ", key, imgAccessUrl);
            songsWithImgLinks.push(imgAccessUrl);
          } else {
            const imgAccessUrl = await Storage.get(imgPath, { expires: 180 });
            console.log("key, imgAccessUrl => ", imgPath, imgAccessUrl);
            songsWithImgLinks.push(imgAccessUrl);
          }
        })
      );
      setImageURLlist(songsWithImgLinks);
      setSongs(songList);
    } catch (error) {
      console.log("error on fetching songs => ", error);
    }
  };
  return (
    <div className="mainContent">
      <div className="header">
        {showAddSong ? (
          <AddSong
            onUpload={() => {
              setShowAddSong(false);
              fetchSongs();
            }}
          />
        ) : (
          <AiOutlineAppstoreAdd
            className="addIcon"
            style={{ fontSize: "30px" }}
            onClick={() => setShowAddSong(true)}
          />
        )}
      </div>
      <div className="cardsWrap">
        {/* sample cards */}
        <div className="cards">
          <div className="cardImg">
            <img
              src="https://images.unsplash.com/photo-1609102026400-3c0ca378e4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2094&q=80"
              alt="pic"
            />
            <FaRegPlayCircle
              className="playButton"
              style={{ fontSize: "40px" }}
            />
          </div>
          <div className="cardContent">
            <h3>Song Name</h3>
            <p>description</p>
          </div>
        </div>

        {/* end of sample cards */}
        {songs.map((song, index) => {
          return (
            <div className="cards" key={song.id}>
              <div className="cardImg">
                <img
                  src={imgURLlist[index]}
                  alt="pic"
                  onClick={() => toggleSong(index)}
                />
                {songsPlaying !== index || !isPlaying ? (
                  <FaRegPlayCircle
                    className="playButton"
                    style={{ fontSize: "40px" }}
                    onClick={() => toggleSong(index)}
                  />
                ) : (
                  <CiPause1
                    className="playButton"
                    style={{ fontSize: "40px" }}
                    onClick={() => toggleSong(index)}
                  />
                )}
              </div>

              <div className="cardContent">
                <h3>{song.title}</h3>
                <p>{song.description}</p>
              </div>

              {songsPlaying === index ? (
                <div className="AudioPlayer">
                  <p>
                    {songs[songsPlaying].title} -{" "}
                    {songs[songsPlaying].description}{" "}
                  </p>
                  <ReactPlayer
                    url={audioURL}
                    controls
                    playing={songsPlaying === index}
                    height="50px"
                    onPause={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    // onPause={() => toggleSong(index)}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
