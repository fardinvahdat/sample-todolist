<template>
  <form class="note-section" @submit.enter.prevent="noteHandler">
    <NoteIcon />
    <input type="text" v-model="note" placeholder="متن خود را وارد کنید ..." />
    <PlusIcon v-if="note !== ''" @click="noteHandler" />
  </form>
</template>

<script setup>
import { useNoteStore } from "../stores/notes";
import uuid4 from "uuid4";
import NoteIcon from "@/assets/icons/noteIcon.vue";
import PlusIcon from "@/assets/icons/PlusIcon.vue";
import { ref } from "vue";
const note = ref("");
const notes = useNoteStore();
const noteHandler = () => {
  if (note.value !== "") {
    notes.noteList.push({
      isChecked: false,
      title: note.value,
      id: uuid4(),
      isDeleteIconVisible:false
    });
    note.value = "";
  }
};
</script>
