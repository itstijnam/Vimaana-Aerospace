import React from 'react'
import '../style/Team.scss'

import SUBODH from "../assets/team/subodh.jpg";
import MANJIT from '../assets/team/manjit.jpg'
import VEDANT from '../assets/team/VedantImage.png';
import MOHIT from '../assets/team/mohit.jpg';
import SHARJEEL from '../assets/team/sharjeel.jpg';

function Team() {

    const teamMembers = [
        {
            tag: 'Co-Founder',
            teamImage: SUBODH,
            post: 'UI/UX Designer'
        },
        {
            tag: 'Co-Founder',
            teamImage: VEDANT,
            post: 'Senior Developer'
        },
        {
            tag: 'Founder',
            teamImage: MANJIT,
            post: 'Full-Stack Developer'
        },
        {
            tag: 'Co-Founder',
            teamImage: MOHIT,
            post: 'Frontend Developer'
        },
        {
            tag: 'Co-Founder',
            teamImage: SHARJEEL,
            post: 'Full-Stack Developer'
        },
    ]

    return (
        <div className='Team'>
            <div className='team_heading'>
                <h1>Our <span>Teams</span></h1>
            </div>
            
            <div className="team_container">

                {teamMembers?.map((t, i) => (
                    <div className="team_info" key={i} >

                        <div className="team_tag">
                            {t?.tag === 'Founder' &&
                                <strong className='team_text'>{t?.tag}</strong>
                            }
                        </div>

                        <div className="team_image">
                            <img src={t?.teamImage} alt="" />
                        </div>


                        <div className="team_position">
                            <strong className='team_post_text'>{t?.post}</strong>
                        </div>

                    </div>
                ))}


            </div>
        </div>
    )
}

export default Team