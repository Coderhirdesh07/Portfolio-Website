import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">
    <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
    <p className="text-gray-400 mb-8">
      I'm open to job opportunities and freelance work.
    </p>

    <a
      href="mailto:your@email.com"
      className="px-8 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700"
    >
      Say Hello
    </a>
  </section>
  )
}

export default Contact