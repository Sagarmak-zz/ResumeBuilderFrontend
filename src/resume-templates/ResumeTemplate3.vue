<template lang="html">
	<div class="resume">

		<div class="mainDetails">

			<div id="name">
				<h1>{{ resume.info.name }}</h1>
				<h2> resume.info.profession </h2>
			</div>

			<div id="contactDetails">
				<ul>
					<li>e: {{ resume.info.email }}</li>
					<li>w: resume.info.website </li>
					<li>m: resume.info.phone </li>
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
						<h2>{{ item.institute }}
                        <p>{{ item.year }}</p>
						</h2>
						<p class="subDetails">{{ item.name }}</p>
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
					<ul class="keySkills" v-for="(item,i) in resume.skill" :key="i">
						<li>{{ item.name }}</li>
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

	article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
		display:block;
	}

	h2 {
		display: flex;
		justify-content: space-between;
	}

	h2 p {
		font-size: 0.6em;
		font-style: italic;
		margin-bottom: 3px;
	}

	p {
		font-size: 1em;
		line-height: 1.4em;
		margin-bottom: 20px;
		color: #444;
	}

	#cv {
		// width: 90%;
		max-width: 800px;
		background: #f3f3f3;
		// margin: 30px auto;
	}

	.mainDetails {
		padding: 25px 35px;
		border-bottom: 2px solid #cf8a05;
		background: #ededed;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	#name h1 {
		font-size: 2.5em;
		font-weight: 700;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		margin-bottom: -6px;
	}

	#name h2 {
		font-size: 2em;
		margin-left: 2px;
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
	}

	#mainArea {
		padding: 0 40px;
		margin-top: .5rem;
	}

	.personalProfile {
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: solid 1px #ddd;
		.sectionTitle {
			flex: 1;
			align-self: flex-start;
		}
		.sectionContent {
			flex: 3;
			margin-left: 1rem;
		}
	}

	.workExperience {
		display: flex;
		justify-content: space-between;;
		align-items: center;
		padding-top: .5rem;
		border-bottom: solid 1px #ddd;
		.sectionTitle {
			flex: 1;
			align-self: flex-start;
		}
		.sectionContent {
			flex: 3;
			margin-left: 1rem;
		}
	}

	div.keySkills {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: .5rem;
		border-bottom: solid 1px #ddd;
		.sectionTitle {
			flex: 1;
            align-self: flex-start;
		}
		.sectionContent {
			flex: 3;
			flex-wrap: wrap;
			margin-left: 1rem;
		}
	}

	.education {
		display: flex;
		justify-content: center;
		align-items: center;
		.sectionTitle {
			flex: 1;
			align-self: flex-start;
		}
		.sectionContent {
			flex: 3;
			flex-wrap: wrap;
			margin-left: 1rem;
		}
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

	#contactDetails ul li a, a[href^=tel] {
		color: #444;
		text-decoration: none;
		-webkit-transition: all .3s ease-in;
		-moz-transition: all .3s ease-in;
		-o-transition: all .3s ease-in;
		-ms-transition: all .3s ease-in;
		transition: all .3s ease-in;
	}

	#contactDetails ul li a:hover {
		color: #cf8a05;
	}


	section {
		border-top: 1px solid #dedede;
		padding: 20px 0 0;
	}

	section:first-child {
		border-top: 0;
	}

	section:last-child {
		padding: 20px 0 10px;
	}

	.sectionTitle h1 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-style: italic;
		font-size: 1.5em;
		color: #cf8a05;
	}

	.sectionContent h2 {
		font-family: 'Rokkitt', Helvetica, Arial, sans-serif;
		font-size: 1.5em;
		margin-bottom: -2px;
	}

	.subDetails {
		font-size: 0.8em;
		font-style: italic;
		margin-bottom: 3px;
	}

	.keySkills {
		list-style-type: none;
		-moz-column-count:3;
		-webkit-column-count:3;
		column-count:3;
		margin-bottom: 20px;
		font-size: 1em;
		color: #444;
	}

	.keySkills ul li {
		margin-bottom: 3px;
	}

	@media all and (min-width: 602px) and (max-width: 800px) {
		#headshot {
			display: none;
		}

		.keySkills {
			-moz-column-count:2;
			-webkit-column-count:2;
			column-count:2;
		}
	}

	@media all and (max-width: 601px) {
		#cv {
			width: 95%;
			margin: 10px auto;
			min-width: 280px;
		}

		#headshot {
			display: none;
		}

		#name, #contactDetails {
			float: none;
			width: 100%;
			text-align: center;
		}

		.sectionTitle, .sectionContent {
			float: none;
			width: 100%;
		}

		.sectionTitle {
			margin-left: -2px;
			font-size: 1.25em;
		}

		.keySkills {
			-moz-column-count:2;
			-webkit-column-count:2;
			column-count:2;
		}
	}

	@media all and (max-width: 480px) {
		.mainDetails {
			padding: 15px 15px;
		}

		section {
			padding: 15px 0 0;
		}

		#mainArea {
			padding: 0 25px;
		}


		.keySkills {
			-moz-column-count:1;
			-webkit-column-count:1;
			column-count:1;
		}

		#name h1 {
			line-height: .8em;
			margin-bottom: 4px;
		}
	}

	@media print {
		#cv {
			width: 100%;
		}
	}

	@-webkit-keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@-webkit-keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@-moz-keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@-moz-keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	@keyframes reset {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		40% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
}
</style>
