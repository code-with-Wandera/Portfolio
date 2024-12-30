import Navbar from "../components/navbar/navbar.jsx";
import ProfilePic from "../assets/icons/collins.png"

function About (){

    const About =(
        <div className="Card1">
        <div className="Card1-text">
       <div className="name2">
         <p><em>Wandera Collins  </em></p>
         </div>
        
        <p>is a full-stack web developer <br /> based in Dar-Es-Salaam, Tanzania. <br /> with over 1 year of experience <br />in full-stack web development, <br />I can build web application <br /> using the current javascript <br /> front-end and backend technologies. <br /> I have strong problem solving skills and <br /> deep understanding of the <br />web development standards. <br />Life is beautiful when we come closer to technology </p>
        </div>

        <img className="profile2" src= {ProfilePic} alt="Profile picture" />

        </div>

    ) 

    return(
        <>
        <Navbar />
        <div className="About1">
         <h1>About Me</h1>
         </div>
        <p>
        {About}
        </p>

        </>
    )
}
export default About