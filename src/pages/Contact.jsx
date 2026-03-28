function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* LEFT SIDE */}

        <div>

          <h2 className="text-xl font-bold mb-3">
            School Address
          </h2>

          <p>
            Vidyasri English Higher Secondary School
          </p>

          <p>Nedungadu, Karaikal – 609603</p>

          <p>Ph: 04368-262232</p>

          <p>Mobile: 9486948744</p>

          <p>
            Email: 
            <a
              href="mailto:vidyaashri@gmail.com"
              className="text-blue-600 underline"
            >
               vidyaashri@gmail.com
            </a>
          </p>          

          <div className="mt-4">

            <a
              href="tel:9486948744"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Call Now
            </a>
          
          </div>

          <div className="mt-5">

            <a
              href="https://wa.me/919486948744"
              target="_blank"
              className="bg-green-800 text-white px-4 py-2 rounded"
            >
              WhatsApp
            </a>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}

        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="bg-gray-300 p-4 rounded shadow"
        >

          <input
            type="hidden"
            name="access_key"
            value="1d5b6d7a-2c96-464e-bafb-df99789ce18d"
          />

          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-2 mb-3 border"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full p-2 mb-3 border"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full p-2 mb-3 border"
          />

          <button
            type="submit"
            className="bg-green-700 text-white px-4 py-2"
          >
            Send Message
          </button>

        </form>

      </div>


      {/* MAP */}

      <div className="mt-8">

        <h2 className="text-xl font-bold mb-3 text-center">
          Our Location
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.4115743861523!2d79.77236394119187!3d10.976717832817034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a551790050e2c37%3A0xff25b869aafcb47d!2sVIDYASRI%20HR.%20SEC.%20SCHOOL%2C%20NEDUNGADU!5e0!3m2!1sen!2sin!4v1773911490583!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded shadow"
        ></iframe>

      </div>

    </div>
  )
}

export default Contact