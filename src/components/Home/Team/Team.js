import React from 'react'
import './Team.css'
import TeamMember from './TeamMember'
import WebText from '../../../TextData';
import { Link } from 'react-router-dom';

const Team = () => {
    return (
        <section id="team" className="team">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>{WebText.home.team.title}</h2>
            <p>{WebText.home.team.description}</p>
            </div>

            <div className="row">

            {
                WebText.home.team.teamListData.map(member => <TeamMember key={member.title} member={member} />)
            }

            </div>
        </div>
        <div data-aos="fade-up">
            <Link to='/join'>
                <div className="container text-right joinDivHome">
                    <button type="submit" className="joinBtnHome">
                        {WebText.aboutPage.joinBtn.btnText}
                    </button>
                </div>
            </Link>
        </div>
        </section>
    )
}

export default Team
