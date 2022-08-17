<template>
  <div>
    <NoteCard></NoteCard>
    <AddNote></AddNote>
    <UpdateNote></UpdateNote>
    <CategoryDialog></CategoryDialog>
  </div>
</template>
<script>
import NoteCard from '../components/NoteCard.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import AddNote from '@/components/AddNote.vue';
import CategoryDialog from '@/components/CategoryDialog.vue';
export default {
  data() {
    return {
    };
  },
  components: { NoteCard, UpdateNote, AddNote, CategoryDialog },
}
</script>