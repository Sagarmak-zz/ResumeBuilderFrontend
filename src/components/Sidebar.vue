<template>
	<div class="sidebar">

		<collapse accordion is-fullwidth>

			<collapse-item title="PERSONAL INFO">

				<div class="field">
					<label class="label">NAME</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.name"
						v-validate="'required|min:2|max:30'" name="name"
						>
						<span v-show="errors.has('name')" class="help is-danger">
						{{ errors.first('name') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">EMAIL</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.email"
						v-validate="'required|email'" name="email"
						>
						<span v-show="errors.has('email')" class="help is-danger">
						{{ errors.first('email') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">DATE OF BIRTH</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.dob"
						v-validate="'date_format:DD/MM/YYYY'" name="dob"
						>
						<span v-show="errors.has('dob')" class="help is-danger">
						{{ errors.first('dob') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">ADDRESS</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.address"
						v-validate="'min:2|max:80'" name="address"
						>
						<span v-show="errors.has('address')" class="help is-danger">
						{{ errors.first('address') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">PROFESSION</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.profession"
						v-validate="'min:2|max:30|alpha_spaces'" name="profession"
						>
						<span v-show="errors.has('profession')" class="help is-danger">
						{{ errors.first('profession') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">PHONE</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.info.phone"
						v-validate="'min:10|max:10|numeric'" name="phone"
						>
						<span v-show="errors.has('phone')" class="help is-danger">
						{{ errors.first('phone') }}</span>
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
						placeholder="Text input" v-model="resume.degree[i].name"
						v-validate="'required|min:2|max:30|alpha_spaces'" name="degree-name"
						>
						<span v-show="errors.has('degree-name')" class="help is-danger">
						{{ errors.first('degree-name') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">INSTITUTE/UNIVERSITY</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.degree[i].institute"
						v-validate="'required|min:2|max:80|alpha_spaces'" name="institute"
						>
						<span v-show="errors.has('institute')" class="help is-danger">
						{{ errors.first('institute') }}</span>
					</div>
				</div>
				<div class="field">
					<label class="label">YEAR</label>
					<div class="control">
						<input class="input is-primary" type="text"
						placeholder="Text input" v-model="resume.degree[i].year"
						v-validate="'min:4|max:4|numeric'" name="year"
						>
						<span v-show="errors.has('year')" class="help is-danger">
						{{ errors.first('year') }}</span>
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

			<a class="btn button is-info" @click="addDegree()">
				<span class="icon">
					<i class="fa fa-plus"></i>
				</span>
				<span>Add</span>
			</a>

		</collapse-item>

		<collapse-item title="SKILLS">

			<div v-if="resumeId==0">

					<div class="field">
						<label class="label">EXPERTISE AREA/AREA(S) OF INTEREST</label>
						<div class="control">
							<input class="input is-primary" type="text"
							placeholder="Text input" v-model="resume.da.expertise">
						</div>
					</div>
					<div class="field">
						<label class="label">PROGRAMMING LANGUAGE(S)</label>
						<div class="control">
							<input class="input is-primary" type="text"
							placeholder="Text input" v-model="resume.da.programming_languages">
						</div>
					</div>
					<div class="field">
						<label class="label">TOOLS AND TECHNOLOGIES</label>
						<div class="control">
							<input class="input is-primary" type="text"
							placeholder="Text input" v-model="resume.da.tools">
						</div>
					</div>
					<div class="field">
						<label class="label">TECHNICAL ELECTIVES</label>
						<div class="control">
							<input class="input is-primary" type="text"
							placeholder="Text input" v-model="resume.da.technical_electives">
						</div>
					</div>

			</div>

			<div v-else>

					<div class="parentInput field" v-for="(skill,i) in resume.skill" :key="i">

						<div class="childInput control">
							<input class="input is-primary" type="text"
							placeholder="Text input" v-model="resume.skill[i].name"
							v-validate="'min:5|max:50'" name="skill"
							>
							<span v-show="errors.has('skill')" class="help is-danger">
							{{ errors.first('skill') }}</span>
						</div>
						<a class="button is-danger" @click="removeSkill(i)">
							<span class="icon">
								<i class="fa fa-minus-circle"></i>
							</span>
						</a>

					</div>

					<a class="btn2 button is-info" @click="addSkill()">
						<span class="icon">
							<i class="fa fa-plus"></i>
						</span>
						<span>Add</span>
					</a>

			</div>

		</collapse-item>

		<collapse-item title="PROFESSIONAL EXPERIENCE">


			<collapse-item :title="resume.internship[i].name"
			v-for="(internship,i) in resume.internship" :key="i">

			<div class="field">
				<label class="label">COMPANY NAME</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].name"
					v-validate="'min:2|max:80'" name="company-name"
					>
					<span v-show="errors.has('company-name')" class="help is-danger">
					{{ errors.first('company-name') }}</span>
				</div>
			</div>
			<div class="field">
				<label class="label">DESCRIPTION</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].description"
					v-validate="'min:20|max:300'" name="experiance-description"
					>
					<span v-show="errors.has('experiance-description')" class="help is-danger">
					{{ errors.first('experiance-description') }}</span>
				</div>
			</div>
			<div class="field">
				<label class="label">GUIDE/SUPERVISOR</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].guide"
					v-validate="'min:2|max:30'" name="guide"
					>
					<span v-show="errors.has('guide')" class="help is-danger">
					{{ errors.first('guide') }}</span>
				</div>
			</div>
			<div class="field">
				<label class="label">START DATE</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].start"
					v-validate="'date_format:DD/MM/YYYY'" name="start"
					>
					<span v-show="errors.has('start')" class="help is-danger">
					{{ errors.first('start') }}</span>
				</div>
			</div>
			<div class="field">
				<label class="label">END DATE</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].end"
					v-validate="'date_format:DD/MM/YYYY'" name="end"
					>
					<span v-show="errors.has('end')" class="help is-danger">
					{{ errors.first('end') }}</span>
				</div>
			</div>
			<div class="field">
				<label class="label">TEAM SIZE</label>
				<div class="control">
					<input class="input is-primary" type="text"
					placeholder="Text input" v-model="resume.internship[i].team_size"
					v-validate="'numeric'" name="team-size"
					>
					<span v-show="errors.has('team-size')" class="help is-danger">
					{{ errors.first('team-size') }}</span>
				</div>
			</div>

			<a class="button is-danger" @click="removeInternship(i)">
				<span class="icon">
					<i class="fa fa-minus-circle"></i>
				</span>
			</a>

		</collapse-item>

		<a class="btn button is-info" @click="addInternship()">
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
				placeholder="Text input" v-model="resume.project[i].name"
				v-validate="'min:2|max:30'" name="project-name"
				>
				<span v-show="errors.has('project-name')" class="help is-danger">
				{{ errors.first('project-name') }}</span>
			</div>
		</div>
		<div class="field">
			<label class="label">DESCRIPTION</label>
			<div class="control">
				<input class="input is-primary" type="text"
				placeholder="Text input" v-model="resume.project[i].description"
				v-validate="'min:20|max:300'" name="project-description"
				>
				<span v-show="errors.has('project-description')" class="help is-danger">
				{{ errors.first('project-description') }}</span>
			</div>
		</div>
		<div class="field">
			<label class="label">GUIDE/SUPERVISOR</label>
			<div class="control">
				<input class="input is-primary" type="text"
				placeholder="Text input" v-model="resume.project[i].guide"
				v-validate="'min:2|max:30'" name="project-guide"
				>
				<span v-show="errors.has('project-guide')" class="help is-danger">
				{{ errors.first('project-guide') }}</span>
			</div>
		</div>
		<div class="field">
			<label class="label">START DATE</label>
			<div class="control">
				<input class="input is-primary" type="text"
				placeholder="Text input" v-model="resume.project[i].start"
				v-validate="'date_format:DD/MM/YYYY'" name="project-start"
				>
				<span v-show="errors.has('project-start')" class="help is-danger">
				{{ errors.first('project-start') }}</span>
			</div>
		</div>
		<div class="field">
			<label class="label">END DATE</label>
			<div class="control">
				<input class="input is-primary" type="text"
				placeholder="Text input" v-model="resume.project[i].end"
				v-validate="'date_format:DD/MM/YYYY'" name="project-end"
				>
				<span v-show="errors.has('project-end')" class="help is-danger">
				{{ errors.first('project-end') }}</span>
			</div>
		</div>
		<div class="field">
			<label class="label">TEAM SIZE</label>
			<div class="control">
				<input class="input is-primary" type="text"
				placeholder="Text input" v-model="resume.project[i].team_size"
				v-validate="'numeric'" name="project-team-size"
				>
				<span v-show="errors.has('project-team-size')" class="help is-danger">
				{{ errors.first('project-team-size') }}</span>
			</div>
		</div>
		<a class="button is-danger" @click="removeProject(i)">
			<span class="icon">
				<i class="fa fa-minus-circle"></i>
			</span>
		</a>

	</collapse-item>

	<a class="btn button is-info" @click="addProject()">
		<span class="icon">
			<i class="fa fa-plus"></i>
		</span>
		<span>Add</span>
	</a>

</collapse-item>

<collapse-item title="POSITION OF RESPONSIBILITY">

	<div class="parentInput field" v-for="(position,i) in resume.position" :key="i">

		<div class="childInput control">
			<input class="input is-primary" type="text"
			placeholder="Text input" v-model="resume.position[i].name"
			v-validate="'min:4|max:80|alpha'" name="position"
			>
			<span v-show="errors.has('position')" class="help is-danger">
			{{ errors.first('position') }}</span>
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

	<div class="parentInput field" v-for="(award,i) in resume.award" :key="i">

		<div class="childInput control">
			<input class="input is-primary" type="text"
			placeholder="Text input" v-model="resume.award[i].name"
			v-validate="'min:4|max:80|alpha'" name="award"
			>
			<span v-show="errors.has('award')" class="help is-danger">
			{{ errors.first('award') }}</span>
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

	<div class="parentInput field" v-for="(hobby,i) in resume.hobby" :key="i">

		<div class="childInput control">
			<input class="input is-primary" type="text"
			placeholder="Text input" v-model="resume.hobby[i].name"
			v-validate="'min:4|max:80|alpha'" name="interest"
			>
			<span v-show="errors.has('interest')" class="help is-danger">
			{{ errors.first('interest') }}</span>
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

<div class="button-bottom">
	<div class="button is-primary" @click.prevent="clickSave">
		Save
	</div>
	<div class="button is-info" @click="print">
		Print
	</div>
</div>
<!--
<pre>
{{data}}
</pre> -->

</div>
</template>

<script>

import { Collapse, Item as CollapseItem } from 'vue-bulma-collapse'

export default {
	name: 'sidebar',

	props: ['data', 'resume','resumeId', 'template'],

	components: {
		Collapse,
		CollapseItem
	},

	methods: {

		print() {
			window.print();
		},

		clickSave() {
			this.$bus.$emit('save');
		},

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

		addSkill: function(){
			this.resume.skill.push({});
		},

		removeSkill: function(i){
			this.resume.skill.splice(i,1);
		},

		addDegree: function(){
			this.resume.degree.push({});
		},

		removeDegree: function(i){
			this.resume.degree.splice(i,1);
		}

	},

}

</script>

<style lang="scss">
.sidebar {

	.button-bottom {
		margin-top: .7rem;
		display: flex;
		justify-content: space-between;
		div {
			flex: 1;
			border-radius: 2px;
		}
		.is-primary {
			margin-right: 0.2rem;
		}
	}

	.parentInput {
		display: flex;
	}

	.childInput {
		flex: 2;
		margin-right: 3px;
	}
}
</style>
