<template>
  <div>
    <NoteCard></NoteCard>
    <AddNote></AddNote>
    <UpdateNote></UpdateNote>
    <EditColors></EditColors>
  </div>
</template>
<script>
import NoteCard from '../components/NoteCard.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import AddNote from '@/components/AddNote.vue';
import EditColors from '@/components/EditColors.vue';
export default {
  data() {
    return {
    };
  },
  components: { NoteCard, UpdateNote, AddNote, EditColors },
}
</script>