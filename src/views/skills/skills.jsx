import React from 'react';
import javascriptPic from "../../static/images/javascript.png";
import cssPic from "../../static/images/css.png";
import flaskPic from "../../static/images/flask.png";
import git from "../../static/images/git.png";
import github from "../../static/images/github.png"
import html from "../../static/images/html.png";
import mongodb from "../../static/images/mongodb.png";
import mysql from  "../../static/images/mysql.png";
import node from "../../static/images/node.png";
import python from "../../static/images/python.png";
import react from "../../static/images/react.png";
import java from "../../static/images/java.png";
import bootstrap from "../../static/images/bootstrap.png";
import vscode from "../../static/images/vscode.png";
import springtool from "../../static/images/springtool.png";
import jsp from "../../static/images/jsp.png";
import jquery from "../../static/images/jquery.png";
import json from "../../static/images/json.png"
import postman from "../../static/images/postman.png"
import { motion } from 'framer-motion'
import './skillsStyles.scss';


const Skills = () => {

    return (
    <div className="color">
        <h1 id="Skills">Skills</h1>
        <div className="skills-Container">
            <motion.div 
                whileInView={{ opacity: [0, 1] }}
                transition={{ duraction: 0.5 }} 
                className="skills-List">
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={html} alt="javascript-circle" />
                    </div>
                    <p className="p-text">HTML</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={javascriptPic} alt="javascript-circle" />
                    </div>
                    <p className="p-text">JavaScript</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={cssPic} alt="javascript-circle" />
                    </div>
                    <p className="p-text">CSS</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={python} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Python</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={java} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Java</p>
                </div>
                <div className="skills-Item flex">
                    <div class="flex">
                        <img src={flaskPic} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Flask</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={mongodb} alt="javascript-circle" />
                    </div>
                    <p className="p-text">MongoDB</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={react} alt="javascript-circle" />
                    </div>
                    <p className="p-text">React</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={node} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Node</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={mysql} alt="javascript-circle" />
                    </div>
                    <p className="p-text">MySQL</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={git} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Git</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={github} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Github</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={bootstrap} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Bootstrap</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={vscode} alt="javascript-circle" />
                    </div>
                    <p className="p-text">VSCode</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={springtool} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Springtool</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={jsp} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Java Server Pages</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={jquery} alt="javascript-circle" />
                    </div>
                    <p className="p-text">jQuery</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={json} alt="javascript-circle" />
                    </div>
                    <p className="p-text">JSON</p>
                </div>
                <div className="skills-Item flex">
                    <div className="flex">
                        <img src={postman} alt="javascript-circle" />
                    </div>
                    <p className="p-text">Postman</p>
                </div>
            </motion.div>
        </div>
    </div>
    )
}

export default Skills;