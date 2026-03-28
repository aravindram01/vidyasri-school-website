import banner2 from "../assets/banner2.jpg"
import logo from "../assets/logo.png"
import alumni1 from "../assets/alumni1.jpg"
import alumni2 from "../assets/alumni2.jpg"
import alumni3 from "../assets/alumni3.jpg"
import team from "../assets/team.jpg"

function About() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}

      <section className="relative h-[280px] md:h-[380px]">

        <img
          src={banner2}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-center text-white">

          <img
            src={logo}
            className="w-20 h-20 bg-white rounded-full p-1 mb-3"
          />

          <h1 className="text-3xl md:text-5xl font-bold">
            About Our School
          </h1>

          <p className="mt-2">
            Vidyasri English Higher Secondary School, Nedungadu
          </p>

        </div>

      </section>



      {/* INTRO */}

      <section className="max-w-6xl mx-auto px-4 py-10">

        <div className="grid md:grid-cols-2 gap-8 items-start">

          <div>

            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Welcome to Vidyasri
            </h2>

            <p className="text-gray-700 leading-7">
              Vidyasri English Higher Secondary School began its journey in 2002 
              with just 10 young learners in LKG and UKG, operating from a small 
              rented single-classroom building. With a strong foundation built on 
              discipline, values, and academic excellence, the school steadily grew year after year, 
              earning the trust of parents and the community.As the years progressed, 
              more classes were introduced and the institution expanded into a full-fledged high school, 
              guided by a vision to provide quality education to every child. 
            </p>

            <p className="mt-3 text-gray-700 leading-7">
              A major milestone was achieved in 2015, when the school moved to its own campus, 
              developing a well-structured infrastructure with 15+ classrooms, laboratories,
              a playground, and library facilities, creating a better learning environment for students.
              In 2020, the school proudly received Higher Secondary recognition with 5 academic groups, 
              further strengthening its reputation. 
            </p>
              
            <p className="mt-3 text-gray-700 leading-7">
              This milestone attracted students from Nedungadu and surrounding areas within a 15 km radius,
              making Vidyasri a preferred choice for quality education. Today, with 400+ students 
              and a dedicated team of 35+ teaching and non-teaching staff, along with all essential facilities, 
              Vidyasri stands as one of the most trusted and respected schools in the region, 
              committed to shaping the future of every student.
            </p>

          </div>

          <div className="flex items-center h-full">

            <video
              className="w-full rounded-2xl shadow"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/video/school.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

      </section>



      {/* MISSION / VISION */}

      <section className="max-w-6xl mx-auto px-4 pb-10">

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Our Mission
            </h2>

            <p>
              To provide quality education with discipline,
              knowledge, and values that prepare students
              for higher studies and a successful future.
            </p>

          </div>


          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold text-green-700 mb-3">
              Our Vision
            </h2>

            <p>
              To create confident, responsible, and skilled students
              who can achieve success in education and career.
            </p>

          </div>

        </div>

      </section>



      {/* OUR TEAM */}

<section className="max-w-6xl mx-auto px-4 pb-10">

  <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl shadow p-6">

    <div>

      <img
        src={team}
        className="w-full rounded-xl shadow"
      />

    </div>


    <div>

      <h2 className="text-2xl font-bold text-green-700 mb-3">
        Our Team
      </h2>

      <p className="text-lg font-semibold mb-2">
        35+ Experienced Teaching & Non-Teaching Staff
      </p>

      <p className="text-gray-700 leading-7">
        Our school has more than 35 experienced teaching and non-teaching
        staff who work together to provide quality education and personal
        guidance for every student. Our teachers focus on discipline,
        strong academic support, and individual attention to help students
        achieve success in school and in life.
      </p>

    </div>

  </div>

</section>


      {/* ALUMNI */}

<section className="max-w-6xl mx-auto px-4 pb-10">

  <h2 className="text-2xl md:text-3xl font-bold text-green-700 text-center mb-6">
    Our School Alumni
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={alumni1}
        alt="NEET Alumni"
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700">
          NEET Success
        </h3>
        <p className="mt-2 text-gray-700 leading-7">
          Our students have successfully cleared the NEET examination
          and secured admission in medical colleges, showing our strong
          academic guidance and commitment to student success.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={alumni2}
        alt="JEE Alumni"
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700">
          JEE & NIT Achievement
        </h3>
        <p className="mt-2 text-gray-700 leading-7">
          Students from our school have cleared JEE and joined reputed
          institutions such as NIT, proving their excellence in competitive
          examinations and higher education.
        </p>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <img
        src={alumni3}
        alt="Government Exam Alumni"
        className="w-full h-56 object-cover"
      />
      <div className="p-5">
        <h3 className="text-lg font-bold text-green-700">
          Government Exams & Top Universities
        </h3>
        <p className="mt-2 text-gray-700 leading-7">
          Our alumni have cleared government examinations and continued
          their studies in top universities, reflecting the strong foundation
          built during their school education.
        </p>
      </div>
    </div>

  </div>

</section>


      {/* ALUMNI */}

      <section className="max-w-6xl mx-auto px-4 pb-10">

        <div className="bg-white rounded-2xl shadow p-6">

          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Achievements
          </h2>

          <ul className="list-disc ml-6 space-y-2">

            <li>Students studying in Government Medical Colleges</li>

            <li>Students working in IT and Engineering fields</li>

            <li>Students placed in Government jobs</li>

            <li>Students studying in reputed colleges</li>

            <li>Many successful professionals from our school</li>

          </ul>

        </div>

      </section>



      {/* TRUST */}

      <section className="max-w-6xl mx-auto px-4 pb-10">

        <div className="bg-green-100 rounded-2xl p-6 shadow">

          <h2 className="text-2xl font-bold text-green-700 mb-3">
            Management
          </h2>

          <p>
            Vidyasri English Higher Secondary School is a unit of
            Sri Murugan Educational & Cultural Trust, Nedungadu.
            The trust is committed to providing quality education
            for students in and around the region.
          </p>

        </div>

      </section>



    </div>
  )
}

export default About