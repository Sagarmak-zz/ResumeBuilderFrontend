<template>
    <body>
        <div class="page">

            <div class="section row">
                <h1 class="col">{{ resume.info.name }}</h1>
                <div class="contact-info col-right">
                    <div>{{ resume.info.phone }}</div>
                    <div>{{ resume.info.email }}</div>
                    <div>{{ resume.info.address }}</div>
                </div>
            </div>

            <div class="section row" v-if="resume.degree.length">
                <h2 class="col">Education</h2>
                <div class="section-text col-right" v-for="(item,i) in resume.degree" :key="i">
                    <h3>{{ item.name }}</h3>
                    <div>{{ item.institute }}</div>
                    <div class="row">
                        <div class="col light">{{ item.score }}</div>
                        <div class="col-right light">{{ item.year }}</div>
                    </div>
                </div>
            </div>

            <div class="section row" v-if="resume.internship.length">
                <h2 class="col">Experience</h2>
                <div class="section-text col-right" v-for="(item,i) in resume.internship" :key="i">
                    <div class="row">
                        <div class="col">
                            <h3>{{ item.name }}</h3>
                        </div>
                    </div>
                    <div class="row subsection">
                        <div class="emph col">Mentor: {{ item.guide }}</div>
                        <div class="col-right light">{{ item.start }} - {{ item.end }}</div>
                    </div>
                    <div>{{ item.description }}</div>
                </div>
            </div>

            <div class="section row" v-if="resume.hobby.length">
                <h2 class="col">Interests</h2>
                <div class="section-text col-right row">
                    <ul class="skills">
                        <li v-for="(item,i) in resume.hobby" :key="i">
                                {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="section row" v-if="resume.skill.length">
                <h2 class="col">Skills</h2>
                <div class="section-text col-right row">
                    <ul class="skills">
                        <li v-for="(item,i) in resume.skill" :key="i">
                            {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>

            <div class="section row" v-if="resume.award.length">
                <h2 class="col">Achievements</h2>
                <div class="section-text col-right row">
                    <ul class="skills">
                        <li v-for="(item,i) in resume.award" :key="i">
                                {{ item.name }}
                        </li>
                    </ul>
                </div>
            </div>

            </div>
        </div>
    </body>
</template>

<script>
    export default {
        name: 'resume4',
        props: ['resume'],
    }
</script>

<style scoped>

body {
	display: flex;
	margin: 0;
	padding: 0;
	background-color: #fff;
	font-size: 12px;
	font-family: 'Verdana', sans-serif;
	-webkit-font-smoothing: subpixel-antialiased;
}

* {
	box-sizing: border-box;
    -moz-box-sizing: border-box;
}

h1 {
	font-weight: 500;
    font-size: 50px;
    color:dimgrey;
    padding: 30px;
    border-radius:2px;
    font-family: 'Georgia', serif;
}

h2 {
	color: dimgrey;
	width: 150px;
	font-size: 25px;
	padding-left: 20px;
	font-weight:400;
	font-family: 'Georgia', serif;
}

h3 {
	font-size: 18px;
	font-weight: bold;
	margin-bottom: 0;
	line-height: 28px;
	font-family: 'Merriweather', serif;
}

h2 {
	margin-top: 5px
}

.section {
	border-bottom: 1px solid #ddd;
	padding: 15px 0 15px;
    padding-bottom: 50px;
}

.section:last-child {
	border: none
}

.section-text {
	width: 80%;
	font-size: 18px;
	line-height: 24px;
	margin: 10px 0 10px;
	padding: 0 10px;
}

.subsection {
	margin: 10px 0 5px
}

.desc {
	font-size: 16px; font-family: 'Source Sans Pro', sans-serif; color:#444;
}

.contact-info {
	font-size: 16px;
    text-align: right;
    padding: 20px;
}

.light {
	color: #aaa;letter-spacing:1px;
	font-size: 14px;
	line-height:28px;
	font-family: 'Source Sans Pro', sans-serif;
	text-transform:uppercase;
}

ul {
  	padding-left:15px;
}

ul.skills {
	float:left;
	/* width:30%; */
	padding-left:0px;
	margin: 0 20px 0 0;
}

ul.skills li {
	list-style: none;
	font-size:16px;
	margin-bottom:10px;
}

ul.skills li:last-child {
  	margin:0;
}

/*
 Float Rules
*/

.row:before, .row:after {
	content: "";
	display: table;
}

.row:after {
	clear: both
}

.col {
	float: left
}

.col-right {
	float: right
}

/*
 Page Rules
*/

.page {
	min-height: 29.7cm;
	margin: auto;
}

@media print {
    .page { margin: 0;
            border: initial;
            border-radius: initial;
            width: initial;
            min-height: initial;
            box-shadow: initial;
            background: initial;
            page-break-after: always;
    }
    .page-break{
      page-break-before: always;
      padding-top:30px;
    }

    body { font-size: 12pt;}
    h1{
      font-size: 23pt;
    }

    h2{
      font-size:10pt;
      width: 3cm;
      padding-left: 10px;
    }

    h3 { font-size: 10pt; line-height:11pt}

    .section-text { font-size: 9pt; line-height: 14pt; }

    .light { font-size: 7.5pt; line-height:12pt; color:#ddd; }

    .page { width: 21cm }

    ul {margin:5px 0 0}

    .section { padding: 5px 0 8px }

    .section-text { width: 15cm; margin: 5px 0 5px;}

    .subsection { margin: 5px 0 0 }

    .desc { font-size: 9pt }

    .contact-info { font-size: 9pt}

    ul.skills{margin: 0 10px 0 0;}

    ul.skills li{ font-size: 9pt; margin-bottom:0}

}

</style>
