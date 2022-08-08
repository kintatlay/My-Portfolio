import React, {useState} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AirtableLogoImg from '../assets/airtable-logo.png';
import AirtableWebImg from '../assets/airtable-web.png';
import CourseHeroLogoImg from '../assets/coursehero-logo.png';
import CourseHeroWebImg from '../assets/coursehero-web.png';
import RipplingLogoImg from '../assets/rippling-logo.png';
import RipplingWebImg from '../assets/rippling-web.png';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

var workData = [
    {companyName: "AirTable", 
        id: 1,
        imgData: AirtableLogoImg,
        fileDesc: "AirtableLogoImg",
        jobTitle: "Frontend Engineer", 
        location: "San Francisco, CA", 
        date: "Jul 2020 - Jun 2022", 
        projectDescription: "Airtable is an online organizational and collaboration tool. It is a spreadsheet platform with database functionalities. It allows users to build custom applications without writing a single line of code. Users can display tasks in different views, mix and match widgets with different functionalities, and choose from ready-built templates made for specific teams and business needs. It works great as a workflow management system or data visualization tool. Users can generate dashboards and reports with customization. Airtable has the functionalities of Google Spreadsheet and more. Users can switch views of the table to show things like a Calendar or a Kanban board like Trello.", 
        responsibilities: [
            "Developed interactive front-end for data visualization and data filtering based on policies.", 
            "Applied TypeScript and CSS to build and maintain new and existing Airtable features.", 
            "Followed software development lifecycle to plan, document requirements, design, build, test, and deploy new features.", 
            "Utilized Redux Toolkit for global state management.", 
            "Troubleshot and debugged defects to enhance user experience.", 
            "Incorporated Axios and ES6 to perform RESTful APIs.", 
            "Implemented styled-components and ensured UIs are responsive to different devices and browsers.", 
            "Used babel to transpile ES6+ to ES5 and webpack to bundle and minify JavaScript, images, and CSS files.", 
            "Written unit tests and integration tests using Jest and React Testing library to verify system's behavior and logic."
    ]},
    {companyName: "Rippling",
        id: 2, 
        jobTitle: "Software Engineer - Frontend", 
        imgData: RipplingLogoImg,
        fileDesc: "RipplingLogoImg",
        location: "San Francisco, CA", 
        date: "Jun 2019 - May 2020", 
        projectDescription: "The Unified Workforce Management Platform allows companies to manage their employees’ operations in one place, from onboarding to offboarding and everything in between. The applications allow users to manage different applications and data in one place, including payroll, employees’ activities, and the company’s finance data. It helps minimize the administrative work on the HR and IT sides for companies.", 
        responsibilities: [
            "Hands-on experience building SPA using React.",
            "Implemented styled-components and ensured UIs are responsive to different devices and browsers.",
            "Executed Redux for global state management.",
            "Constructed data visualization graphs using D3 library.",
            "Employed NPM to install development packages.",
            "Applied ES6 features.",
            "Written unit tests and integration tests using Jest and Enzyme.",
            "Used Git for version control."
    ]},
    {companyName: "Course Hero", 
        id: 3,
        jobTitle: "Frontend Engineer", 
        imgData: CourseHeroLogoImg,
        fileDesc: "CourseHeroLogoImg",
        location: "San Francisco, CA", 
        date: "Jun 2017 - May 2019", 
        projectDescription: "Course Hero is an education technology website that helps college students to prepare for their classes by getting access to course-specific study materials such as practice problems, study guides, class notes, essays, etc. In addition, students can submit questions and get help from the 24/7 tutors. As a member of the educator and student experience team, the role is responsible for the entire user experience after account creation. This included search and discovery, Q&A, study tools, document management, and etc.", 
        responsibilities: [
            "Worked with Project Manager and Designers and participated in designing and developing SPA using React and TypeScript.",
            "Applied CSS preprocessor, SCSS, to create scalable and maintainable CSS using variable, mixin, and functions.",
            "Utilized Redux for global state management and Redux Thunk to handle asynchronous API requests.",
            "Implemented jQuery and Ajax to retrieve data from the server.",
            "Established react router for dynamic routing.",
            "Refactored older components for the update.",
            "Develops and runs unit tests for the website using Jest and React Testing Library.",
            "Used Git for version control."
    ]}
]

const PreviousBtn = (props) => {
    console.log("props: ", props);
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowCircleLeftIcon className="work__button" color="primary" style={{ fontSize: "45px" }} />
        </div>
    )
}

const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
        <div className={className} onClick={onClick}>
            <ArrowCircleRightIcon className="work__button" color="primary" style={{ fontSize: "45px" }} />
        </div>
    )
}

const Work = () => {
    
    const [data, setData] = useState(workData);

    return (
        <section className="section-work" id="section-work">
            <div className="u-center-text u-margin-bottom-big">
                <h2 className="heading-secondary">
                    Work Experience
                </h2>
            </div>
            <div className="work">
                <div className="work__container">
                    <Slider
                        prevArrow={<PreviousBtn />}
                        nextArrow={<NextBtn />}
                        dots
                    >
                        {/* {console.log("data", data)} */}
                        {data?.map((ele) => {
                            return <Card 
                                key={ele.id}
                                companyName={ele.companyName}
                                jobTitle={ele.jobTitle}
                                imgData={ele.imgData}
                                fileDesc={ele.fileDesc}
                                location={ele.location}
                                date={ele.date}
                                projectDescription={ele.projectDescription}
                                responsibilities={ele.responsibilities}
                            />
                        })}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

const Card = ({ companyName, jobTitle, imgData, fileDesc, location, date, projectDescription, responsibilities }) => {
    return(
        <div style={{display: "flex", alignItems: "center", flexDirection: "column", textAlign: "center", color: "gray"}}>
            <img src={imgData} alt={fileDesc} className="work__img" />
            <p>{projectDescription}</p>
            <p className="heading-quaternary work__caption">
                <span className="work__caption__color--style">
                    {jobTitle}
                </span>
                {" "}, {location}{" "}, {date}
            </p>

            <ul>
                {responsibilities.map((responsibility, i) => {
                    return (
                    <li key={i} className="work__list">
                        <CircleOutlinedIcon color="primary"/>&nbsp;&nbsp;&nbsp;
                        {responsibility}
                    </li>
                )})}
            </ul>
        </div>
    )
}

export default Work;