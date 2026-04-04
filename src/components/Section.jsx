import React from 'react'

const Section = ({id, title, children}) => {
  return (
    <section id={id} className="py-10 border-b scroll-mt-20">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
            {title}
        </h2>
        {children}
    </section>
  )
}

export default Section
