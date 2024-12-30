
import Navbar from "../components/navbar/navbar.jsx"
import Call from "../assets/icons/call.png"
import Email from "../assets/icons/gmail.png"
import Whatsapp from "../assets/icons/whatsap.png"
import Github from "../assets/icons/github.png"
import Linkedin from "../assets/icons/linked.png"

function Contact(){

const contactPage=(
  
  <div id="contact">
    
    <div className="Intro"> 

    <h1>Contact Me</h1>
    <p>
      I am delighted to stay in full-support at your service anytime anywhere. 
    </p>
    </div>

  <div className="container-social">
    <div className="contact-left">
    <div className="social-icons">

  <div className="media1">
  <a href="tel:+255716967269">

  <img className="call" src= {Call} alt="call-Icon" /> Call Me
</a>
<br />
<a href="mailto:collinswandera560@gmail.com">

  <img className="email" src={Email} alt="Email-Icon" /> Email Me
</a>
<br />
<a href="https://wa.me/+255716967269">

<img className="whatsapp" src={Whatsapp} alt="Whatsapp-Icon" /> Whatsapp Me
</a>

</div>

<div className="media2">
<a href="https://github.com/Wandera-coder">
<img className="git" src={Github} alt="Github-Icon" />
</a>

<a href="https://www.linkedin.com/in/collins-wandera-ab1831305">

<img className="linked" src={Linkedin} alt="Linkedin-Icon" />
</a>
</div>

<a href="../assets/documents/Updated CV 2024 1.PDF" Download="Updated Cv 2024 1.pdf"> Download Cv
</a>
</div>
</div>

<div className=" contact-right">

<form action="https://formsubmit.co/collinswandera560@gmail.com" method="POST">
<input 
type="text" 
name="Name"
placeholder="Enter your name here"
required
/>

<input 
type="text"
name="Email"
placeholder="Enter your email here"
required
/>

<input 
type="text" 
name="Message"
id=""
rows="8"
placeholder="Type Your Message"
minLength= "10"
/>

<button className="btn-btn2" type="Submit">Submit</button>
</form>

<span id="msg"></span>
</div>


  </div>
  <footer>
  <div class="copyright">
        <p>
          Copyright &copy; Wandera Developer</p>
          </div>
          </footer>
  </div>

  

)


  
  return(
    <>
    <Navbar />

    <p>
      {contactPage}
    </p>

  
    </>
    
  
  )
}
export default Contact
