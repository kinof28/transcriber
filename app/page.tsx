import Image from "next/image";
import autoCaption from "./_assets/auto-captions.webp";
import textToSpeech from "./_assets/Text_to_speech.webp";
import Link from "next/link";
import Card from "./_components/UI/Card";
import Button from "./_components/UI/Button";

export default function Home() {
  return (
    <>
      <section className="lg:h-screen w-full relative ">
        <video
          poster="./poster.png"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          className="h-full w-full object-cover object-center "
        >
          <source src="./Hero_Image.mp4" type="video/mp4" />
        </video>
        <div className="bg-gradient-to-r from-[#2b298a] via-[#2b298abb] to-[#2b298a00] z-10 absolute top-0 h-full w-2/3 flex items-center">
          <div className=" pl-28">
            <h1 className="xl:text-4xl lg:text-4xl text-xl font-bold text-white ">
              Quick and Easy Video Transcriber
            </h1>
            <p className="text-white text-xl my-5 pr-80">
              Everything you need to create show-stopping videos, no expertise
              required.
            </p>
            <Link href="/auth">
              <Button
                className="bg-white text-violet-600"
                value="Try for free"
              />
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center p-20">
        <h1 className="text-4xl font-extrabold text-indigo-900 mb-10">
          Smart tools that help you Transcribe
        </h1>
        <Card title="AUTO-CAPTIONS" image={autoCaption} alt="AUTO-CAPTIONS">
          <p>
            Automatically create accurate captions in over 140 languages. Our
            speech-to-text technology securely transcribes your video's audio,
            converting it into readable captions in just minutes.
          </p>
        </Card>
        <Card
          title="TEXT TO SPEECH"
          image={textToSpeech}
          alt="Text to Speech"
          reversed={true}
        >
          <p>
            Turn text into speech with one click. Choose a language, change the
            voice, pitch, style and pace to accurately replicate a wide range of
            natural-sounding voices.
          </p>
        </Card>
      </section>
      <section>{/* pricing */}</section>
      <section>{/* what is this web site about */}</section>
    </>
  );
}
