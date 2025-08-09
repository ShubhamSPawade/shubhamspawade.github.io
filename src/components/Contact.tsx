"use client";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import { TextAnimate } from "@/components/magicui/text-animate";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { toast } from "react-hot-toast";

export const ContactSection = () => {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // Basic client-side validation
    const name = formData.get('name')?.toString().trim() || '';
    const email = formData.get('email')?.toString().trim() || '';
    const message = formData.get('message')?.toString().trim() || '';
    const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

    console.log('Form data:', { name, email, message });
    console.log('Access key exists:', !!accessKey);

    if (!name || !email || !message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    if (!accessKey) {
      console.error('Web3Forms access key is missing');
      toast.error('Configuration error. Please try again later.');
      return;
    }

    // Prepare data for Web3Forms
    const data = {
      access_key: accessKey,
      name,
      email,
      message,
      subject: 'New Contact Form Submission from Portfolio',
      from_name: 'Portfolio Contact Form',
      botcheck: formData.get('botcheck') || '',
    };

    console.log('Sending data to Web3Forms:', data);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      console.log('Web3Forms response:', result);

      if (result.success) {
        toast.success("Message sent successfully! 🚀");
        form.reset();
      } else {
        console.error('Web3Forms Error Details:', {
          status: response.status,
          statusText: response.statusText,
          response: result
        });
        toast.error(result.message || `Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Submission Error:', error);
      toast.error("Failed to connect to the server. Please check your connection and try again.");
    }
  }

  return (
    <>
      <section className="flex items-center justify-center">
        <div className="container max-w-2xl mx-auto px-4 py-14 flex flex-col items-center justify-center">
          <div className="mb-8 flex flex-col gap-2 items-center">
            <span className="flex items-center gap-2 text-lime-400 font-medium uppercase tracking-wider text-sm mb-2">
              <SparkleIcon className="size-5 text-lime-400" />
              Connect with me
            </span>
            <div className="bg-gray-950 border border-gray-800 px-4 py-2 inline-flex items-center gap-4 rounded-lg">
              <div className="bg-green-500 size-2.5 rounded-full relative">
                <div className="bg-green-500 absolute inset-0 rounded-full animate-ping"></div>
              </div>
              <div className="text-sm font-semibold">Available for work</div>
            </div>
            <h2 className="text-white px-8 font-host-grotesk text-5xl sm:text-2xl md:px-16 md:text-5xl font-bold leading-tight text-center">
              <TextAnimate
                className="px-8"
                animation="blurInUp"
                by="character"
                duration={1}
              >
                Let&apos;s start a project together
              </TextAnimate>
            </h2>
          </div>
          <form
            className="space-y-6 flex flex-col items-center w-full"
            onSubmit={handleSubmit}
          >
            {/* Honeypot field for spam prevention */}
            <input type="checkbox" name="botcheck" className="hidden" />
            
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="name"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                autoComplete="name"
              />
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="email"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400"
                autoComplete="off"
              />
            </div>
            <div className="lg:w-96 sm:w-80 flex flex-col items-center">
              <label
                className="block text-white mb-2 self-start"
                htmlFor="message"
              >
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="lg:w-96 sm:w-80 rounded-lg bg-transparent border border-gray-700 px-4 py-3 text-white focus:outline-none focus:border-lime-400 resize-none"
              ></textarea>
            </div>

            <InteractiveHoverButton type="submit">
              Submit
            </InteractiveHoverButton>
          </form>
        </div>
      </section>
    </>
  );
};
