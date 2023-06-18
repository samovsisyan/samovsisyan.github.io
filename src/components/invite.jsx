import React from 'react';
import '../assets/style/invite.scss';
import Girl from '../assets/images/girl.jpg';

function Invite() {
    return (
        <div className='invite'>
            <h1 className='invite_title'>Invitees</h1>
            <div className='invite_banner'>
                <div className='invite_banner_block'>
                    <img className='invite_banner_block_img' src={Girl} alt="img"/>
                    <p>name</p>
                </div>
                <div className='invite_banner_block'>
                    <img className='invite_banner_block_img' src={Girl} alt="img"/>
                    <p>name</p>
                </div>
                <div className='invite_banner_block'>
                    <img className='invite_banner_block_img' src={Girl} alt="img"/>
                    <p>name</p>
                </div>
                <div className='invite_banner_block'>
                    <img className='invite_banner_block_img' src={Girl} alt="img"/>
                    <p>name</p>
                </div>
            </div>
        </div>
    );
}

export default Invite;