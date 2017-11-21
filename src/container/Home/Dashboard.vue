<template lang="html">
  <div class="dashboard">
    <div class="">
      <div class="columns">
        <div class="column is-4">
          <sidebar :resume="resume"></sidebar>
        </div>
        <div class="column is-8">
          <resume-template2 :resume="resume"></resume-template2>
          <!-- <resume-template4></resume-template4> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "@/components/Sidebar";
  import ResumeTemplate1 from "@/resume-templates/ResumeTemplate1";
  import ResumeTemplate2 from "@/resume-templates/ResumeTemplate2";
  import ResumeTemplate3 from "@/resume-templates/ResumeTemplate3";
  import ResumeTemplate4 from "@/resume-templates/ResumeTemplate4";


  export default {
    name: "home",
    components: {
      Sidebar,
      ResumeTemplate1,
      ResumeTemplate2,
      ResumeTemplate3,
      ResumeTemplate4
    },
    data() {
      return {
        resume: {

          info: {
            name: "John Doe",
            email: "john@gmail.com",
            dob: "01/01/1990",
            address: "123, Sector 2, Gandhinagar",
            profession: "Web Developer",
            phone: "9999988888"
          },

          da1: {
              expertise: "Frontend Web Developemet",
              programming_languages: "Javascript, Java",
              tools: "Postman, Git, VueJS, Bulma",
              technical_electives: "Cloud computing"
          },

          degree: [
            {
              name: "MSc IT",
              institute: "Dhirubhai Ambani Institute of Information and Communication Technology",
              year: "2018",
              score: "7.0"
            },
            {
              name: "BCA",
              institute: "GLS Institute of Computer Technology",
              year: "2016",
              score: "7.5"
            },
            {
              name: "Higher Secondary",
              institute: "Delhi Public School, Gandhinagar",
              year: "2012",
              score: "60"
            },
            {
              name: "Secondary",
              institute: "Delhi Public School, Gandhinagar",
              year: "2010",
              score: "70"
            }

          ],

          skill: [
            {
              name: 'UX & UI Design',
            },
            {
              name: 'Search Engine Optimization (SEO)',
            },
            {
              name: '3D Animation & Agile Methodologies',
            }
          ],

          internship: [
            {
              name: "ABC Company, Ahmedabad",
              description: "Handled database and Web site programming tasks (primarily using Java, C, C++, HTML and SharePoint).",
              start: "1/7/2017",
              end: "1/9/2017",
              team_size: "1",
              guide: "John Wick"
            },
            {
              name: "XVZ Company, Ahemdabad",
              description: "Redesigned Internet and intranet pages. Used SEO best practices to optimize Web site for search engine rankings and improved functionality of company database.",
              start: "1/12/2016",
              end: "1/2/2017",
              team_size: "2",
              guide: "Jason Bourne"
            }
          ],

          project: [
            {
              name: "ABC Company, Ahmedabad",
              description: "Handled database and Web site programming tasks (primarily using Java, C, C++, HTML and SharePoint).",
              start: "1/7/2017",
              end: "1/9/2017",
              team_size: "1",
              guide: "John Wick"
            },
            {
              name: "XVZ Company, Ahmedabad",
              description: "Redesigned Internet and intranet pages. Used SEO best practices to optimize Web site for search engine rankings and improved functionality of company database.",
              start: "1/12/2016",
              end: "1/2/2017",
              team_size: "2",
              guide: "Jason Bourne"
            }
          ],

          position: [
            {
              name: "Project Leader"
            },
            {
              name: "Project Leader"
            },
            {
              name: "Project Leader"
            }
          ],

          award: [
            {
              name: "Developed an online training platform that resulted in an increase of 50+ employees enrolling in company development courses per year."
            },
            {
              name: "Launched a company-wide digitized filing system that led to an increase in efficiency for all departments by 20% on average."
            }
          ],

          hobby: [
            {
              name: "TV Series, Movies"
            },
            {
              name: "Badminton"
            },
            {
              name: "Following IT blogs and tech news"
            }
          ]

        }
      };
    }
  };
</script>

<style lang="css">

</style>
