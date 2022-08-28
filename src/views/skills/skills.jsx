import javascriptPic from "../../static/images/javascript.png";
import cssPic from "../../static/images/css.png";
import flaskPic from "../../static/images/flask.png";
import git from "../../static/images/git.png";
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
// import { StyleSheet, Text, SafeAreaView, ScrollView, StatusBar } from 'react-native';
// import ScrollAnimation from 'react-animate-on-scroll';
import './skillsStyles.scss';


const Skills = () => {

    return (
        <div>
        <h1 id="skill">Skills</h1>
        <div class="skills-Container">
            <div class="skills-List">
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={html} alt="javascript-circle" />
                    </div>
                    <p class="p-text">HTML</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={javascriptPic} alt="javascript-circle" />
                    </div>
                    <p class="p-text">JavaScript</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={cssPic} alt="javascript-circle" />
                    </div>
                    <p class="p-text">CSS</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={python} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Python</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={java} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Java</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={flaskPic} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Flask</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={mongodb} alt="javascript-circle" />
                    </div>
                    <p class="p-text">MongoDB</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={react} alt="javascript-circle" />
                    </div>
                    <p class="p-text">React</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={node} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Node</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={mysql} alt="javascript-circle" />
                    </div>
                    <p class="p-text">MySQL</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={git} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Git</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={bootstrap} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Bootstrap</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={vscode} alt="javascript-circle" />
                    </div>
                    <p class="p-text">VSCode</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={springtool} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Springtool</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={jsp} alt="javascript-circle" />
                    </div>
                    <p class="p-text">Java Server Pages</p>
                </div>
                <div class="skills-Item flex">
                    <div class="flex">
                        <img src={jquery} alt="javascript-circle" />
                    </div>
                    <p class="p-text">jQuery</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Skills;