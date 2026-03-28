import banner1 from "../assets/banner1.jpg"
import preschool from "../assets/preschool.jpg"
import elementary from "../assets/elementary.jpg"
import highschool from "../assets/highschool.jpg"
import highersecondary from "../assets/highersecondary.jpg"
import bdu from "../assets/bdu.png"

function Admissions() {
  const classSections = [
    {
      title: "Pre-KG to LKG",
      subtitle: "Pre-School / Foundational",
      image: preschool,
      text: "Our pre-school program builds a strong foundation through joyful learning, basic communication, activity-based teaching, and a caring environment that helps children grow with confidence.",
    },
    {
      title: "I Std to VIII Std",
      subtitle: "Elementary School",
      image: elementary,
      text: "Students from I to VIII follow a structured academic approach with CBSE-oriented learning, strong basics in language and mathematics, discipline, and all-round development through classroom and activity-based learning.",
    },
    {
      title: "IX Std & X Std",
      subtitle: "High School",
      image: highschool,
      text: "Our high school section provides focused academic guidance, regular assessments, and special support for SSLC public examination preparation to help students achieve strong results.",
    },
    {
      title: "XI Std & XII Std",
      subtitle: "Higher Secondary",
      image: highersecondary,
      text: "The higher secondary section follows the HSC State Board curriculum with subject-focused preparation, experienced teachers, and special coaching to support students in board exams and future career goals.",
    },
  ]

  const highlights = [
    "Admissions Open for 2026–2027",
    "25 Years of Educational Service",
    "Experienced and Dedicated Teachers",
    "Smart Classrooms and Modern Learning",
    "Safe Campus with CCTV Surveillance",
    "Transport Facility from Nearby Areas",
    "Special Coaching for Public Examinations",
    "Library, Lab, and RO Drinking Water Facility",
  ]

  const groups = [
    {
      name: "A1 Group",
      subjects: "Physics, Chemistry, Mathematics, Computer Science",
    },
    {
      name: "A2 Group",
      subjects: "Physics, Chemistry, Mathematics, Biology",
    },
    {
      name: "A3 Group",
      subjects: "Physics, Chemistry, Biology, Computer Science",
    },
    {
      name: "B1 Group",
      subjects: "Physics, Chemistry, Botany, Zoology",
    },
    {
      name: "B2 Group",
      subjects: "Commerce, Accountancy, Economics, Computer Science",
    },
  ]

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative h-[280px] md:h-[380px]">
        <img
          src={banner1}
          alt="Admissions Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Admissions Open 2026 – 2027
          </h1>
          <p className="mt-3 text-lg md:text-xl">
            Vidyasri English Higher Secondary School
          </p>
          <p className="mt-2">Pre-KG to XII Std</p>
        </div>
      </section>

      {/* Classes Offered */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Classes Offered
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {classSections.map((item, index) => (
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
                <p className="text-sm font-semibold text-yellow-600 mt-1">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-gray-700 leading-7">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Higher Secondary Courses */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Higher Secondary Courses
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {groups.map((group, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow p-5 border-t-4 border-green-600"
            >
              <h3 className="text-xl font-bold text-green-700">
                {group.name}
              </h3>
              <p className="mt-3 text-gray-700 leading-7 text-sm">
                {group.subjects}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SUITS COURSE */}

      <section className="max-w-6xl mx-auto px-4 pb-10">

        <div className="bg-yellow-50 border border-yellow-400 rounded-2xl shadow p-6 text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-green-700">
            SUITS – Computer Course
          </h2>

          {/* LOGO */}

          <div className="flex justify-center mt-4">
            <img
               src={bdu}
               alt="Bharathidasan University"
               className="h-20"
            />
          </div>

          <p className="mt-3 text-lg font-semibold">
            Certificate Course by Bharathidasan University
          </p>

          <p className="mt-4 text-gray-700 leading-7">
            Students can enroll in SUITS Computer Course along with school studies.
            This course provides computer knowledge and certification issued by
            Bharathidasan University, which helps students in higher education
            and career opportunities.
          </p>

        </div>

      </section>

      {/* Admission Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Admission Highlights
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border rounded-xl p-4 text-gray-700"
              >
                ✅ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Contact CTA */}
      <section className="max-w-6xl mx-auto px-4 pb-12">
        <div className="bg-green-700 text-white rounded-2xl p-8 text-center shadow">
          <h2 className="text-2xl md:text-3xl font-bold">
            Contact for Admission
          </h2>
          <p className="mt-3 text-lg">
            Ph: 04368-262232 | Mobile: 9486948744
          </p>
          <p className="mt-2">Email: vidyaashri@gmail.com</p>

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

export default Admissions