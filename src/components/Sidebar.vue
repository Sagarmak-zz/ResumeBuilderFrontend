<template>
<div class="sidebar">

          <collapse accordion is-fullwidth>

							<collapse-item title="PERSONAL INFO">

								<div class="field">
									<label class="label">NAME</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.info.name">
									</div>
								</div>
														<div class="field">
									<label class="label">EMAIL</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.info.email">
									</div>
								</div>
														<div class="field">
									<label class="label">DATE OF BIRTH</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.info.dob">
									</div>
								</div>
														<div class="field">
									<label class="label">ADDRESS</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.info.address">
									</div>
								</div>

							</collapse-item>

							<collapse-item title="EDUCATION">

								<collapse-item :title="resume.degree[i].name"
								v-for="(degree,i) in resume.degree" :key="i">

								<div class="field">
									<label class="label">DEGREE NAME</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.degree[i].name">
									</div>
								</div>
														<div class="field">
									<label class="label">INSTITUTE/UNIVERSITY</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.degree[i].institute">
									</div>
								</div>
														<div class="field">
									<label class="label">YEAR</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.degree[i].year">
									</div>
								</div>
														<div class="field">
									<label class="label">CPI/AGGREGATE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.degree[i].score">
									</div>
								</div>

								<a class="button is-danger" @click="removeDegree(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
								</a>

								</collapse-item>

								<a class="button is-info" @click="addDegree()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

						</collapse-item>

						<collapse-item title="SKILLS">

								<div class="field">
									<label class="label">EXPERTISE AREA/AREA(S) OF INTEREST</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.skill.expertise">
									</div>
								</div>
														<div class="field">
									<label class="label">PROGRAMMING LANGUAGE(S)</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.skill.programming_languages">
									</div>
								</div>
														<div class="field">
									<label class="label">TOOLS AND TECHNOLOGIES</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.skill.tools">
									</div>
								</div>
														<div class="field">
									<label class="label">TECHNICAL ELECTIVES</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.skill.technical_electives">
									</div>
								</div>

						</collapse-item>

						<collapse-item title="PROFESSIONAL EXPERIENCE">


								<collapse-item :title="resume.internship[i].name"
								v-for="(internship,i) in resume.internship" :key="i">

								<div class="field">
									<label class="label">PROJECT NAME</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].name">
									</div>
								</div>
														<div class="field">
									<label class="label">DESCRIPTION</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].description">
									</div>
								</div>
														<div class="field">
									<label class="label">GUIDE/SUPERVISOR</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].guide">
									</div>
								</div>
														<div class="field">
									<label class="label">START DATE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].start">
									</div>
								</div>
														<div class="field">
									<label class="label">END DATE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].end">
									</div>
								</div>                        <div class="field">
									<label class="label">TEAM SIZE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.internship[i].team_size">
									</div>
								</div>

								<a class="button is-danger" @click="removeInternship(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
								</a>

								</collapse-item>

								<a class="button is-info" @click="addInternship()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

						</collapse-item>

						<collapse-item title="PROJECTS">

								<collapse-item :title="resume.project[i].name"
								v-for="(project,i) in resume.project" :key="i">

								<div class="field">
									<label class="label">PROJECT NAME</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].name">
									</div>
								</div>
														<div class="field">
									<label class="label">DESCRIPTION</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].description">
									</div>
								</div>
														<div class="field">
									<label class="label">GUIDE/SUPERVISOR</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].guide">
									</div>
								</div>
														<div class="field">
									<label class="label">START DATE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].start">
									</div>
								</div>
														<div class="field">
									<label class="label">END DATE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].end">
									</div>
								</div>
								<div class="field">
									<label class="label">TEAM SIZE</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.project[i].team_size">
									</div>
								</div>
								<a class="button is-danger" @click="removeProject(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
								</a>

								</collapse-item>

								<a class="button is-info" @click="addProject()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

						</collapse-item>

						<collapse-item title="POSITION OF RESPONSIBILITY">

								<div class="field" v-for="(position,i) in resume.position" :key="i">

									<label class="label">{{ resume.position[i].name }}</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.position[i].name">
									</div>
									<a class="button is-danger" @click="removePosition(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
									</a>

								</div>

								<a class="button is-info" @click="addPosition()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

							</collapse-item>

												<collapse-item title="AWARDS AND ACHIEVEMENTS">

								<div class="field" v-for="(award,i) in resume.award" :key="i">

									<label class="label">{{ resume.award[i].name }}</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.award[i].name">
									</div>
									<a class="button is-danger" @click="removeAward(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
									</a>

								</div>

								<a class="button is-info" @click="addAward()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

							</collapse-item>

												<collapse-item title="INTERESTS AND HOBBIES">

								<div class="field" v-for="(hobby,i) in resume.hobby" :key="i">

									<label class="label">{{ resume.hobby[i].name }}</label>
									<div class="control">
										<input class="input is-primary" type="text"
										placeholder="Text input" v-model="resume.hobby[i].name">
									</div>
									<a class="button is-danger" @click="removeHobby(i)">
										<span class="icon">
											<i class="fa fa-minus-circle"></i>
										</span>
									</a>

								</div>

								<a class="button is-info" @click="addHobby()">
									<span class="icon">
												<i class="fa fa-plus"></i>
										</span>
										<span>Add</span>
								</a>

							</collapse-item>

        </collapse>

