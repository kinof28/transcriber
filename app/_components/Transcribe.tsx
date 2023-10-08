"use client";
import { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import { UploadButton } from "../_utils/uploadthing";
import "@uploadthing/react/styles.css";

const Transcribe = () => {
  const [videoURL, setVideoURL] = useState("");
  const [transcription, setTranscription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [transcribing, setTranscribing] = useState(false);
  return (
    <section>
      {/* Transcribe Videos */}
      <div className="flex p-5 gap-5">
        <label
          className="h-72 bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] flex-1 rounded-xl flex justify-center items-center text-white text-7xl cursor-pointer hover:text-8xl transition-all"
          title="upload a video"
          htmlFor="upload"
        >
          <input type="file" id="upload" className="hidden" />
          <MdCloudUpload />
        </label>
        <div className="flex-1 border-2 h-72 border-zinc-600 bg-white rounded-xl p-5 overflow-y-auto custom-scroll">
          <p className="outline-none">The video transcription: ...</p>
        </div>
      </div>
      <UploadButton
        endpoint="videoUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
    </section>
  );
};

export default Transcribe;
