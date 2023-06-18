import React from 'react';
import '../assets/style/weekPlan.scss';

function WeekPlan() {
    return (
        <div className='plan'>
            <h1 className='plan_title'>Week Plane</h1>
            <div className='plan_banner'>
                <div className='plan_banner_block'>
                    <span className='plan_banner_block_day'>
                        Monday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Tuesday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Wednesday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Thursday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Friday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Saturday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
                <div className='plan_banner_block'>
                    <span  className='plan_banner_block_day'>
                        Sunday
                    </span>
                    <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.</p>
                </div>
            </div>
        </div>
    );
}

export default WeekPlan;