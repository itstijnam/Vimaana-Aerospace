import React from 'react'
import '../style/Trust.scss'

function Trust() {
    return (
        <section className="trust-section">
            <div className="trust-video-bg">
                {/* <video src="/video/backgvideo1.mp4" autoPlay muted loop playsInline></video> */}
                <div className="video-overlay"></div>
            </div>
            
            <div className="trust-content">
                <div className="trust-container">
                    <h2>Our Achievements Speak for Themselves</h2>
                    <p>
                        At Arch Space, we pride ourselves on delivering exceptional architectural solutions.
                        Our commitment to quality and innovation has led to numerous successful projects.
                    </p>
                    
                    <div className="trust-stats">
                        <div className="stat-item">
                            <div className="stat-number">2+</div>
                            <div className="stat-label">Years of Experience</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">99%</div>
                            <div className="stat-label">Client Satisfaction</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Projects Completed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24+</div>
                            <div className="stat-label">Service</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trust