import Image from "next/image";
import Card from "./UI/Card";
import aboutHero from "../_assets/about_hero.webp";
import WebsiteAbout from "../_assets/website-about.jpg";
import Me from "../_assets/1654551027970.jpeg";
import Button from "./UI/Button";
import Link from "next/link";
const About = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] p-16 text-white flex items-center justify-between">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-5">About US</h1>
          <p className="text-lg font-medium">
            Welcome to Transcriber, your trusted online service for transcribing
            videos and generating audio files from text! <br />
            At Transcriber, we understand the power of effective communication.
            Whether you're a content creator, business professional, educator,
            or anyone in need of converting spoken words into text or text into
            speech, we're here to make the process seamless and efficient.
          </p>
        </div>
        <Image className="h-auto w-2/5 rounded-2xl" src={aboutHero} alt="" />
      </section>
      <section className="mt-16">
        <Card
          title="What is this website really about?"
          image={WebsiteAbout}
          alt=""
          reversed={true}
        >
          <p>
            I can go and fill this space about our mission, our services, and
            why you should choose us, But I want to be real. This is a project I
            made to show my coding and engineering skills, So if you like what
            you see, go ahead and contact me and if you don't like what you see,
            contact me and tell me why you don't like it. I would very much
            appreciate your feedback. You can send me a message from the contact
            section, or use my email:
            <a href="mailto:hamadouche.abdelwahab@gmail.com">
              hamadouche.abdelwahab@gmail.com
            </a>
          </p>
        </Card>
      </section>
      <Card title="Who am I?" image={Me} alt="Me">
        <p>
          I'm Abdelwahab Hamadouche, A software Engineer, currently Unemployed,
          and that's what I'm trying to change by creating this beautiful
          astonishing website {":)"}
          <br />
          So just be in touch ...
        </p>
        <Link href="/contact">
          <Button
            className="bg-indigo-800 text-white my-10"
            value="Contact Me"
          />
        </Link>
      </Card>
      <section className="bg-[#F7F7FD] p-20">
        <h1>Where to find me?</h1>
        Email: <a href="mailto:hamadouche.abdelwahab@gmail.com"></a>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/abdelwahab-hamadouche/"
          target="_blank"
        >
          @
        </a>
      </section>
    </>
  );
};

export default About;
