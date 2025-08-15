import { Link } from 'react-router-dom';
import Logo from "./web-logo.png"; 
import Haneef from "./Haneef Picture.jpg";

function App() {
  return (
    <div>
      {/* Header */}
      <div id="header">
      <div id="logo-section">
        <img src={Logo} id="logo" alt="HWS Logo" />
      </div>
      <div id="links-section">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/members">Members</Link>
          <Link to="/contact">Contribute</Link>
        </nav>
      </div>
    </div>

    {/* Landing Section */}
          <section id="landing">

         </section>

           {/* Hero */}

     <div id="hero">
            <section className="hero">
              <div className="container">
                <h1>Intro to Hassan Welfare Society</h1>
                <p>
                  Hassan Welfare Society was established in April 2024 with the aim of fostering unity, care, and financial security within our own family.
                  This society operates exclusively for the members of our family, working together to provide financial support in times of need and to
                  strengthen our collective bond.
                  <br />
                  Led with dedication and vision by <b>Prof. Dr. Atta Ur Rahman</b> (Patron-in-Chief), alongside <b>Mr. Muti Ur Rahman</b> and <b>Mr. Siraj Ur Rahman </b>
                  as respected Executive Members, the society also benefits from the active involvement of other committed family members.
                  Every month, each family member contributes to a shared fund, ensuring that resources are available to help anyone in the family
                  facing financial challenges.
                  <br />
                  Beyond financial assistance, the Hassan Welfare Society symbolizes mutual respect, compassion, and the shared responsibility of looking
                  after one another. By keeping the initiative within our single family, we ensure that the values of trust, understanding, and togetherness
                  remain at the heart of our efforts. This collective spirit continues to strengthen our relationships and reminds us that family is our
                  greatest support system.
                </p>
              </div>
            </section>

            <section className="mission-vision">
              <div className="container">
                <div className="box">
                  <h2>Our Mission</h2>
                  <p>
                    Our mission is to foster unity, care, and financial security within our family, ensuring that every member feels supported in times of
                    need and valued as part of a close-knit community.
                  </p>
                </div>
                <div className="box">
                  <h2>Our Vision</h2>
                  <p>
                    To create a lasting legacy of compassion and solidarity within the descendants of Hassan Gul, where mutual respect and cooperation
                    form the foundation for generations to come.
                  </p>
                </div>
              </div>
            </section>
          </div>

                     {/* Members */}
           <div id="members">
  <h1> Members </h1>
  
  <ul className="members-container">
    {/* Head - 1st Row */}
    <div className="member-row">
      <li className="member-head">Prof. Dr. Atta Ur Rahman (Patron-in-Chief)</li>
    </div>

    {/* Senior Members - 2nd Row */}
    <div className="member-row">
      <li className="member-senior">Mr. Siraj Ur Rahman (Executive Member)</li>
      <li className="member-senior">Mr. Mati Ur Rahman (Executive Member)</li>
    </div>

    {/* Regular Members - Grid */}
    <div className="members-grid">
      <li className="member-normal">Mr. Noor Ul Halim</li>
      <li className="member-normal">Qari Ubaid Ur Rahman</li>
      <li className="member-normal">Mr. Zia Ur Rahman</li>
      <li className="member-normal">Mr. Saif Ul Halim</li>
      <li className="member-normal">Mr. Hafeez Ur Rahman</li>
      <li className="member-normal">Mr. Mujeeb Ur Rahman</li>
      <li className="member-normal">Mr. Haroon Ur Rashid</li>
      <li className="member-normal">Mr. Muhammad Halim</li>
      <li className="member-normal">Mr. Shafi Ur Rahman</li>
      <li className="member-normal">Mr. Misbah Ul Halim</li>
      <li className="member-normal">Mr. Sami Ur Rahman</li>
      <li className="member-normal">Mr. Haseen Ur Rahman</li>
      <li className="member-normal">Mr. Muhammad Zulkefal</li>
      <li className="member-normal">Mr. Haseeb Ur Rahman</li>
      <li className="member-normal">Mr. Mahmood Ul Hassan</li>
      <li className="member-normal">Mr. Muneeb ur Rahman</li>
      <li className="member-normal">Mr. Faheem Ur Rahman</li>
      <li className="member-normal">Mr. Muhammad Ibrahim</li>
      <li className="member-normal">Mr. Haneef Ur Rahman</li>
      <li className="member-normal">Mr. Saad Ul Halim</li>
      <li className="member-normal">Mr. Latif Ur Rahman</li>
      <li className="member-normal">Mr. Mahboob Ur Rahman</li>
      <li className="member-normal">Mr. Usman Ul Halim</li>
      <li className="member-normal">Mr. Fiaz Ur Rahman </li>
      <li className="member-normal">Mr. Lutf Ur Rahman</li>
      <li className="member-normal">Mr. Hussain Ahmad</li>
      <li className="member-normal">Mr. M. Nafees Ur Rahman</li>
      <li className="member-normal">Mr. Husn Ur Rahman</li>
      <li className="member-normal">Mr. Atif Ur Rahman</li>
      <li className="member-normal">Mr. M. Ali Halim</li>
      <li className="member-normal">Mr. M. Hussain Halim</li>
      <li className="member-normal">Mr. Ahmad Ur Rahman</li>
      <li className="member-normal">Mr. M. Shaheer Sami</li>
      <li className="member-normal">Mr. M. Mustafa Halim</li>
      <li className="member-normal">Mr. M. Umar Shafi</li>
    </div>
  </ul>
</div>

        {/* Contact */}
   <div id="contact">
            <section className="contact-section">
              <h1 className="contact-title">Contact for Contributions</h1>
              <p className="contact-description">
                Your contributions help us continue our mission. You can send your donations through the following account details:
              </p>

              <div className="account-box">
                <p><span className="label">Account Title:</span> Mehmood Ul Hasan</p>
                <p><span className="label">Account Number:</span> +92 313 5745419</p>
                <p><span className="label">Bank:</span> JazzCash - Mobilink Microfinance Bank</p>
              </div>

              <p className="thank-note">💙 Thank you for your support! 💙</p>
            </section>
          </div>     

        {/* Footer */}

    <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-left">
      <img src={Haneef} alt="Haneef Ur Rahman" className="footer-image" />
    </div>

    <div className="footer-right">
      <h1 className="footer-name">Haneef Ur Rahman</h1>
      <p className="footer-intro">
      <span className="skill frontend">  Front-End Web Engineer </span> ||
        <span className="skill html"> HTML</span>, 
        <span className="skill css"> CSS</span>, 
        <span className="skill bootstrap"> Bootstrap</span>, 
        <span className="skill js"> JavaScript (ES6+)</span>, 
        <span className="skill ts"> TypeScript</span>, 
        <span className="skill react"> React.js</span>, 
        <span className="skill firebase"> Firebase ♦</span> 
        <span className="skill api"> REST APIs</span>, 
        <span className="skill git"> Git</span>, 
        <span className="skill github"> GitHub ♦ </span> 
        <span className="skill php"> PHP</span>, 
        <span className="skill mysql"> MySQL ♦ </span> 
        <span className="skill figma"> Figma</span>.
      </p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 Hiozon Nexus. All rights reserved.</p>
  </div>
</footer>

    </div>
  )
}

export default App
