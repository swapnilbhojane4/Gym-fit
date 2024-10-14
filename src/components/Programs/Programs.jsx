import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Programs.css'
import { programsData } from '../../utils/programsData'
import RightArrow from '../../assets/rightArrow.png';

const Programs = () => {
    const navigate = useNavigate();

    const handleJoinNowClick = (program) => {
        if (program.heading === 'Strength Training') {
            navigate("/generator");  
        } else {
            navigate('/other-program');
        }
    };
    return (
        <div className='Programs' id="programs">
            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span></span>
            </div>
            <div className='program-categories'>
                {programsData.map((program) => (
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now' onClick={() => handleJoinNowClick(program)}>
                            <span>Join Now</span>
                            <img src={RightArrow}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs