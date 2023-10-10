import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Amplify, { API, graphqlOperation, Storage } from "aws-amplify";
import { createSong } from "../graphql/mutations";

const AddSong = ({ onUpload }) => {
  const [songData, setSongData] = useState({});
  const [musicData, setMusicData] = useState();
  const [IMGData, setIMGData] = useState();

  const onUploadSong = async () => {
    try {
      console.log("songData => ", songData);
      const { title, description } = songData;

      const keyMusic = await Storage.put(`${uuid()}.mp3`, musicData, {
        contentType: "audio/mp3",
      });
      const keyIMG = await Storage.put(`${uuid()}.jpeg`, IMGData, {
        contentType: "image/jpeg",
      });

      const createSongData = {
        id: uuid(),
        title,
        description,
        filePath: keyMusic,
        imgPath: keyIMG,
      };
      console.log("createSongData => ", createSongData);

      await API.graphql(
        graphqlOperation(createSong, { input: createSongData })
      );

      onUpload();
    } catch (error) {
      console.log("createSong Failed => ", error);
    }
  };

  return (
    <div className="addSong">
      <form>
        <label>Song Name: </label>
        <input
          type="text"
          required
          value={songData.title}
          onChange={(e) => setSongData({ ...songData, title: e.target.value })}
        />
        <label>Description: </label>
        <input
          type="text"
          required
          value={songData.description}
          onChange={(e) =>
            setSongData({ ...songData, description: e.target.value })
          }
        />
        <label>Music File: </label>
        <input
          type="file"
          required
          accept="audio/mp3"
          onChange={(e) => setMusicData(e.target.files[0])}
        />
        <label>IMG File: </label>
        <input
          type="file"
          required
          accept="image/jpeg"
          onChange={(e) => setIMGData(e.target.files[0])}
        />
        {/* <br /> */}
        {/* <button className="AddCancelIcon" onClick={onUploadSong}>
          Add Song
        </button> */}
        <div className="AddCancelIcon" onClick={onUploadSong}>
          Add Song
        </div>
      </form>
      {/* <button className="AddCancelIcon" onClick={() => setShowAddSong(false)}>
        {" "}
        Cancel
      </button> */}
    </div>
  );
};

export default AddSong;
