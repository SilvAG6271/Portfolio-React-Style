import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { saveAs } from "file-saver"

export default function Resume() {
    const pdfResume = useRef();
    const downloadPDF = () => {
        const input = pdfResume.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            console.log(imgData);
            const pdf = new jsPDF("p", "pt", "letter", true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save("Resume.pdf");
        });
    };
    
    return (
       <>
           <div>
              <button className="btn btn-outline-success btn-sm my-4 p-2" onClick={downloadPDF}>Download PDF
                </button>
            </div>
    
        <div className="container-sm" id="content" ref={pdfResume}>
            <h2 className="mt-3 mb-5">Aaron Garcia</h2>
         <section >
            <h3 className="summary">Summary</h3>
            <p>
                Highly motivated professional with a strong work ethic,
                adaptability, and exceptional interpersonal skills. Experienced
                 in customer service, problem resolution, and critical thinking. Adept 
                 at working independently and quickly mastering new skills.
            </p>
            </section>
            <section>
            <h3 className="skills">Skills</h3>
            <ul className="list-group list-group-horizontal-md">
                <li className="list-group-item">Organizational Skills</li>
                <li className="list-group-item">Problem Resolution</li>
                <li className="list-group-item">Good Work Ethic</li>
                <li className="list-group-item">Reliable and Trustworthy</li>
                <li className="list-group-item">Microsoft Office</li>
                <li className="list-group-item">Training & Development</li>
                <li className="list-group-item">Active Listening</li>
                <li className="list-group-item">Friendly, Positive Attitude</li>
            </ul>
            <ul className="list-group list-group-horizontal-md" >
                <li className="list-group-item">JavaScript</li>
                <li className="list-group-item">HTML & CSS</li>
                <li className="list-group-item">React</li>
                <li className="list-group-item">SQL- MySQL & Sequelize</li>
                <li className="list-group-item">NoSQL - MongoDB & Mongoose</li>
                <li className="list-group-item">GraphQL</li>
                <li className="list-group-item">Express</li>
                <li className="list-group-item">Nodejs</li>
                <li className="list-group-item">REST</li>
            </ul>
            </section>
            <section className="experience" >
           < h3 >Experience</h3>
           <p>
            [Job Title: OR Supply Tech]
            [Company: St. David's Hospital]
            [Location: Austin, Tx]
            [Dates: June 2022-Current]
           </p>
           <h3 className="text-start">Key Achievements</h3>
           <ul className="text-start">
            <li>Mastered stock management, ensuring no outdated products.</li>
            <li>Proactive in maintaining stock levels for specialized items.</li>
            <li>Quality-focused: Verified integrity of all received items.</li>
            <li>Streamlined workflow by monitoring and restocking supplies.</li>
            <li>Sustainability advocate: Initiated recycling programs.</li>
            <li>Surgical support: Stocked OR central areas for quick access.</li>
            <li>Problem-solver: Addressed supply shortages effectively.</li>
            <li>Assisted in implant check-ins for associated surgeries</li>
           </ul>
            </section>
            <section className="experience">
           <p>
            [Job Title: Receiving Clerk]
            [Company: BookPeople]
            [Location: Austin, Tx]
            [Dates: April 2018-June 2022]
           </p>
           <h3 className="text-start">Key Achievements</h3>
           <ul className="text-start">
            <li>Meticulous in identifying and correcting inventory discrepancies.</li>
            <li>Organized storage areas for optimal efficiency.</li>
            <li>Effective communication with publishers to resolve issues.</li>
            <li>Proficient in troubleshooting shipping and receiving processes.</li>
            <li>Ensured timely delivery of materials to various departments.</li>
           </ul>
            </section>
            <section className="experience">
           <p>
            [Job Title: Inventory Specialist]
            [Company: Best Buy]
            [Location: Houston, Tx]
            [Dates: August 2003-November 2017]
           </p>
           <h3 className="text-start">Key Achievements</h3>
           <ul className="text-start">
            <li>Played a key role in maintaining accurate inventory.</li>
            <li>Coordinated inventory operations and ordering.</li>
            <li>Skilled in cycle counting and discrepancy resolution.</li>
            <li>Vigilant in inspecting incoming materials for damage.</li>
            <li>Contributed to process improvements.</li>
            <li>Maintained safe and oranized work areas.</li>
            <li>Collaborated seamlessly with production and transport teams.</li>
            <li>CEfficient operation of heavy-load equipment.</li>
            <li>Detail-oriented price tagging and packing.</li>
           </ul>
            </section>
            <section className="education">
                <p>
                    [Bachelor of Arts in Cultural Anthropology]
                    [University of Houston]
                    [Loccation: Houston, Tx]
                    [Graduation Date: May 2010]
                    [GPA: 3.7]
                </p>
            </section>
            <section>
                <p>
                    [Additional Info]
                Currently pursuing a Full-Stack Developer certification.
                </p>
            </section>
        </div> 
        </>
   )     
    
}