<template lang="html">

<div>
    <div class="resume-render-wrapper">

    <div class="wrapper">

        <div class="header">
            <h1>Emma Burton</h1>
            <p>
                Software Developer
            </p>
        </div>

        <!-- intro -->
        <table class="section-intro">
            <tr>
                <td><b>Full Name</b></td>
                <td>Emma Grace Burton</td>
                <td><b>DOB </b></td>
                <td>20/10/1990</td>
            </tr>

            <tr>
                <td><b>Address</b></td>
                <td>1234, Avallenado St.</td>
                <td><b>Email</b></td>
                <td>Eliserawnsleye@gmail.com</td>
            </tr>

            <tr>
                <td><b>Website</b></td>
                <td>www.eliserawnsleye.com</td>
                <td><b>Phone</b></td>
                <td>(481)591-4285</td>
            </tr>
        </table>

        <!-- work experience -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
            <tr>
                <td class="td">
                    <b><p class="section-header">WORK EXPERIENCE></p></b>
                </td>
                <td>
                    <table class="margin">
                        <tr>
                            <th>11/2012-Present</th>
                            <td>
                                <b><p>Heylex Manufacturing Corporation</p></b>
                                <p>Project Intern</p>
                                <p>Developed simulation models for the company's product line</p>
                            </td>
                        </tr>
                        <tr>
                            <th>02/2012-10/2012</th>
                            <td>
                                <b><p>Holden University of Applied Science</p></b>
                                <p>Graduate Research Assistant</p>
                                <p>Assisted a professor in preparing materials for a course in quality process and improvement</p>
                            </td>
                        </tr>
                        <tr>
                            <th>05/2011-01/2012</th>
                            <td>
                                <b><p>Vertex Microsystems</p></b>
                                <p>Engineering Trainee</p>
                                <p>Assisted a professor in preparing materials for a course in quality process and improvement</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>

        <!-- Projects -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
           <tr>
               <td class="td">
                   <b><p class="section-header">PROJECTS</p></b>
               </td>
               <td>
                   <table class="margin">
                       <tr>
                            <th>11/2012-Present</th>
                            <td>
                                <b><p>Heylex Manufacturing Corporation</p></b>
                                <p>Guide : <span>Professor X. Y</span></p>
                                <p>Developed simulation models for the company's product line</p>
                            </td>
                        </tr>
                        <tr>
                        <th>01/2007-01/2012</th>
                            <td>
                                <b><p>Holden University of Applied Science</p></b>
                                <p>Guide : <span>Professor X. Y</span></p>
                                <p>Assisted a professor in preparing materials for a course in quality process and improvement</p>
                            </td>
                        </tr>
                   </table>
               </td>
           </tr>
        </table>

        <!-- Education -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
           <tr>
               <td class="td">
                   <b><p class="section-header">EDUCATION</p></b>
               </td>
               <td>
                   <table class="margin">
                       <tr>
                            <th>11/2012-Present</th>
                            <td>
                                <b><p>Product Design Certification</p></b>
                                <p>Industrial Design and Marketing Institute of both</p>
                                <p>CGPA - 3.78</p>
                            </td>
                        </tr>
                        <tr>
                        <th>01/2007-01/2012</th>
                            <td>
                                <b><p>Bachelor of Science in Marketing</p></b>
                                <p>Holden University of Applied Science</p>
                                <p>CGPA - 3.78</p>
                            </td>
                        </tr>
                        <tr>
                        <th>01/2007-01/2012</th>
                            <td>
                                <b><p>Bachelor of Science in Marketing</p></b>
                                <p>Holden University of Applied Science</p>
                                <p>CGPA - 3.78</p>
                            </td>
                        </tr>
                   </table>
               </td>
           </tr>
        </table>

        <!-- Skills -->
        <table>
            <div class="head-down-border-left"></div>
            <div class="head-down-border-right"></div>
            <tr>
                <th class="section-header">Skills</th>
                <th></th>
                <td>
                    <ul>
                        <li>Accounting</li>
                        <li>Brand Management</li>
                        <li>Quality Improvement</li>
                        <li>Computer Software</li>
                    </ul>
                </td>
                <td>
                    <ul>
                        <li>Data Consolidation</li>
                        <li>Research</li>
                        <li>Statistics Interpretation</li>
                        <li>Costing</li>
                    </ul>
                </td>
            </tr>
        </table>

        <div class="footer"></div>

        </div>
    </div>
</div>

</template>

<script>
export default {
  name: 'resume-template2',

  //props: ['resume'],

  data() {
      return {
        resume: {

          info: {
            name: 'Local Dummy',
            email: 'dummy@email.com',
            dob: '1/1/1995',
            address: '123/1, Gandhinagar'
          },

          degree: [
            {
              name: 'MSc IT',
              institute: 'DAIICT',
              year: '2018',
              score: '8.0'
            }
          ],

          skill: {
              expertise: 'Web Developement',
              programming_languages: 'Javascript',
              tools: 'Postman',
              technical_electives: 'Cloud'
          },

          internship: [
            {
              name: 'Road Inspector',
              description: 'Cross platform application',
              start: '1/7/2017',
              end: '1/9/2017',
              team_size: '5',
              guide: 'Lavguru'
            }
          ],

          project: [
            {
              name: 'Road Inspector',
              description: 'Cross platform application',
              start: '1/7/2017',
              end: '1/9/2017',
              team_size: '5',
              guide: 'Lavguru'
            }
          ],

          position: [
            {
              name: 'Proect Leader'
            }
          ],

          award: [
            {
              name: 'Nope'
            }
          ],

          hobby: [
            {
              name: 'TV Series'
            }
          ]
    	},

		}
	}
}
</script>

<style>

.resume-render-wrapper {

  position: fixed;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
  display: inline;
}

* {
    font-size: 14px;
    padding: 0;
    margin: 0;
  }

.wrapper {
    font-family: "Calibri", sans-serif;
    font-size: 12px;
    line-height: 1.5;
    background: #fff;
    padding: 30px;
}


.header{
        font-family: "ISOCTEUR";
        background-color: #A7ADFD;
        text-transform: uppercase;
        color:black;
        height:200%;
        padding:40px;
        text-align: center;
}

.header p{
    font-size: 18px;
}

.footer{
        background-color:#A7ADFD;
        height:70%;
        padding:40px;
}

h1{
    font-size: 52px;
}

table{
    border-collapse: collapse;
    margin-left: 80px;
    margin-top: 50px;
    text-align: left;
    align-self: center;
}
th{
    vertical-align: top;
    width: 10%;
    padding-right: 60px;
    text-transform: uppercase;
}
td{
    vertical-align: top;
    padding-top: 0px;
    padding-bottom: 25px;
    text-align: left;
}

.head-down-border-left{
    border-bottom: solid 3px;
    border-color: #A7ADFD;
    margin-left: 70px;
    border-radius: 1px;
    max-width: 12%;
}
.head-down-border-right{
    border-bottom: solid 3px;
    border-color: #A7ADFD;
    margin-left: 270px;
    border-radius: 1px;
    max-width: 70%;
}

.section-header{
    font-family:"ISOCTEUR";
    font-size: 18px;

}
.section-intro{
        font-size: 18px;
}

.section-intro td{
    text-align: left;
    width:210px;
    padding-left: 2%;
}

.margin{
    margin-top: -15px;
    margin-bottom: -30px;
}

.td{
    width: 110px;
}

</style>