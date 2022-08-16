<template>
  <div>
    <NoteCard></NoteCard>
    <NewNote></NewNote>
    <ShowNote></ShowNote>
    <EditColors></EditColors>
  </div>
</template>
<script>
import NoteCard from '../components/NoteCard.vue';
import ShowNote from '@/components/ShowNote.vue';
import NewNote from '@/components/NewNote.vue';
import EditColors from '@/components/EditColors.vue';
export default {
  data() {
    return {
    };
  },
  components: { NoteCard, ShowNote, NewNote, EditColors },
}
</script>