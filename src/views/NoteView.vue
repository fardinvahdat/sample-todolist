<template>
  <section
    class="note-template d-flex align-items-center justify-content-center"
  >
    <div class="wrapper">
      <NoteBox />
      <NotelistActions />
      <NoteList />
      <NoteFooter />
    </div>
  </section>
</template>
<script setup>
import NoteBox from "../components/NoteBox.vue";
import NotelistActions from "../components/NotelistActions.vue";
import NoteList from "../components/NoteList.vue";
import NoteFooter from "../components/NoteFooter.vue";
</script>
