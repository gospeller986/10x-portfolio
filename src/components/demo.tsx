import React from 'react'

function Portfolio() {
  return (
    <div>
        <h1> Welcome to the Fantastic World of <span> Satyajit Pal </span>,
         Developer Extraordinaire! </h1>
        <section id="education">
            <h1>My Education Tale</h1>    
            <h2>IIIT BBSR 2024</h2>
            <p> Bachelor's of Technology <span> Information Technology </span></p>   
        </section>
        <section id="skills">
            <h2>Skills & Sorcery</h2>
            <ul>
                <li>Wizardry in Programming Languages :     JavaScript, TypeScript, C++ , C , Python</li>
                <li>Enchantment in FrontEnd Technologies :  Next js ,React js, React Native </li>
                <li>Enchantment in BackEnd Technologies :   Node js , Hono js , Express js , Flask </li>
                <li>Potion Brewing in Databases :           MongoDB, MySQL, PostgreSQL , Redis </li>
                <li>Tools of the Trade :                    Git, Docker, AWS , GCP </li>
            </ul>
        </section>
        <section id="projects">
            <h2>Magical Creations</h2>
            <p>Behold, my enchanted creations! From fantastical web applications to mystical mobile apps,
                 each project tells a tale of creativity and craftsmanship.
                  Join me as we unravel the mysteries of code and design!</p>
        </section>
        <footer>
        <p>Ready to embark on an epic quest together? Reach out at palsatyajit986@gmail.com and let's create magic!</p>
    </footer>
    </div>
  )
}

export default Portfolio
