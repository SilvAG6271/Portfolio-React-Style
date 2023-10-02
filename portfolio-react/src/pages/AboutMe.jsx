
import image from "../images/self.jpg"
import "../App.css"

export default function AboutMe() {
    return (
        
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mx-auto">
            <img src={image} alt="image of hispanic man wearing a hat" className="self-img img-fluid"/>
            <h3 className="about text-center  mt-4">About Me</h3>
            <section className="intro text-center mt-4">
            <h2>Introduction</h2>
              <p>
            Greetings! I'm Aaron Garcia, a seasoned supply tech in the healthcare sector,
            and an eager learner on a mission to transition into the dynamic world of technology.
            Armed with a Bachelor of Arts in Anthropology from the esteemed University of Houston,
            I bring a unique blend of analytical thinking and a profound desire to make a difference 
            in people's lives.
              </p>
            </section>
         <section className="background text-center mt-4">
                <h2>Background</h2>
              <p>
                My academic journey led me through the halls of the University of Houston, where 
                I earned my BA in Anthropology. This discipline has honed my ability to understand
                and connect with diverse cultures and perspectives. Presently, I play a pivotal role 
                as a supply tech in a hospital, leveraging my expertise in inventory management to
                ensure the seamless flow of vital resources. My extensive experience in the inventory 
                aspect of retail spanning over decades has instilled in me a sharp eye for detail
                and an unwavering commitment to efficiency.
              </p>
          </section>
          <section className="hobbies text-center mt-4">
            <h2>Hobbies and Interests</h2>
            <p>
                Beyond the professional sphere, I find solace and inspiration in the simple joys of
                life. Reading transports me to different worlds, while music and podcasts form the soundtrack of my daily musings.
                My love for nature beckons me to explore scenic trails, and my passion for culinary 
                advnetures has earned me the title of devoted foodie.
            </p>
          </section>
          <section className="passions text-center mt-4">
            <h2>Passions</h2>
            <p>
                My deepest aspiration is to alleviate the feeling of isolation in others and let them know
                that there is genuine care in the world. I am driven by a profound desire to make a positive impact,
                not only through my career but also by empowering individuals to discover their own passions
                and pursuits.
            </p>
          </section>
          <section className="passions text-center mt-4">
            <h2>Goals</h2>
            <p>
               As I embark on my journey as a full-stack developer, my goals remain clear: to find a job 
               that I love, where I can continually learn and be challenged. My mission is not just personal;
               it is about elevating those around me so they, too, can find their path to fulfillment.
            </p>
          </section>
          </div>
         </div>
        </div>
    )
}