<template>
  <div class="note-list">
    <label
      v-for="note in noteList"
      :key="note.id"
      @mouseover="note.isDeleteIconVisible = true"
      @mouseleave="note.isDeleteIconVisible = false"
      >{{ note.title }}
      <input
        type="checkbox"
        :checked="note.isChecked"
        @change="changeIsChecked(note)"
      />
      <span class="checkmark"></span>
      <RemoveIcon
        v-if="note.isDeleteIconVisible"
        @click="removeNote(note.id)"
      />
    </label>
    <div
      class="empty-note-list justify-content-center"
      v-if="noteList.length == 0"
    >
      یادداشت‌ای وجود ندارد
    </div>
  </div>
</template>

<script setup>
import { useNoteStore } from "../stores/notes";
import uuid4 from "uuid4";
import NoteIcon from "@/assets/icons/noteIcon.vue";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import RemoveIcon from "@/assets/icons/RemoveIcon.vue";
import { ref, computed } from "vue";
const note = ref("");
const notes = useNoteStore();
const noteList = computed(() => {
  if (notes.sort == 0) {
    return notes.noteList;
  } else if (notes.sort == 1) {
    return notes.unCompletedNotes;
  } else if (notes.sort == 2) {
    return notes.completedNotes;
  }
});
const changeIsChecked = (note) => {
  note.isChecked = !note.isChecked;
};
const removeNote = (id) => {
  notes.noteList = notes.noteList.filter((item) => item.id !== id);
};
</script>
<style scoped>
.empty-note-list {
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #c7c7c7;
}
</style>