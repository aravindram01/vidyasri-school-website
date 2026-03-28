import logo from "../assets/logo.png"

function Footer() {
  return (
    <footer className="bg-green-800 text-white mt-10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid md:grid-cols-3 gap-8 items start">

        {/* LOGO */}

        <div className="w-full flex justify-center">
  <div className="flex flex-col items-center text-center">
    <img
      src={logo}
      alt="logo"
      className="w-28 bg-white p-1 rounded mb-4"
    />

    <p className="text-sm text-green-100 max-w-s">
      Quality education with discipline, care, and academic excellence.
      Admissions open from Pre-KG to XII Std.
    </p>
  </div>
</div>


        {/* QUICK LINKS */}

        <div>

          <h4 className="text-lg font-semibold mb-3">
            Quick Links
          </h4>

          <div className="grid grid-cols-2 gap-2 text-green-100 text-sm">

            <a href="/">Home</a>
            <a href="/gallery">Gallery</a>

            <a href="/about">About</a>
            <a href="/facilities">Facilities</a>

            <a href="/admissions">Admissions</a>
            <a href="/contact">Contact</a>

          </div>

        </div>



        {/* CONTACT */}

        <div>

          <h4 className="text-lg font-semibold mb-3">
            Contact
          </h4>

          <p className="text-green-100 text-sm">
            Vidyasri English Higher Secondary School
          </p>

          <p className="text-green-100 text-sm">
            Nedungadu – 609603
          </p>

          <p className="text-green-100 text-sm">
            Ph: 04368-262232
          </p>

          <p className="text-green-100 text-sm">
            Mobile: 9486948744
          </p>

          <p className="text-green-100 text-sm">
            Email: vidyaashri@gmail.com
          </p>

        </div>

      </div>



      {/* BOTTOM */}

      <div className="border-t border-green-700 text-center text-sm text-green-100 py-4">

        © 2026 Vidyasri English Higher Secondary School. All rights reserved.

      </div>

    </footer>
  )
}

export default Footer