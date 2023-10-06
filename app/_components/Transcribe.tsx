import { MdCloudUpload } from "react-icons/md";

const Transcribe = () => {
  return (
    <section>
      {/* Transcribe Videos */}
      <div className="flex p-5 gap-5">
        <div
          className="h-72 bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] flex-1 rounded-xl flex justify-center items-center text-white text-7xl cursor-pointer hover:text-8xl transition-all"
          title="upload a video"
        >
          <input type="file" className="hidden" />
          <MdCloudUpload />
        </div>
        <div
          className="flex-1 border-2 h-72 border-zinc-600 bg-white rounded-xl p-5 overflow-y-auto custom-scroll"
          contentEditable
        >
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
          <p>The video transcription: ...</p>
        </div>
      </div>
    </section>
  );
};

export default Transcribe;
