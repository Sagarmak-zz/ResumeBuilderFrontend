<template lang="html">
  <div class="dashboard">
    <div class="box">
      <div class="columns">

        <div class="column is-4">
          <sidebar></sidebar>
        </div>

        <div class="column is-8">
          <resume-template1></resume-template1>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import ResumeTemplate1 from '@/resume-templates/ResumeTemplate1';
import ResumeTemplate2 from '@/resume-templates/ResumeTemplate2';


export default {

  name: 'home',

  components: {
    Sidebar,
    ResumeTemplate1,
    ResumeTemplate2
  }
}
</script>

<style lang="css">

</style>
