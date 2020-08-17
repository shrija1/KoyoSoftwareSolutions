import React from 'react'
import './Team.css'
import TeamMember from './TeamMember'
import WebText from '../../../TextData';

const Team = () => {
    return (
        <section id="team" className="team">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
            </div>

            <div className="row">

            {
                WebText.home.teamListData.map(member => <TeamMember key={member.title} member={member} />)
            }

            </div>

        </div>
        </section>
    )
}

export default Team
