//imported all the images from past projects
import travelogue from '../../media/Travelogue2.png';
import characterDnD from '../../media/DnD2.jpeg';
import codingQuiz from '../../media/CodingQuiz.jpeg';
import weatherApp from '../../media/Weather Dashboard.jpeg';
import workScheduler from '../../media/planner.jpeg';
import noteTaking from '../../media/noteTaker.png';

//an array of objects that have properties related to my past projects
export default function Portfolio() {
    const projects = [
       { 

        "name": "Work Day Scheduler",
        "url": "https://silvag6271.github.io/Work-Day-Scheduler-JS/",
        "description": "Schedule events during your work day",
        "image": workScheduler ,
        "githubLink": "https://github.com/SilvAG6271/Work-Day-Scheduler-JS",
    },
    { 

        "name": "Coding Quiz",
        "url": "https://silvag6271.github.io/Coding-quiz/",
        "description": "Test your coding knowledge with this quiz",
        "image": codingQuiz,
        "githubLink": "https://github.com/SilvAG6271/Coding-quiz",
    },
    { 

        "name": "5-Day Weather Dashboard",
        "url": "https://silvag6271.github.io/5-day-weather-dashboard/",
        "description": "Dashboard for 5 day weather forecast",
        "image": weatherApp,
        "githubLink": "https://github.com/SilvAG6271/5-day-weather-dashboard",
    },
    { 

        "name": "DnD Random Character Selector",
        "url": "https://kumoko8.github.io/Front-End-App-DnD-Character-Project/",
        "description": "Basic front end app to randomly create DnD characters",
        "image": characterDnD,
        "githubLink": "https://github.com/Kumoko8/Front-End-App-DnD-Character-Project",
    },
    { 

        "name": "Travelogue",
        "url": "https://travel-world-blog-3a99d718cfb9.herokuapp.com/",
        "description": "Share your travel advantures with others with this easy to use travel blog",
        "image": travelogue,
        "githubLink": "https://github.com/akecs512/Travelogue-application",
    },
    { 

        "name": "Note Taking",
        "url": "https://note-taking-express-47b8965d42a2.herokuapp.com/",
        "description": "Simple note taking app",
        "image": noteTaking,
        "githubLink": "https://github.com/SilvAG6271/note-taking",
    },

    ]
    //rendering the separate projects and their related info on a card (Bootstrap)
    return (
    <div>
        <h1>Projects</h1>
        <div className="row">
           {projects.map((project, index) => (
        <div className="col-md-4" key={index}>
         <div className="card mb-3">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
            <img src={project.image} className='card-img-top' alt={project.name}/>
            </a>
            <div className="card-body">
                <h6 className="card-title">{project.name}</h6>
                <p className="card-text">{project.description}</p>
           <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
           </a>
         </div>
        </div>
        </div>   
    ))}    
    </div>
</div>
    );
}