import React from "react";

export default function Contact() {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [message, setMessage] = React.useState("");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     fetch("/", {
//       method: "POST",
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: encode({ "form-name": "contact", name, email, message }),
//     })
//       .then(() => alert("Message sent!"))
//       .catch((error) => alert(error));
//   }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-neutral-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex flex-col items-center justify-center relative">
                <div className="lg:w-1/2 px-6">
                    <a href="https://github.com/ConDuckt" target="_blank">
                        <img
                            className="object-cover object-center rounded mb-4"
                            alt="GitHub."
                            src="./github.svg"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </a>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-mir%C3%B3-10b67565/" target="_blank">
                        <img
                            className="object-cover object-center rounded mb-4"
                            alt="LinkedIn"
                            src="./linkedin.svg"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </a>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <a href="https://twitter.com/Con_Duckt" target="_blank">
                        <img
                            className="object-cover object-center rounded mb-4"
                            alt="Twitter"
                            src="./twitter.svg"
                            style={{ width: '50px', height: '50px' }}
                        />
                    </a>
                </div>
            </div>
        <form
          netlify
          name="contact"
        //   onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-2 font-medium title-font">
            Get in Touch
          </h2>
          <p className="leading-relaxed mb-3">
            I'll be around.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-neutral-950 rounded border border-gray-700 focus:border-lime-500 focus:ring-2 focus:ring-lime-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            //   onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-neutral-950 rounded border border-gray-700 focus:border-lime-500 focus:ring-2 focus:ring-lime-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            //   onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-neutral-950 rounded border border-gray-700 focus:border-lime-500 focus:ring-2 focus:ring-lime-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            //   onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-lime-500 border-0 py-2 px-6 focus:outline-none hover:bg-lime-900 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
