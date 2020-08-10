import React from 'react'
import './TeamAbout.css'
import team1 from '../../../img/team/team-1.jpg'
import team2 from '../../../img/team/team-2.jpg'
import team3 from '../../../img/team/team-3.jpg'
import team4 from '../../../img/team/team-4.jpg'
import TeamAboutMember from './TeamAboutMember'

const TeamAbout = () => {
    const members = [
        {
            data_aos_delay: "100",
            img: team1,
            name: "Walter White",
            title: "Chief Executive Officer"
        },
        {
            data_aos_delay: "200",
            img: team2,
            name: "Sarah Jhonson",
            title: "Product Manager"
        },
        {
            data_aos_delay: "300",
            img: team3,
            name: "William Anderson",
            title: "CTO"
        },
        {
            data_aos_delay: "400",
            img: team4,
            name: "Amanda Jepson",
            title: "Accountant"
        }
    ]

    return (
        <section id="team" className="team">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
            </div>

            <div className="row">

                {
                    members.map(member => <TeamAboutMember key={member.title} member={member} />)
                }

            </div>

        </div>
        </section>
    )
}

export default TeamAbout
