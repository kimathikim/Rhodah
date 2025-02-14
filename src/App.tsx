import { Heart, Camera, Quote, ThumbsUp, Send } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [selectedImage, setSelectedImage] = useState(null);

  const memories = [
    { image: "images/dinner.jpeg", caption: "Finalist dinner. How I wish we took more photos like these" },
    { image: "images/funday.JPG", caption: "I loved how you smiled. That's when it dawned on me that I would like to spend my eternity with you." },
    { image: "images/masaimara.jpg", caption: "One of the loveliest photos we took before celebrating your birthday." },
    { image: "images/savo.jpg", caption: "Here we went for lunch with our friends. You went to the gym then later on I brought you some flowers." },
    { image: "images/gday.jpeg", caption: "Girlfriends Day. I brought this for you. I remember you were so happy." },
    { image: "images/date2.jpeg", caption: "We went for a date at OUR place. Lenzz." },
    { image: "images/date.jpeg", caption: "Told me about barbecue pizza. I've never tried any other pizza since the day you introduced me to this." },
    { image: "images/breakfast.jpeg", caption: "You made breakfast for me. This was sweet of you." }
  ];

  const gratitudePoints = [
    "Thank you for teaching me the true meaning of patience and understanding.",
    "Your kindness showed me how to be a better person.",
    "You taught me that love is about growing together."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=1920')] bg-cover bg-center opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <Heart className="w-16 h-16 text-pink-500 mx-auto mb-8 animate-pulse" />
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-4">To Rhodah: A Celebration of Us</h1>
          <p className="text-xl md:text-2xl text-gray-600">Thank you for the memories, the laughter, and the love we shared.</p>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-20 bg-gray-50">
        <h2 className="text-3xl font-serif text-center mb-12">Our Beautiful Memories</h2>
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer" onClick={() => setSelectedImage(memory.image)}>
              <img src={memory.image} alt={memory.caption} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-4">
                  <Camera className="w-6 h-6 text-white mb-2" />
                  <p className="text-white text-sm">{memory.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox for Enlarged Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Enlarged Memory" className="max-w-full max-h-full rounded-lg shadow-lg" />
        </div>
      )}

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif mb-12">With Gratitude</h2>
          <div className="space-y-6">
            {gratitudePoints.map((point, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow">
                <ThumbsUp className="w-6 h-6 text-pink-400 flex-shrink-0" />
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Message */}
      <section className="py-20 px-4 bg-pink-50">
        <div className="max-w-3xl mx-auto text-center">
          <Send className="w-12 h-12 text-pink-500 mx-auto mb-6" />
          <p className="text-xl text-gray-700 leading-relaxed">
            No matter where life takes us, I'll always cherish the time we shared. Wishing you nothing but happiness, love, and success in everything you do. And if the future leads us back to each other, I'll be here, waiting with open arms. Thank you for being you.
          </p>
        </div>
      </section>

      {/* Spotify Section */}
      <section className="py-21 px-4 text-center">
        <h2 className="text-3xl font-serif text-gray-800 mb-6">Even if you don’t go for the show, I got you.</h2>
        <p className="text-lg text-gray-601 mb-6">I’m always in your corner, cheering for you, believing in you. This song reminds me of you, and I hope it makes you smile just as much as you do for me.</p>
        <div className="flex justify-center">
          <iframe
            // style="border-radius:12px"
            src="https://open.spotify.com/embed/track/0kdToPIJHDgOdYwIMKjBzN?utm_source=generator"
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      </section>



      <footer className="py-8 text-center text-gray-500">
        <p>Made with ❤️ and gratitude</p>
      </footer>
    </div>
  );
}

export default App;
