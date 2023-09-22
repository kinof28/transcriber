import Image from "next/image";
import Card from "./UI/Card";
import aboutHero from "../_assets/about_hero.webp";
import WebsiteAbout from "../_assets/website-about.jpg";
import Me from "../_assets/1654551027970.jpeg";
import Button from "./UI/Button";
import Link from "next/link";
import ContactCard from "./UI/ContactCard";
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
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
            section, or use my email:{" "}
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
      <section className="bg-[#F7F7FD] px-20 py-10 flex-row justify-center items-center text-center">
        <h1 className="text-4xl font-bold text-indigo-900">
          Where to find me?
        </h1>
        <div className="mt-5">
          {/* Email: <a href="mailto:hamadouche.abdelwahab@gmail.com"></a>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/abdelwahab-hamadouche/"
            target="_blank"
          >
            @
          </a> */}
          <div className="flex w-full gap-4">
            <a
              href="https://www.facebook.com/abdelwahab.hamadouche"
              target="_blank"
              className="w-full"
            >
              <ContactCard
                Icon={BsFacebook}
                bgColor="bg-[#1877F2]"
                titleColor="text-[#1877F2]"
                title="On Facebook"
              >
                <h3>@abdelwahab.hamadouche</h3>
              </ContactCard>
            </a>
            <a
              href="https://github.com/kinof28"
              target="_blank"
              className="w-full"
            >
              <ContactCard
                Icon={BsGithub}
                bgColor="bg-indigo-900"
                titleColor="text-indigo-900"
                title="On Github"
              >
                <h3>@kinof28</h3>
              </ContactCard>
            </a>
            <a
              href="https://www.linkedin.com/in/abdelwahab-hamadouche"
              target="_blank"
              className="w-full"
            >
              <ContactCard
                Icon={BsLinkedin}
                bgColor="bg-[#0A66C2]"
                titleColor="text-[#0A66C2]"
                title="On LinkedIn"
              >
                <h3>@abdelwahab-hamadouche</h3>
              </ContactCard>
            </a>
          </div>
          <div className="mt-5 flex justify-center">
            <a
              href="https://www.youtube.com/@CodewithWahab"
              target="_blank"
              className="w-1/3"
            >
              <ContactCard
                Icon={BsYoutube}
                bgColor="bg-[#F00]"
                titleColor="text-[#f00]"
                title="On Youtube"
              >
                <h3>@CodewithWahab</h3>
              </ContactCard>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
