export const ContactUsCard = () => {
    return (
      <div id="contact-section" className="text-center mt-10">
        <h1 className="text-green-700 text-3xl font-semibold mb-10">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
         
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-6">
              Wed love to hear from you! Whether you have a question, feedback, or
              need assistance, feel free to contact us.
            </p>
            <p className="text-lg font-medium">Phone: +123 456 7890</p>
            <p className="text-lg font-medium">Email: contact@company.com</p>
          </div>
  
         
          <div>
            <form className="flex flex-col gap-6">
              <div>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="YOUR NAME"
                  type="text"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="YOUR EMAIL"
                  type="email"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="YOUR CONTACT NO"
                  type="text"
                  required
                />
              </div>
              <div>
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="YOUR MESSAGE"
                  rows="4"
                  required
                />
              </div>
              <div>
                <button
                  className="w-36 bg-green-700 text-white p-3 rounded-lg hover:bg-green-900 transition duration-300"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  