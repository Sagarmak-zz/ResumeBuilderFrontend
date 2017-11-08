<template lang="html">
  <div class="dashboard">
    <div class="box">
      <div class="columns">
        <div class="column is-4">
          <sidebar :resume="resume"></sidebar>
        </div>
        <div class="column is-8">
          <resume-template1 :resume="resume"></resume-template1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from "@/components/Sidebar";
  import ResumeTemplate1 from "@/resume-templates/ResumeTemplate1";
  export default {
    name: "home",
    components: {
      Sidebar,
      ResumeTemplate1,
    },
    data() {
      return {
        resume: {
          info: {
            name: "Local Dummy",
            email: "dummy@email.com",
            dob: "1/1/1995",
            address: "123/1, Gandhinagar"
          },
          degree: [{
            name: "MSc IT",
            institute: "DAIICT",
            year: "2018",
            score: "8.0"
          }],
          skill: {
            expertise: "Web Developement",
            programming_languages: "Javascript",
            tools: "Postman",
            technical_electives: "Cloud"
          },
          internship: [{
            name: "Road Inspector",
            description: "Cross platform application",
            start: "1/7/2017",
            end: "1/9/2017",
            team_size: "5",
            guide: "Lavguru"
          }],
          project: [{
            name: "Road Inspector",
            description: "Cross platform application",
            start: "1/7/2017",
            end: "1/9/2017",
            team_size: "5",
            guide: "Lavguru"
          }],
          position: [{
            name: "Project Leader"
          }],
          award: [{
            name: "Nope"
          }],
          hobby: [{
            name: "TV Series"
          }]
        }
      };
    }
  };
</script>

<style lang="css">

</style>
