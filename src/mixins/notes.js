export const pinned = {
    computed: {
        pinned() {
            return this.$store.state.notes.filter(note => {
                return note.pinned == true && note.archived == false;
            });
        }
    }
}
export const unpinned = {
    computed: {
        unpinned() {
            return this.$store.state.notes.filter(note => {
                return note.pinned == false && note.archived == false;
            });
        }
    }
}
export const archived = {
    computed: {
        archived() {
            return this.$store.state.notes.filter(note => {
                return note.archived == true && note.pinned == false;
            });
        }
    }
}