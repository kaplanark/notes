<template>
  <div id="notes">
    <v-container fluid>
      <v-subheader v-if="pinned.length > 0" v-text="subheader.pinned"></v-subheader>
      <PinnedCard :pinned="pinned"></PinnedCard>
      <v-subheader v-if="pinned.length > 0" v-text="subheader.other"></v-subheader>
      <UnpinnedCard :unpinned="unpinned"></UnpinnedCard>
      <AddNote></AddNote>
      <UpdateNote></UpdateNote>
      <CategoryDialog></CategoryDialog>
    </v-container>
    <Navigation></Navigation>
  </div>
</template>
<script>
import UnpinnedCard from '../components/UnpinnedCard.vue';
import PinnedCard from '../components/PinnedCard.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import AddNote from '@/components/AddNote.vue';
import CategoryDialog from '@/components/CategoryDialog.vue';

import { pinned, unpinned } from '@/mixins/notes.js';
import Navigation from '@/components/Navigation.vue';

export default {
  mixins: [pinned, unpinned],
  name: 'Notes',
  data() {
    return {
      subheader: {
        other: 'Other',
        pinned: 'Pinned',
      },
    }
  },
  components: { UnpinnedCard, PinnedCard, UpdateNote, AddNote, CategoryDialog, Navigation },
  beforeCreate() {
    this.$store.dispatch('getNotes');
  },
}
</script>
<style>
#notes {
  position: relative;
  height: 100%;
}

.pinned {
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: 4px;
}

.note-col {
  display: block;
  margin-bottom: 24px;
}

.note-card {
  overflow: hidden;
}

.tool-buttons {
  opacity: 0;
  transform: translateY(12px);
  transition: all 0.3s ease-in-out;
}

.note-card:hover .tool-buttons {
  opacity: 1;
  transform: translateY(0px);
}

.show-content {
  cursor: pointer;
}

.notes-wrapper {
  column-count: 5;
  -webkit-column-count: 5;
  -moz-column-count: 4;
  padding-bottom: 72px;
}

@media (max-width:1400px) {
  .notes-wrapper {
    column-count: 4;
    -webkit-column-count: 4;
    -moz-column-count: 4;
  }
}

@media (max-width:992px) {
  .notes-wrapper {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
  }
}

@media (max-width:650px) {
  .notes-wrapper {
    column-count: 1;
    -webkit-column-count: 1;
    -moz-column-count: 1;
  }
}
</style>