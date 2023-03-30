<template>
  <div class="d-flex justify-content-between align-items-center note-footer">
    <div class="uncompleted-notes">
      <span>{{ notes.unCompletedNotes.length }}</span> تسک مانده
    </div>
    <div class="sort-options d-flex">
      <a
        href="javascript:void(0)"
        v-for="option in sortOptions"
        :key="option.type"
        :class="option.isActive && 'active'"
        @click="setSortType(option)"
        >{{ option.title }}</a
      >
    </div>
  </div>
</template>
<script setup>
import { useNoteStore } from "../stores/notes";
import { ref } from "vue";

const notes = useNoteStore();
const sortOptions = ref([
  {
    type: 0,
    title: "همه",
    isActive: true,
  },
  {
    type: 1,
    title: "تکمیل‌نشده‌ها",
    isActive: false,
  },
  {
    type: 2,
    title: "تکمیل‌شده‌ها",
    isActive: false,
  },
]);
const setSortType = (sort) => {
  notes.sort = sort.type;
  sortOptions.value.map((note) => {
    note.isActive = false;
  });
  sort.isActive = true;
};
</script>
<style scoped>
.note-footer {
    padding-top: 5px;
  border-top: 1px solid #9999998b;
}
.uncompleted-notes {
  color: #999999;
  font-weight: 400;
  font-size: 12px;
}
.uncompleted-notes span {
  font-weight: 400;
  font-size: 12px;
  color: #000;
}
.sort-options {
  font-size: 12px;
  gap: 12px;
}
.sort-options a {
  color: #999999;
}
.sort-options a.active {
  color: #000;
}
</style>