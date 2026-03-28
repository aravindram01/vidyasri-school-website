import { useState, useEffect } from "react"
import img1 from "../assets/banner1.jpg"
import img2 from "../assets/banner2.jpg"
import img3 from "../assets/banner3.jpg"
import result from "../assets/result.jpg"
import teachers from "../assets/teachers.jpg"
import transport from "../assets/transport.jpg"
import smartclass from "../assets/smartclass.jpg"
import experience from "../assets/experience.jpg"
import coaching from "../assets/coaching.jpg"
import resultImg from "../assets/events/result2025.jpg"
import annualImg from "../assets/events/exam timetable.jpg"
import admissionImg from "../assets/events/admission.jpg"

function Home() {
  const images = [img1, img2, img3]

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const events = [
  {
    title: "X & XII Result 2025",
    date: "May 2025",
    text: "Our students achieved excellent results in public exams.",
    image: resultImg,
    pdf: "/pdfs/result2025.pdf",
  },
  {
    title: "Admissions Open 2026–2027",
    date: "April 2026",
    text: "Admissions open from Pre-KG to XII Std.",
    image: admissionImg,
    pdf: "/pdfs/admission.pdf",
  },
  {
    title: "Public Exam Timetable",
    date: "March 2026",
    text: "SSLC & HSC Timetable and Holidays.",
    image: annualImg,
    pdf: "/pdfs/exam timetable.pdf",
  },
  ]

  return (
    <div>

      {/* ===== SLIDER ===== */}

      <div className="relative w-full h-[450px] md:h-[550px]">

        <img
          src={images[index]}
          className="w-full h-full object-cover"
        />

        {/* overlay */}

        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">

          
          <h1 className="text-3xl md:text-5xl font-bold">
            VIDYASRI ENGLISH HIGHER SECONDARY SCHOOL
          </h1>

          <p className="mt-2">
            (Recognized by Government of Puducherry)
          </p>

          <h2 className="mt-4 text-2xl md:text-3xl text-yellow-300 font-bold">
            ADMISSIONS OPEN 2026 – 2027
          </h2>

          <p className="mt-1 text-lg">
            Pre-KG to XII Std
          </p>

          <div className="flex gap-4 mt-5">

            <a
              href="tel:9486948744"
              className="bg-white text-green-700 px-5 py-2 rounded font-semibold"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919486948744"
              target="_blank"
              className="bg-green-600 px-5 py-2 rounded font-semibold"
            >
              WhatsApp
            </a>

          </div>

        </div>

      </div>

      {/* ===== LATEST EVENTS ===== */}

<section className="max-w-6xl mx-auto px-4 py-10">

  <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
    Latest Events & Notices
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {events.map((item, index) => (

      <div
        key={index}
        className="bg-white rounded-xl shadow overflow-hidden"
      >

        <img
          src={item.image}
          className="w-full h-40 object-cover"
        />

        <div className="p-4">

          <h3 className="font-bold text-lg">
            {item.title}
          </h3>

          <p className="text-sm text-gray-500">
            {item.date}
          </p>

          <p className="mt-2 text-sm">
            {item.text}
          </p>

          <a
            href={item.pdf}
            target="_blank"
            className="inline-block mt-3 bg-green-700 text-white px-3 py-1 rounded"
          >
            View Notice
          </a>

        </div>

      </div>

    ))}

  </div>

</section>


{/* ===== ACHIEVEMENTS BANNER ===== */}

<section className="py-10 bg-gradient-to-r from-green-700 to-green-600 text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
      Our Proud Achievements
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow hover:scale-105 transition duration-300">
        <div className="text-4xl mb-3">👨‍💻</div>
        <h3 className="text-4xl font-bold">100+</h3>
        <p className="mt-2 text-lg">Engineers</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow hover:scale-105 transition duration-300">
        <div className="text-4xl mb-3">🩺</div>
        <h3 className="text-4xl font-bold">25+</h3>
        <p className="mt-2 text-lg">Doctors</p>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow hover:scale-105 transition duration-300">
        <div className="text-4xl mb-3">🎓</div>
        <h3 className="text-4xl font-bold">100%</h3>
        <p className="mt-2 text-lg">Result in Public Exams</p>
      </div>
    </div>
  </div>
</section>

      {/* ===== FEATURES ===== */}
    

<div className="max-w-6xl mx-auto p-6">

  <h2 className="text-2xl font-bold text-center mb-8">
    Why Choose Our School
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Card 1 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={result} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">100% Result</h3>
        <p className="text-sm mt-2">
          Consistent 100% results in X and XII public examinations with top ranks.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={teachers} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">Experienced Teachers</h3>
        <p className="text-sm mt-2">
          Dedicated and experienced faculty providing personal attention to students.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={transport} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">Safe Transport</h3>
        <p className="text-sm mt-2">
          Safe and reliable transport facilities covering nearby areas.
        </p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={smartclass} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">Smart Classrooms</h3>
        <p className="text-sm mt-2">
          Digital smart classrooms for interactive and modern learning experience.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={experience} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">25 Years Experience</h3>
        <p className="text-sm mt-2">
          Providing quality education for more than 25 years.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-white shadow rounded overflow-hidden">
      <img src={coaching} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg">Special Coaching</h3>
        <p className="text-sm mt-2">
          Extra coaching classes for better performance and exam preparation.
        </p>
      </div>
    </div>

  </div>

</div>



      

    </div>
  )
}

export default Home