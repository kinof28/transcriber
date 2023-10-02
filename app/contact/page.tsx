import ContactForm from "../_components/UI/ContactForm";
const ContactPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#9f56db] to-[#5a4cdb] text-white flex flex-col items-center justify-start min-h-screen">
      <h1 className="text-5xl font-bold m-8">Contact</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
