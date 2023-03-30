import { ref, watch, computed } from "vue";
import { defineStore } from "pinia";

export const useNoteStore = defineStore("note", () => {
  const noteList = ref([]);
  const sort = ref(0);
  if (localStorage.getItem("noteList")) {
    setTimeout(() => {
      noteList.value = JSON.parse(localStorage.getItem("noteList"));
    }, 100);
  }

  const unCompletedNotes = computed(() =>
    noteList.value.filter((note) => note.isChecked == true)
  );
  const completedNotes = computed(() =>
    noteList.value.filter((note) => note.isChecked == false)
  );

  watch(
    noteList,
    (noteValue) => {
      localStorage.setItem("noteList", JSON.stringify(noteValue));
    },
    {
      deep: true,
    }
  );
  return { noteList, sort, unCompletedNotes,completedNotes };
});
