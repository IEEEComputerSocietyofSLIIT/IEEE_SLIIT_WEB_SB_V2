import React from 'react'
import './AboutCards.css'
import Icons from '../../assets/icons';

export const AboutCards = (props) => {
    return (
        <>
            <div className='aboutcards__s1'>
                <img src={props.image} alt='image' />
                <h1>{props.heading}</h1>
                <p>{props.para}</p>
            </div>
        </>
    )
}

const AboutCardsInfo = [
    {
        image: Icons.mission,
        heading: "Our Mission",
        para: "To advance technology for humanity by fostering innovation, promoting technological accessibility, and developing professional competencies of students. Our branch contributes to the betterment of society through engineering and technological solutions."
    },
    {
        image: Icons.vission,
        heading: "Our Vission",
        para: "To be the leading student organization that bridges the gap between academia, research, and industry. We aim to nurture future leaders in science and technology, empowering undergraduates to shape the future of technology in Sri Lanka and beyond."
    }
]

const OurValuesInfo = [
    {
        image: Icons.innovation,
        heading: "Innovation",
        para: "We strive to push the boundaries of creativity, turning bold ideas into real-world problem-solving."
    },
    {
        image: Icons.collaboration,
        heading: "Collaboration",
        para: "Together we achieve more, building bridges between students, professionals, and researchers."
    },
    {
        image: Icons.excellence,
        heading: "Excellence",
        para: "We maintain high standards in everything we do, driving impactful results."
    },
    {
        image: Icons.leadership,
        heading: "Leadership",
        para: "We inspire the next generation of engineers to lead with purpose and vision."
    }
]


export { AboutCardsInfo, OurValuesInfo };