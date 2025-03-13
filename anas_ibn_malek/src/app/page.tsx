'use client'

import Head from 'next/head';
import Image from 'next/image';
import { useState, useEffect } from 'react';


export default function HomePage() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`flex flex-col items-center min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-yellow-50 text-gray-900'}`}>
      <Head>
        <title>Anas bn Malek School</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/Images/School logo.png" type="image/x-icon" />
      </Head>

      <nav className={`fixed top-0 w-full bg-yellow-500 bg-opacity-80 backdrop-blur-md shadow-md z-50 flex justify-between items-center p-4 transition-all duration-300 ${isNavOpen ? 'h-screen flex-col' : 'h-16'}`}>
        <div className="flex items-center space-x-4">
          <a href="#home" className="text-white hover:text-gray-800 transition-colors duration-300">Home</a>
          <a href="#about" className="text-white hover:text-gray-800 transition-colors duration-300">About</a>
          <a href="#teachers" className="text-white hover:text-gray-800 transition-colors duration-300">Teachers</a>
          <a href="#students" className="text-white hover:text-gray-800 transition-colors duration-300">Students</a>
          <a href="#new-knowledge" className="text-white hover:text-gray-800 transition-colors duration-300">New Knowledge</a>
          <a href="#news" className="text-white hover:text-gray-800 transition-colors duration-300">News</a>
          <a href="#downloads" className="text-white hover:text-gray-800 transition-colors duration-300">Downloads</a>
          <a href="#contact" className="text-white hover:text-gray-800 transition-colors duration-300">Contact</a>
          <a href="#developer" className="text-white hover:text-gray-800 transition-colors duration-300">Developer</a>
        </div>
        <button className="hamburger flex flex-col justify-around w-8 h-8 bg-transparent border-none cursor-pointer p-0 z-50 md:hidden" onClick={toggleNav}>
          <span className="block w-full h-1 bg-white rounded transition-all duration-300"></span>
          <span className="block w-full h-1 bg-white rounded transition-all duration-300"></span>
          <span className="block w-full h-1 bg-white rounded transition-all duration-300"></span>
        </button>
        <button onClick={toggleDarkMode} className="ml-4 p-2 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300">
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <main className="content flex flex-col items-center w-full mt-16">
        <section id="home" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h1 className="text-3xl font-bold text-yellow-600">Welcome to Anas bn Malek School</h1>
          <Image src="/SCHOOL IMAGE LINK" alt="SCHOOL IMAGE" width={600} height={400} className="mt-4 rounded-lg shadow-lg" />
          <p className="mt-4 text-gray-700">We are dedicated to providing quality education in a nurturing environment.</p>
        </section>

        <section id="about" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">About Our School</h2>
          <p className="mt-4 text-gray-700">Located in the heart of Egypt, Anas bn Malek School is known for its commitment to excellence in education. Our experienced teachers and supportive staff create a positive learning atmosphere for all students.</p>
        </section>

        <section id="teachers" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">Meet Our Teachers</h2>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="teacher-card bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-48 text-center">
              <h3 className="font-bold">Ms. Sara</h3>
              <p>English Teacher</p>
              <p>Ms. Sara is passionate about helping students improve their English skills.</p>
            </div>
            <div className="teacher-card bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-48 text-center">
              <h3 className="font-bold">Ms. Hend</h3>
              <p>Computer Teacher</p>
              <p>Ms. Hend makes computer lessons very easy to learn with fun.</p>
            </div>
            <div className="teacher-card bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-48 text-center">
              <h3 className="font-bold">Mr. Ahmed S3eed</h3>
              <p>Mathematics Teacher</p>
              <p>With over 10 years of experience, Mr. Ahmed inspires students to love math.</p>
            </div>
            <div className="teacher-card bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-48 text-center">
              <h3 className="font-bold">Ms. Yasmen</h3>
              <p>Science Teacher</p>
              <p>Ms. Yasmen brings science to life with amazing experiments.</p>
            </div>
            <div className="teacher-card bg-yellow-100 p-4 m-2 rounded-lg shadow-md w-48 text-center">
              <h3 className="font-bold">Mr. Khaled</h3>
              <p>Arabic Teacher</p>
              <p>He is the best, giving us the ability to be patient and responsible.</p>
            </div>
          </div>
        </section>

        <section id="students" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">Our Lovely Students</h2>
          <p className="mt-4 text-gray-700">Our students are the heart of our school. They are curious, creative, and eager to learn. Here are some of their achievements:</p>
          <ul className="list-disc list-inside mt-4 text-gray-700">
            <li>Science Fair Winners</li>
            <li>Art Competition Finalists</li>
            <li>Sports Champions Football tournament every year</li>
          </ul>
        </section>

        <section id="new-knowledge" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">New Knowledge</h2>
          <div className="flex flex-wrap justify-center mt-4">
            <div className="new-knowledge-item bg-gray-100 p-4 m-2 rounded-lg shadow-md w-64 text-center">
              <h3 className="font-bold text-yellow-600">بَابُ فَضْلِ الْعِلْمِ</h3>
              <p className="mt-2 text-gray-700">"وَقَوْلِ اللَّهِ تَعَالَى: يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنْكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ وَاللَّهُ بِمَا تَعْمَلُونَ خَبِيرٌ.."</p>
              <p className="mt-2 text-gray-700">. وَقَوْلِهِ عَزَّ وَجَلَّ: رَبِّ زِدْنِي عِلْمًا</p>
              <a href="https://sunnah.com/bukhari/3" target="_blank" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-300">Read more</a>
            </div>
            <div className="new-knowledge-item bg-gray-100 p-4 m-2 rounded-lg shadow-md w-64 text-center">
              <h3 className="font-bold text-yellow-600">بَابُ دُعَاؤُكُمْ إِيمَانُكُمْ</h3>
              <p className="mt-2 text-gray-700">لِقَوْلِهِ تَعَالى: قُلْ مَا يَعْبَؤُا بِكُمْ رَبِّ لَوْلَا دُعَاؤُكُمْ</p>
              <p className="mt-2 text-gray-700">[الفرقان: ٧٧] وَمَعْنَى الدُّعاءِ في اللُّغَةِ (الإيمان)</p>
              <a href="https://sunnah.com/bukhari/2" target="_blank" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-300">Read more</a>
            </div>
            <div className="new-knowledge-item bg-gray-100 p-4 m-2 rounded-lg shadow-md w-64 text-center">
              <h3 className="font-bold text-yellow-600">الشيخ الحصري</h3>
              <p className="mt-2 text-gray-700">الشيخ محمود خليل الحصري هو قارئ قرآن مصري مشهور، ولد في 17 سبتمبر 1917 وتوفي في 24 نوفمبر 1980، وهو من أبرز قراء القرآن في العالم الإسلامي.</p>
              <a href="https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D9%88%D8%AF_%D8%A7%D9%84%D8%AD%D8%B5%D8%B1%D9%8A" target="_blank" className="text-yellow-600 hover:text-yellow-800 transition-colors duration-300">Read more</a>
            </div>
          </div>
          <div className="video-container mt-8">
            <h3 className="text-xl font-semibold text-yellow-600">Watch this video about الشيخ الحصري</h3>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube-nocookie.com/embed/_LyJkA3C4Pk?si=oBG45LhpAOg-6-07&amp;start=9"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="mt-4 rounded-lg shadow-lg"
            ></iframe>
          </div>
        </section>

        <section id="news" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">School News</h2>
          <p className="mt-4 text-gray-700">Stay updated with the latest news and events happening at Anas bn Malek School.</p>
          <ul className="mt-4">
            <li className="news-item flex flex-col items-center mt-4">
              <Image src="/Images/RAmadan 2A .jpg" alt="School calibrat with Ramadan" width={300} height={250} className="rounded-lg shadow-lg" />
              <p className="mt-2 text-gray-700 font-bold">School calibrat with Ramadan and Changed the look of Classes</p>
              <p className="text-gray-600">Comments: The School now looks amazing -Asaad 2A</p>
            </li>
            <li className="news-item flex flex-col items-center mt-4">
              <Image src="/Images/ART 'egypt in her children eyes'.png" alt="ART Competition" width={300} height={250} className="rounded-lg shadow-lg" />
              <p className="mt-2 text-gray-700 font-bold">ART Competition 'Egypt IN HER CHILDREN EYES'</p>
              <p className="text-gray-600">Comments: WHO wins will get full marks in ART! - ART TEACHER</p>
            </li>
            <li className="news-item flex flex-col items-center mt-4">
              <Image src="/Images/Screenshot From 2025-02-25 17-08-34.png" alt="Art exhibition" width={300} height={250} className="rounded-lg shadow-lg" />
              <p className="mt-2 text-gray-700 font-bold">Student in the School and the Principal agreed!</p>
              <p className="text-gray-600">Comments: Very well! - Student C</p>
            </li>
          </ul>
        </section>

        <section id="downloads" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">Downloads</h2>
          <p className="mt-4 text-gray-700">Download important documents and resources:</p>
          <div className="dropdown-container mt-4">
            <select id="downloadOption" className="p-2 border-2 border-yellow-500 rounded-md">
              <option value="Primary-Grade1">Grade-1</option>
              <option value="Primary-Grade2">Grade-2</option>
              <option value="Primary-Grade3">Grade-3</option>
              <option value="Primary-Grade4">Grade-4</option>
              <option value="Primary-Grade5">Grade-5</option>
              <option value="Primary-Grade6">Grade-6</option>
              <option value="Prep-Prep1">Prep-1</option>
              <option value="Prep-Prep2">Prep-2</option>
              <option value="Prep-Prep3">Prep-3</option>
              <option value="Sec-Sec1">Sec-1</option>
              <option value="Sec-Sec2">Sec-2</option>
              <option value="Sec-Sec3">Sec-3</option>
            </select>
          </div>
          <ul id="downloadLinks" className="mt-4">
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">English evaluation</a>
            </li>
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">Arabic evaluation</a>
            </li>
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">Science evaluation</a>
            </li>
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">Math evaluation</a>
            </li>
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">الدراسات الاجتماعية evaluation</a>
            </li>
            <li className="mt-2">
              <a className="block p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="" target="_blank">ICT evaluation</a>
            </li>
          </ul>
        </section>

        <section id="contact" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">Contact Us</h2>
          <p className="mt-4 text-gray-700">If you have any questions or would like to learn more about our school, please reach out!</p>
          <form id="contact-form" className="contact-form mt-4">
            <input type="text" placeholder="Your Name" required className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500" />
            <input type="email" placeholder="Your Email" required className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500" />
            <textarea placeholder="Your Message" required className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-yellow-500"></textarea>
            <button type="submit" className="p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300">Send Message</button>
          </form>
        </section>

        <section id="developer" className="section bg-white p-8 rounded-lg shadow-md w-4/5 max-w-2xl text-center mt-8">
          <h2 className="text-2xl font-semibold text-yellow-600">About the Developer</h2>
          <p className="mt-4 text-gray-700">Hi, I'm Asaad, a student at Anas bn Malek School and the developer of this website. I love coding and creating interactive web pages. My sister Asma helped me a lot.</p>
          <p className="mt-4 text-gray-700">Check out my GitHub page for more projects:</p>
          <a className="block mt-2 p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="https://github.com/asaadzx" target="_blank">Asaadzx GitHub</a>
          <a className="block mt-2 p-2 bg-yellow-500 text-white rounded-md shadow-md hover:bg-yellow-600 transition-colors duration-300" href="https://github.com/asaadzx/Anas-bn-malek-School" target="_blank">School repo</a>
          <p className="mt-4 text-gray-700">I am asking the school teachers for some images to add. Please and I am sorry for Secondary 1, 2, 3 And All Grades, because they have a lot of subjects and I NEED SOMEONE TO WORK WITH</p>
        </section>
      </main>
    </div>
  );
}
