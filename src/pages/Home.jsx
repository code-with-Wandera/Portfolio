
import Navbar from "../components/navbar/navbar";
import Collins from "../assets/icons/Collins.png";
//import About from "../pages/About"
function Home(){

  const Home =(
    <div className="home-bar">
      
    <h1> <strong> <em>Full-Stack Developer </em></strong></h1>
   <div className="Des2"><p> Hi,  I am <div className="home-name">Wandera Collins </div> a software developer <br />based in <br />Dar-Es-Salaam, Tanzania. </p></div>
   
   <img className="profile"src={Collins} alt="Profile-Pic" />
   
     </div >
     
  )

    return(
        <>
          <Navbar />
         <p>
          {Home}
         </p>
          <a href="https://wa.me/+255716967269">
        <button className="Hire-button" type="Hire-Me">Hire Me</button>
      </a>
        </>
    )
}
export default Home