import g1 from "../assets/gallery/g1.jpg"
import g2 from "../assets/gallery/g2.jpg"
import g3 from "../assets/gallery/g3.jpg"
import g4 from "../assets/gallery/g4.jpg"
import g5 from "../assets/gallery/g5.jpg"
import g6 from "../assets/gallery/g6.jpg"

function Gallery() {

  const images = [g1, g2, g3, g4, g5, g6]

  return (
    <div className="max-w-6xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-6">
        School Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        {images.map((img, i) => (
          <div key={i} className="overflow-hidden rounded shadow">

            <img
              src={img}
              className="w-full h-60 object-cover hover:scale-105 transition duration-300"
            />

          </div>
        ))}

      </div>

    </div>
  )
}

export default Gallery