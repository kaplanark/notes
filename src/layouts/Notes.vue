<template>
  <div>
    <v-subheader v-if="pinned.length > 0" v-text="subheader.pinned"></v-subheader>
    <PinnedCard :pinned="pinned"></PinnedCard>
    <v-subheader v-if="pinned.length > 0" v-text="subheader.other"></v-subheader>
    <UnpinnedCard :unpinned="unpinned"></UnpinnedCard>
    <AddNote></AddNote>
    <UpdateNote></UpdateNote>
    <CategoryDialog></CategoryDialog>
  </div>
</template>
<script>
import UnpinnedCard from '../components/UnpinnedCard.vue';
import PinnedCard from '../components/PinnedCard.vue';
import UpdateNote from '@/components/UpdateNote.vue';
import AddNote from '@/components/AddNote.vue';
import CategoryDialog from '@/components/CategoryDialog.vue';

import { pinned, unpinned } from '@/mixins/notes.js';

export default {
  mixins: [pinned, unpinned],
  data() {
    return {
      subheader: {
        other: 'Other',
        pinned: 'Pinned',
      }
    }
  },
  components: { UnpinnedCard, PinnedCard, UpdateNote, AddNote, CategoryDialog },
}
</script>
<style>
.pinned {
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  border-radius: 4px;
}

.note-card {
  overflow: hidden;
}

.note-col {
  display: block;
  margin-bottom: 24px;
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
  column-count: 4;
  -webkit-column-count: 4;
  -moz-column-count: 4;
  margin-bottom: 32px;
}

@media (max-width:1400px) {
  .notes-wrapper {
    column-count: 3;
    -webkit-column-count: 3;
    -moz-column-count: 3;
  }
}

@media (max-width:992px) {
  .notes-wrapper {
    column-count: 2;
    -webkit-column-count: 2;
    -moz-column-count: 2;
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