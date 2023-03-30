<template>
  <div
    class="note-list-actions d-flex align-items-center justify-content-between"
  >
    <a
      class="d-flex align-items-center"
      href="javascript:void(0)"
      @click="completeTasksHandler"
    >
      <CheckIcon />
      تکمیل همه تسک‌ها
    </a>
    <a class="" href="javascript:void(0)" @click="deleteCompletedTasksHandler">
      حذف تکمیل‌شده‌ها
    </a>
  </div>
</template>

<script setup>
import { useNoteStore } from "../stores/notes";
import CheckIcon from "@/assets/icons/CheckIcon.vue";
import { ref } from "vue";
const notes = useNoteStore();
const completeTasksHandler = () => {
  notes.noteList.map((item) => {
    item.isChecked = true;
  });
};
const deleteCompletedTasksHandler = () => {
  notes.noteList = notes.noteList.filter((item) => item.isChecked !== true);
};
</script>