</div>
</template>

<script>

import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

export default {
  name: 'sidebar',

  props: ['resume'],

  components: {
    Collapse,
    CollapseItem
  },

  methods: {
    addHobby: function(){
      this.resume.hobby.push({})
    },

    removeHobby: function(i){
      this.resume.hobby.splice(i,1);
    },

    addAward: function(){
      this.resume.award.push({});
    },

    removeAward: function(i){
      this.resume.award.splice(i,1);
    },

    addPosition: function(){
      this.resume.position.push({});
    },

    removePosition: function(i){
      this.resume.position.splice(i,1);
    },

    addProject: function(){
      this.resume.project.push({});
    },

    removeProject: function(i){
      this.resume.project.splice(i,1);
    },

    addInternship: function(){
      this.resume.internship.push({});
    },

    removeInternship: function(i){
      this.resume.internship.splice(i,1);
    },

    addDegree: function(){
      this.resume.degree.push({});
    },

    removeDegree: function(i){
      this.resume.degree.splice(i,1);
    }

  },

  // data() {
  //     return {
  //       resume: {

  //         info: {
  //           name: 'Local Dummy',
  //           email: 'dummy@email.com',
  //           dob: '1/1/1995',
  //           address: '123/1, Gandhinagar'
  //         },

  //         degree: [
  //           {
  //             name: 'MSc IT',
  //             institute: 'DAIICT',
  //             year: '2018',
  //             score: '8.0'
  //           }
  //         ],

  //         skill: {
  //             expertise: 'Web Developement',
  //             programming_languages: 'Javascript',
  //             tools: 'Postman',
  //             technical_electives: 'Cloud'
  //         },

  //         internship: [
  //           {
  //             name: 'Road Inspector',
  //             description: 'Cross platform application',
  //             start: '1/7/2017',
  //             end: '1/9/2017',
  //             team_size: '5',
  //             guide: 'Lavguru'
  //           }
  //         ],

  //         project: [
  //           {
  //             name: 'Road Inspector',
  //             description: 'Cross platform application',
  //             start: '1/7/2017',
  //             end: '1/9/2017',
  //             team_size: '5',
  //             guide: 'Lavguru'
  //           }
  //         ],

  //         position: [
  //           {
  //             name: 'Proect Leader'
  //           }
  //         ],

  //         award: [
  //           {
  //             name: 'Nope'
  //           }
  //         ],

  //         hobby: [
  //           {
  //             name: 'TV Series'
  //           }
  //         ]
  //   	},

	// 	}
	// }


}

</script>

<style>
	.box{
		height: 100vh;
	}
</style>
