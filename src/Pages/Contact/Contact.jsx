import React from 'react'
import ContactHero from '../../Components/Contact/ContactHero'
import ContactInfo from '../../Components/Contact/ContactInfo'
import FeedbackForm from '../../Components/Contact/FeedbackForm'
import EmbeddedMap from '../../Components/Contact/EmbeddedMap'
import ContactMain from '../../Components/Contact/ContactMain'

const Contact = () => {
    return (
        <div>
            <ContactHero />
            <ContactMain/>
            <FeedbackForm />
        </div>
    )
}

export default Contact