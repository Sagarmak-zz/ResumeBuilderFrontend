<template lang="html">
  <div class="dashboard">
    <div class="">
      <!-- <pre>
      {{resume}}
    </pre> -->
    <div class="columns">

      <div class="column is-4 nodisplay">
        <Sidebar :data="$data" :resumeId="resumeId" :resume="resume"></Sidebar>
      </div>

      <div class="column resume-template1">
        <div v-if="resumeId==0">
          <Resume0 :resume="resume"></Resume0>
        </div>
        <div v-else-if="resumeId==1">
          <Resume1 :resume="resume"></Resume1>
        </div>
        <div v-else-if="resumeId==2">
          <Resume2 :resume="resume"></Resume2>
        </div>
        <div v-else-if="resumeId==3">
          <Resume3 :resume="resume"></Resume3>
        </div>
        <div v-else-if="resumeId==4">
          <Resume4 :resume="resume"></Resume4>
        </div>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Resume0 from '@/components/Resume0';
import Resume1 from '@/components/Resume1';
import Resume2 from '@/components/Resume2';
import Resume3 from '@/components/Resume3';
import Resume4 from '@/components/Resume4';
import api from '@/api/main';

export default {
  name: 'dashboard',

  created() {
    //resumeid
    this.resumeId = this.$route.params.resume_id;
    //display null-insert, else-update
    this.display();
    //condition 0,1 no repeation
    this.userTemplates();
    // name, email
    // this.callDummy();
    this.userProfile();

    // save Button
    this.$bus.$on('save', () => {
      //if noDisplay, call insert.
      if(this.noDisplay == true) {
        if(this.template.length == 0) {
          console.log('Calling Insert');
          let counter = 0;
          // console.log("Data:", this.$data);
          // console.log("Template Insert:", this.template);
          this.template.push({id:this.resumeId});
          // console.log("Inside insert Resume", this.resume);
          // console.log("Inside insert Template", this.template);
          // console.log("Insert 1st resume", this.resume.da);
          api.insert(this.resume, this.template)
          .then(response => {
            console.log("Insert: ", response);
            if(response.data == "success") {
              this.$toasted.success('Updation Successful!', {
                theme: "outline",
                position: "top-center",
                duration : 3000,
              });
            }
          })
          .catch(error => {
            console.log(error);
          })
        }
      }
      else {
        // proceed. call update
        console.log('Calling Update');
        let counter = 0;
        // console.log("Template:", this.template);
        for (var i = 0; i < this.template.length; i++) {
          if(this.template[i].id == this.resumeId) {
            // console.log(this.resumeId, ' already present');
            //do not insert
            counter++;
          }
        }
        if(counter == 0) {
          // console.log(this.resumeId, ' not present.');
          //insert it
          this.template.push({id: this.resumeId});
        }
        this.update();
      }

    })
  },

  methods: {
    display() {
      api.display()
      .then(response => {
        console.log("Display", response.data);
        if(response.data.length == 0) {
          this.noDisplay = true;
        }
        else {
          this.resume = response.data[0].data.resume;
          this.template = response.data[0].data.template;
        }
      })
      .catch(error => {
        console.log(error);
      })
    },

    userTemplates() {
      api.userTemplates()
      .then(response => {
        // console.log("userTemplatesDashboard", response.data);
        if(response.data == "No templates") {
          //do nothing
        }
        else if (response.data == "user data not found") {
          //do nothing
        }
        else {
          this.template = response.data;
          // template array
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.status, error.response.statusText);
      });
    },

    callDummy() {
      console.log(this.resume);
      console.log(this.template);
    },

    update() {
      console.log("Update");
      console.log(this.template);
      console.log(this.resume);
      api.update(this.resume, this.template)
      .then(response => {
        if(response.data == "update successful") {
          this.display();
          this.$toasted.success('Updation Successful!', {
            theme: "outline",
            position: "top-center",
            duration : 3000,
          });
        }
        else {

        }
      })
      .catch(error => {
        console.log(error.response);
      })
    },

    userProfile() {
      api.userProfile()
      .then(response => {
        this.resume.info.name = response.data.user.name;
        this.resume.info.email = response.data.user.email;
      })
      .catch(error => {
        console.log(error);
      })
    },
  },

  data() {
    return {
      noDisplay: false,
      resume: {
        info: {
          name: "",
          email: "",
          dob: "",
          address: "",
          profession: "",
          phone: ""
        },

        da: {
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

      },
      template: [

      ]
    };
  },

  components: {
    Sidebar,
    Resume0,
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
    min-height: 40vh;
    padding: 0;
  }


  @media print {
    .nodisplay {
      display: none;
    }
  }


}
</style>
