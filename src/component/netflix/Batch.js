import React from "react";
import '../netflix/MYCSS/batch.css'
import Clame from './images/tv.png'
import Mobile from './images/mobile-0819.jpg'
import Kids from './images/download.png'


function Batch() {
        return (
            <div>
            <div className="content">
            <div style={{marginLeft: '30px'}}>
                <h1 className="none">Enjoy your TV.</h1>
                <h3>Watch on smart TVs, Playstation, Xbox, Chromecast, Apple TV,Blu-ray players, and more</h3>
            </div>
            <div><img src={Clame} className="comp" alt='CLame'/></div>
            </div>
            
                <div className="content2"> 

               <div>
                   <img src={Mobile} alt='Mobile'/>
                   <div style={{display: 'flex', width: '100%',height: '100px', justifyContent: 'center', marginTop: '-10%'}}>
                   <div className="image">
                       <h3>Stranger things</h3>
                   </div>
                   </div>
               </div>

                <div style={{marginLeft: '30px'}}>
                    <h1 style={{fontSize: '50px'}}>Download your shows to watch offline.</h1>
                    <h3>Save your favourites easily and always have something to watch.</h3>
                </div>

                </div>

                <div className="content3">
                    <div>
                    <h1>Watch everywhere.</h1>
                    <h3>stream unlimited movies and TV shows on your phone, tablet, laptop, and TV .</h3>
                    </div>
                </div>

                
                <div className="content2"> 

               <div>
                   <img src={Kids} alt='Kids'/>
               </div>

                <div style={{marginRight: '10px'}}>
                    <h1 style={{fontSize: '50px'}}>Creates profiles for kids.</h1>
                    <h3 className="folly">Sends Kids on adventures with their favourite characters in a space made just for them--- free with your membership.</h3>
                </div>

                </div>

                <div className="new">
                    <h1>
                        Frequently Asked Questions
                    </h1>
                    <div className="card"><a href="../netflix/Pages/faq.js" target='blank'>What is Netflix</a></div>
                    <div className="card" style={{marginTop: '15px'}}><a href="../netflix/Pages/faq.js">How much does Netflix cost?</a></div>
                    <div className="card" style={{marginTop: '15px'}}><a href="../netflix/Pages/faq.js">Where can I watch?</a></div>
                    <div className="card" style={{marginTop: '15px'}}><a href="../netflix/Pages/faq.js">How do I cancel</a></div>
                    <div className="card" style={{marginTop: '15px'}}><a href="../netflix/Pages/faq.js">What can i watch on Netflix?</a></div>
                    <div className="card" style={{marginTop: '15px'}}><a href="../netflix/Pages/faq.js">Is Netflix good for Kids?</a></div>

                    <p style={{marginTop: '100px'}}>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="line">
            <input type="email" placeholder="Email Address"/> <button>Get Started </button>
            </div>
                </div>
            </div>
        );
    }

export default Batch