<template lang="html">
  <div class="dashboard">
    <div class="">
      <div class="columns">
        <div class="column is-4">
          <Sidebar :resume="resume"></Sidebar>
        </div>
        <div class="column resume-template1">
          <!-- <Resume1 :resume="resume"></Resume1> -->
          <!-- <Resume2></Resume2>s -->
          <!-- <Resume3></Resume3> -->
          <Resume4></Resume4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Resume1 from '@/components/Resume1';
import Resume2 from '@/components/Resume2';
import Resume3 from '@/components/Resume3';
import Resume4 from '@/components/Resume4';
export default {
  name: 'dashboard',
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
  },

  components: {
    Sidebar,
    Resume1,
    Resume2,
    Resume3,
    Resume4
  }

}
</script>

<style lang="scss">
.dashboard {

  .resume-template1 {
      // background-color: white;
      margin-top: .7rem;
      border: solid 1px #ddd;
      min-height: 85vh;
  }

}
</style>
