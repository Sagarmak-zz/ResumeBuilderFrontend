<template lang="html">
	<div class="resume">

		<div class="mainDetails">
			<div id="name">
				<h1>{{ resume.info.name }}</h1>
				<h2>{{ resume.info.profession }}</h2>
			</div>

			<div id="contactDetails">
				<ul>
					<li>dob: {{ resume.info.dob }}</li>
					<li>email: {{ resume.info.email }}</li>
					<li>mob: {{ resume.info.phone }}  </li>
				</ul>
			</div>
		</div>

		<div id="mainArea"></div>

			<div class="education">
				<div class="sectionTitle">
					<h1>Education</h1>
				</div>

				<div class="sectionContent">
					<article v-for="item in resume.degree">
						<h2>{{ item.name }}
                        <p>{{ item.year }}</p>
						</h2>
						<p>{{ item.institute }}</p>
					</article>
			    </div>
		    </div>


			<div class="workExperience">
				<div class="sectionTitle">
					<h1>Work Experience</h1>
				</div>

				<div class="sectionContent">
					<article v-for="item in resume.internship">
						<h2>{{ item.name }}
							<p>{{ item.start }} - {{ item.end }}</p>
						</h2>
						<p>{{ item.description }}</p>
					</article>
				</div>
			</div>


			<div class="keySkills">
				<div class="sectionTitle">
					<h1>Key Skills</h1>
				</div>

				<div class="sectionContent">
					<ul>
						<li v-for="(item,i) in resume.skill" :key="i">{{ item.name }}</li>
					</ul>
				</div>
			</div>

			<div class="keySkills">
				<div class="sectionTitle">
					<h1>Achievements</h1>
				</div>

				<div class="sectionContent">
					<ul>
						<li v-for="(item,i) in resume.award" :key="i">{{ item.name }}</li>
					</ul>
				</div>
			</div>


		</div>
	</div>
</template>

<script>
    export default {
        name: 'resume-template3',
        props: ['resume'],
    }
</script>

<style lang="scss">

.resume {

	position: fixed;
	top: 60px;
	bottom: 0;
	max-width: 60%;
	overflow-y: scroll;

	h2 {
		display: flex;
		justify-content: space-between;

		p {
			font-size: 0.6em;
		}
	}

	p, li {
		font-size: 0.9em;
		color: #444;
		padding: 0px 1px;
	}

	.mainDetails {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 25px 35px;
		border-bottom: 2px solid #cf8a05;
		background: #ededed;
	}

	#name h1 {
		font-size: 2em;
		font-weight: 700;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		margin-bottom: -6px;
	}

	#name h2 {
		font-size: 1.2em;
		margin-left: 2px;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	}

	.education {
		display: flex;
		justify-content: center;
		align-items: center;

		padding: 20px;
		padding-bottom: 60px;
		border-bottom: solid 1px #ddd;
	}

	.workExperience {
		display: flex;
		justify-content: space-between;;
		align-items: center;

		padding: 20px;
		padding-bottom: 60px;
		border-bottom: solid 1px #ddd;
	}

	.keySkills {
		display: flex;
		justify-content: space-between;
		align-items: center;

		padding: 20px;
		padding-bottom: 60px;
		border-bottom: solid 1px #ddd;

		ul {
			list-style-type: disc;
		}
	}

	.sectionTitle {
			flex: 1;
            align-self: flex-start;
	}

	.sectionContent {
			flex: 3;
			// flex-wrap: wrap;
			margin-left: 1rem;
	}

	#contactDetails ul {
		list-style-type: none;
		font-size: 0.9em;
		margin-top: 2px;
	}

	#contactDetails ul li {
		margin-bottom: 3px;
		color: #444;
	}

	#contactDetails ul li {
		color: #444;
		text-decoration: none;
		-webkit-transition: all .3s ease-in;
		-moz-transition: all .3s ease-in;
		-o-transition: all .3s ease-in;
		-ms-transition: all .3s ease-in;
		transition: all .3s ease-in;
	}

	.sectionTitle h1 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.5em;
	}

	.sectionContent h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.2em;
		margin-bottom: -4px;
	}

	.sectionContent article {
		margin-bottom: 10px;
	}


	// @media all and (min-width: 602px) and (max-width: 800px) {
	// 	#headshot {
	// 		display: none;
	// 	}

	// 	.keySkills {
	// 		-moz-column-count:2;
	// 		-webkit-column-count:2;
	// 		column-count:2;
	// 	}
	// }

	// @media all and (max-width: 601px) {
	// 	#cv {
	// 		width: 95%;
	// 		margin: 10px auto;
	// 		min-width: 280px;
	// 	}

	// 	#headshot {
	// 		display: none;
	// 	}

	// 	#name, #contactDetails {
	// 		float: none;
	// 		width: 100%;
	// 		text-align: center;
	// 	}

	// 	.sectionTitle, .sectionContent {
	// 		float: none;
	// 		width: 100%;
	// 	}

	// 	.sectionTitle {
	// 		margin-left: -2px;
	// 		font-size: 1.25em;
	// 	}

	// 	.keySkills {
	// 		-moz-column-count:2;
	// 		-webkit-column-count:2;
	// 		column-count:2;
	// 	}
	// }

	// @media all and (max-width: 480px) {
	// 	.mainDetails {
	// 		padding: 15px 15px;
	// 	}

	// 	section {
	// 		padding: 15px 0 0;
	// 	}

	// 	#mainArea {
	// 		padding: 0 25px;
	// 	}


	// 	.keySkills {
	// 		-moz-column-count:1;
	// 		-webkit-column-count:1;
	// 		column-count:1;
	// 	}

	// 	#name h1 {
	// 		line-height: .8em;
	// 		margin-bottom: 4px;
	// 	}
	// }

	// @media print {
	// 	#cv {
	// 		width: 100%;
	// 	}
	// }

	// @-webkit-keyframes reset {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 0;
	// 	}
	// }

	// @-webkit-keyframes fade-in {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	40% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 1;
	// 	}
	// }

	// @-moz-keyframes reset {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 0;
	// 	}
	// }

	// @-moz-keyframes fade-in {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	40% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 1;
	// 	}
	// }

	// @keyframes reset {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 0;
	// 	}
	// }

	// @keyframes fade-in {
	// 	0% {
	// 		opacity: 0;
	// 	}
	// 	40% {
	// 		opacity: 0;
	// 	}
	// 	100% {
	// 		opacity: 1;
	// 	}
	// }
}
</style>
