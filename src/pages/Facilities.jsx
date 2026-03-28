import facilityBanner from "../assets/banner3.jpg"
import smartclass from "../assets/smartclass.jpg"
import transport from "../assets/transport.jpg"
import coaching from "../assets/coaching.jpg"
import library from "../assets/library.jpg"
import lab from "../assets/lab.jpg"
import cctv from "../assets/cctv.jpg"
import water from "../assets/water.jpg"
import sports from "../assets/sports.jpg"
import yoga from "../assets/yoga.jpg"
import karate from "../assets/karate.jpg"
import music from "../assets/music.jpg"
import hindi from "../assets/hindi.jpg"
import arts from "../assets/arts.jpg"
import nccnss from "../assets/nccnss.jpg"
function Facilities() {
  const facilities = [
    {
      title: "Smart Classrooms",
      image: smartclass,
      text: "Our smart classrooms support interactive teaching and help students understand concepts better through modern learning methods.",
    },
    {
      title: "Library",
      image: library,
      text: "A well-equipped library with a wide collection of books helps students improve reading habits and knowledge.",
    },
    {
      title: "Science & Computer Lab",
      image: lab,
      text: "Practical learning through lab facilities helps students gain hands-on knowledge in science and computer subjects.",
    },
    {
      title: "Safe Transport",
      image: transport,
      text: "School transport is available from nearby areas to ensure safe and convenient travel for students.",
    },
    {
      title: "Special Coaching",
      image: coaching,
      text: "Extra coaching and guided preparation are provided for public examinations and academic improvement.",
    },
    {
      title: "CCTV Surveillance",
      image: cctv,
      text: "The campus is monitored with CCTV surveillance to support student safety and discipline.",
    },
    {
      title: "RO Drinking Water",
      image: water,
      text: "Clean and safe RO drinking water facility is available for all students on campus.",
    },
    {
      title: "Sports & Activities",
      image: sports,
      text: "Students are encouraged to take part in sports, cultural activities, and skill-based programs for overall development.",
    },
    { title: "NCC & NSS",
      image: nccnss,
      text: "NCC and NSS"
    }
  ]

  return (
    <div className="bg-gray-50">
      <section className="relative h-[280px] md:h-[380px]">
        <img
          src={facilityBanner}
          alt="School Facilities"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Our Facilities
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            A supportive environment for learning, safety, and growth
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Facilities at Vidyasri School
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-green-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-700 leading-7">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVITIES */}

<section className="max-w-6xl mx-auto px-4 pb-10">

  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Activities & Training
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">

    <div className="bg-white rounded-xl shadow overflow-hidden text-center">
      <img src={yoga} className="w-full h-28 object-cover" />
      <p className="p-2 font-semibold">Yoga</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden text-center">
      <img src={karate} className="w-full h-28 object-cover" />
      <p className="p-2 font-semibold">Karate</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden text-center">
      <img src={music} className="w-full h-28 object-cover" />
      <p className="p-2 font-semibold">Music</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden text-center">
      <img src={hindi} className="w-full h-28 object-cover" />
      <p className="p-2 font-semibold">Hindi</p>
    </div>

    <div className="bg-white rounded-xl shadow overflow-hidden text-center">
      <img src={arts} className="w-full h-28 object-cover" />
      <p className="p-2 font-semibold">Arts</p>
    </div>

  </div>

</section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-green-700 text-white rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl md:text-3xl font-bold">
            Visit Our Campus
          </h2>
          <p className="mt-3 text-lg">
            Explore our facilities and learn more about student life at Vidyasri.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="tel:9486948744"
              className="bg-white text-green-700 px-6 py-3 rounded-lg font-semibold"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919486948744"
              target="_blank"
              rel="noreferrer"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Facilities