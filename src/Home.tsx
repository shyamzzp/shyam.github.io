import React from "react";
import cv from "./img/cv.png";
import skype from "./img/skype.png";
import whatsapp from "./img/whatsapp.png";
import linkedin from "./img/linkedin.png";
import stackoverflow from "./img/stack-overflow.png";
import github from './img/github.png';
import "./bulma.min.css";
import "./App.css";
import ProjectCard from './components/ProjectCard/ProjectCard';
import BlogPost from "./components/BlogPost/BlogPost";
import TitleDesc from "./components/TitleDesc/TitleDesc";
import CaseStudies from "./components/CaseStudies/CaseStudies";

function Home() {
    const BikeDB = ["• A Web App for bike rental service.", "• A REST API using Node.js and Express.js.", "• Used MongoDB for database.", "• Used JWT for authentication."];
    const FindMentor = ["• A Web App for finding mentors in your field.", "• Access to Experienced Mentors.", "• Skill Development and Learning Opportunities.", "• Trackable Progress and Feedback"];
    const InterviewPreparation = ["• Enhance technical skills.", "• Prepare for Coding Interviews.", "• Structural approach to tackle challenges.", "• Deep dive into System Design."];

    const FindMentorTags = ["TypeScript", "PocketBase", "VueJS", "REST"]
    const InterviewPreparationTags = ["ReactJS", "Docusaurus", "TypeScript", "Markdown"]
    return (
        <div id="app">
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="box">
                        <article className="media">
                            <div className="media-left"></div>
                            <div className="media-content">
                                <div className="content">
                                    <p>Shyam Suthar</p>
                                </div>
                                <nav className="level is-mobile">
                                    <div className="level-left">
                                        <a
                                            aria-label="twitter"
                                            href="https://twitter.com/sud_oo"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-twitter fa-w-16"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="twitter"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            aria-label="githib"
                                            href="https://github.com/shyamzzp"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-github fa-w-16"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="github"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 496 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            aria-label="linkedin"
                                            href="https://www.linkedin.com/in/sudoo/"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-linkedin fa-w-14"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="linkedin"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            aria-label="stackoverflow"
                                            href="https://stackoverflow.com/users/2256024/shyamzzp"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-stack-overflow fa-w-12"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="stack-overflow"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 384 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                        <a
                                            aria-label="call"
                                            href="tel:+918591532274"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-phone fa-w-16"
                                                    focusable="false"
                                                    data-prefix="fas"
                                                    data-icon="phone"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 512 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>{" "}
                                        <a
                                            aria-label="skype"
                                            href="skype:shyamzzp@live.com?call"
                                            target="_blank"
                                            className="level-item"
                                            rel="noreferrer"
                                        >
                                            <span className="icon is-small">
                                                <svg
                                                    aria-hidden="true"
                                                    className="svg-inline--fa fa-skype fa-w-14"
                                                    focusable="false"
                                                    data-prefix="fab"
                                                    data-icon="skype"
                                                    role="img"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 448 512"
                                                    data-fa-i2svg=""
                                                >
                                                    <path
                                                        fill="currentColor"
                                                        d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"
                                                    ></path>
                                                </svg>
                                            </span>
                                        </a>
                                    </div>
                                </nav>
                            </div>
                        </article>
                    </div>
                </div>
            </div>

            <section className="hero is-info is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <h4 className="title" style={{ marginBottom: "5px" }}>
                            Shyam Suthar{" "}
                            <span>
                                <a
                                    href="https://github.com/shyamzzp/shyamzzp.github.io/raw/master/resume/ShyamSS-resume.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={cv}
                                        width="40"
                                        style={{ marginRight: "5px" }}
                                        alt=""
                                    />
                                </a>
                            </span>
                        </h4>
                        <h3
                            className="title title-sub"
                            style={{ fontSize: "25px", marginBottom: "10px" }}
                        >
                            Sen. Software Development Engineer (6+)
                        </h3>
                        <div
                            style={{
                                fontSize: "25px",
                                marginBottom: "30px",
                                display: "flex",
                                gap: "10px",
                            }}
                        >
                            <a
                                href="https://join.skype.com/invite/vS8AjAHY3sZx"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {" "}
                                <img src={skype} alt="" width="25" />
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=9501891381"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={whatsapp} alt="" width="25" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/shyamzzp/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={linkedin} alt="" width="25" />
                            </a>
                            <a
                                href="https://github.com/shyamzzp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={github} width="25" alt="" />
                            </a>
                            <a
                                href="https://stackoverflow.com/users/5853122/shyamzzp"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={stackoverflow} width="25" alt="" />
                            </a>
                        </div>

                        <div className="tags">
                            <span className="tag is-warning">Windows</span>
                            <span className="tag is-warning">Linux</span>
                        </div>

                        <div className="tags">
                            <span className="tag is-dark">Python</span>
                            <span className="tag is-dark">Java - Spring</span>
                            <span className="tag is-dark">MongoDB</span>
                            <span className="tag is-dark">NodeJS</span>
                            <span className="tag is-dark">Framework7</span>
                            <span className="tag is-dark">C# - UWP/WPF</span>
                        </div>

                        <div className="tags">
                            <span className="tag is-success">TypeScript</span>
                            <span className="tag is-success">Javascript</span>
                            <span className="tag is-success">NodeJS</span>
                            <span className="tag is-success">ReactJS</span>
                            <span className="tag is-success">D3(Data-Driven Documents)</span>
                            <span className="tag is-success">GraphQL</span>
                        </div>

                        <div className="tags">
                            <span className="tag is-link">Github</span>
                            <span className="tag is-link">Github - Actions/Workflows</span>
                            <span className="tag is-link">JIRA</span>
                            <span className="tag is-link">CI/CD</span>
                            <span className="tag is-link">AWS - Lambda/EC2</span>
                            <span className="tag is-link">Docker</span>
                        </div>
                        <div className="tags">
                            <span className="tag is-link">Figma (Design & Prototype)</span>
                            <span className="tag is-link">Sketch</span>
                            <span className="tag is-link">Chrome Extensions</span>
                        </div>

                        <div className="tags">
                            <span className="tag is-light-orange">RasberryPi</span>
                            <span className="tag is-light-orange">
                                Embedded System - Arduino
                            </span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '100px' }}>
                            <div style={{ width: '30%' }}>
                                <p style={{ fontSize: '22px', color: '#4a4a4a', marginBottom: '0px', }}>Projects</p>
                                <p style={{ fontSize: '16px', color: '#4a4a4a', marginBottom: '20px', marginTop: '0' }}>Below projects exemplify my expertise, technical skills, and contributions as a senior software engineer.</p>
                                <div style={{ display: 'flex', gap: '20px', overflow: 'auto', flexDirection: 'column' }}>
                                    <ProjectCard
                                        header="Interview Preparation"
                                        tags={InterviewPreparationTags}
                                        description={InterviewPreparation}
                                        github_source_code_link="https://github.com/shyamzzp/interview"
                                        live_demo="https://shyamzzp.github.io/interview/" />
                                    <ProjectCard
                                        header="Find Mentor"
                                        description={FindMentor}
                                        tags={FindMentorTags} />
                                    <ProjectCard
                                        header="Bike Rental Service"
                                        tags={FindMentorTags}
                                        description={BikeDB}
                                        mb />

                                </div>
                            </div>
                            <div style={{ width: '30%' }}>
                                <p style={{ fontSize: '22px', color: '#4a4a4a', marginBottom: '0px', }}>Blogs</p>
                                <p style={{ fontSize: '16px', color: '#4a4a4a', marginBottom: '20px', marginTop: '0' }}>Below articles reflect my passion for sharing knowledge, insights, and best practices in the market.</p>
                                <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                                    <BlogPost title="Configure GitHub Pages" date="3rd June 2023" lang="TypeScript" />
                                    <BlogPost title="Everything about JWT Authentication" date="16th June 2023" lang="NodeJS" />
                                    <BlogPost title="GPG Signing for GIT Users" date="16th June 2023" lang="NodeJS" />
                                </div>
                            </div>

                            <div style={{ width: '30%' }}>
                                <p style={{ fontSize: '22px', color: '#4a4a4a', marginBottom: '0px', }}>Case Studies</p>
                                <p style={{ fontSize: '16px', color: '#4a4a4a', marginBottom: '20px', marginTop: '0' }}>Below is a deep dive into real-world scenarios where various technological solutions are implemented</p>
                                <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                                    <CaseStudies title="Zerodha - Trading Platform" desc="3rd June 2023" />
                                    <CaseStudies title="Pinterest - Social Media Service" desc="16th June 2023" />
                                    <CaseStudies title="GPG Signing for GIT Users" desc="16th June 2023" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Home; 