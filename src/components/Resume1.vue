<template>
  <div id="wrap">
    <article>

      <header v-if="resume.info">
        <!-- force flexbox to keep name on a single line -->
        <h1><strong>{{ resume.info.name }}</strong></h1>
        <p>{{ resume.info.profession }}</p>
        <p>{{ resume.info.dob }}</p>
        <p>{{ resume.info.email }}</p>
        <p>{{ resume.info.address }}</p>

      </header>

      <div class="one-col">

        <section>
          <h2>EXPERIENCE</h2>
          <ul v-for="(item,i) in resume.internship" :key="i">
            <h3><strong>{{ item.name }}</strong>{{ item.start }} - {{ item.end }}</h3>
            <li>{{ item.description }}</li>
          </ul>
        </section>

        <section>
          <h2>POSITION OF RESPONSIBILITY</h2>
          <ul v-for="(item,i) in resume.position" :key="i">
            <li>{{ item.name }}</li>
          </ul>
        </section>

        <section>
          <h2>ACHIEVEMENTS</h2>
          <ul v-for="(item,i) in resume.award" :key="i">
            <li>{{ item.name }}</li>
          </ul>
        </section>

        <div class="two-col">
          <section>
            <h2>EDUCATION</h2>

            <ol v-for="(item,i) in resume.degree" :key="i">
              <li><strong>{{ item.name }}</strong> {{ item.institute }} </li>
            </ol>
          </section>

          <section>
            <h2>SKILLS</h2>

            <ul v-for="(item,i) in resume.skill" :key="i" >
              <li>{{ item.name }}</li>
            </ul>
          </section>
        </div>

      </div>

    </article>
  </div>
</template>

<script>
export default {
  name: 'resume-template2',
  props: ['resume'],
}
</script>


<style scoped>

#wrap {
  /*position: fixed;
  bottom: 0;
  max-width: 60%;
  overflow-y: scroll;*/
  background-color: white;
}

article, .two-col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header {
  flex: 1;
  padding: 0 3%;
  border-right: 1px solid silver;
  margin-right: 3%;
}

section {
  margin-bottom: 40px;
}

.one-col {
  flex: 4;
}

.two-col section {
  flex: 1;
}

.two-col h2 {
  margin-top: 0px;
}


/* example layout mediaquery */
@media only screen and (max-width: 768px) {
  article, .two-col {
    flex-direction: column;
  }
  header {
    border-right: none;
    margin: 0;
    padding: 0;
  }
}

/**********
CSS Type & Design - "The simple stuff"
**********/

h1,h2,h3 {
  margin-top: 10px;
  font-weight: 300;
}

h1 {
  font-size: 1.2em;
  text-transform: uppercase;
}

h2 {
  font-size: .9em;
  letter-spacing: .3em;
  font-weight: 700;
  padding: 5px 10px;
  color: 	#A9A9A9;
  background-color: #ededed;
}

h3 {
  padding-right: .5em;
  font-weight: 600;
  font-size: .8em;
  /*  flexbox is handy here too  */
  display: flex;
  justify-content: space-between;
  align-items: center
}

h3 strong {
  font-size: 1.3em
}

p,li {
  font-family: Georgia;
  margin-top: 5px;
  padding: 0px 3px;
}

ol,ul {
  list-style-type: none;
  padding: 0;
  font-size: .85em;
  line-height: 1.5;
}

li {
  margin-bottom: 0.7em;
}

.two-col section:first-child h2 {
  margin-right: 2%;
}

.two-col ol strong {
  display: block;
}

/* example iPhone type design tweaking for single columns */

/*
@media only screen and (max-width: 768px) {
A fun CSS hack to convert list of skills to comma separated paragraph.

.two-col ul li {display: inline;}
.two-col ul li:after {content: ","}
.two-col ul li:last-child:after {content: "."}


.two-col ol li {
display: flex;
justify-content: space-between;
margin-bottom: .2em;
}

.two-col li {
font-size: .85em;
}

h1 {
text-align: center;
font-size: 3em;
margin-bottom: 0;
}

h3 {
display: block;
text-align: center;
}

h3 strong {
display: block;
margin-top: .5em;
}

h2 {
background-color: transparent;
color: silver;
font-weight: 300;
font-size: 2em;
letter-spacing: 0;
text-align: center;
margin-bottom: 0;
}
} */

</style>
