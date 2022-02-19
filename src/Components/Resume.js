import React, { Component } from "react";

class Resume extends Component {
    render() {
        if (this.props.data) {
            var skillmessage = this.props.data.skillmessage;
            var education = this.props.data.education.map(function (education) {
                var educationLinks = education.links.map((link) => {
                    return (
                        <>
                            <a target="_blank" href={link.url}>
                                {link.title}
                            </a>
                            <br />
                        </>
                    );
                });
                return (
                    <div key={education.school}>
                        <h3>{education.school}</h3>
                        <p className="info">
                            {education.degree} <span>&bull;</span>
                            <em className="date">{education.graduated}</em>
                        </p>
                        <p>
                            <strong>{education.thesisType}: </strong>
                            {education.description}
                            <br />

                            <strong>
                                {education.links.length > 0 ? "Links: " : ""}
                            </strong>
                            {educationLinks}
                        </p>
                        <ul>
                            {education.items.map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                );
            });
            var teaching = this.props.data.teaching.map(function (teaching) {
                return (
                    <div key={teaching.course}>
                        <h3>{teaching.course}</h3>
                        <p className="info">
                            {teaching.where} <span>&bull;</span>
                            <em className="date">{teaching.date}</em>
                        </p>
                        <p>
                            <strong>Instructor: </strong>
                            <a target="_blank" href={teaching.instructor_url}>
                                {teaching.instructor}
                            </a>
                            <br />
                            <strong>Duties: </strong>
                            {teaching.duties}
                            <br />
                            <strong>Links: </strong>
                            {teaching.links.map((link) => {
                                return (
                                    <>
                                        <a target="_blank" href={link.url}>
                                            {link.title}
                                        </a>
                                        <br />
                                    </>
                                );
                            })}
                        </p>
                    </div>
                );
            });
            var work = this.props.data.work.map(function (work) {
                return (
                    <div key={work.company}>
                        <h3>{work.company}</h3>
                        <p className="info">
                            {work.title}
                            <span>&bull;</span>{" "}
                            <em className="date">{work.years}</em>
                        </p>
                        <p>{work.description}</p>
                        <ul>
                            {work.items.map((item) => {
                                return <li>{item}</li>;
                            })}
                        </ul>
                    </div>
                );
            });
            var skills = this.props.data.skills.map(function (skill) {
                return <div key={skill}>{skill}</div>;
            });
        }

        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Education</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{education}</div>
                        </div>
                    </div>
                </div>
                <div className="row education">
                    <div className="three columns header-col">
                        <h1>
                            <span>Teaching Experience</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <div className="row item">
                            <div className="twelve columns">{teaching}</div>
                        </div>
                    </div>
                </div>

                <div className="row work">
                    <div className="three columns header-col">
                        <h1>
                            <span>Work</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">{work}</div>
                </div>

                <div className="row skill">
                    <div className="three columns header-col">
                        <h1>
                            <span>Skills</span>
                        </h1>
                    </div>

                    <div className="nine columns main-col">
                        <p>{skillmessage}</p>

                        <div className="skills">{skills}</div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Resume;
