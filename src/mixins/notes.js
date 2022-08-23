export const pinned = {
    computed: {
        pinned() {
            return this.$store.state.notes.filter(note => {
                return note.pinned == true && note.archived == false && note.trashed == false;
            });
        }
    }
}
export const unpinned = {
    computed: {
        unpinned() {
            return this.$store.state.notes.filter(note => {
                return note.pinned == false && note.archived == false && note.trashed == false;
            });
        }
    }
}
export const archived = {
    computed: {
        archived() {
            return this.$store.state.notes.filter(note => {
                return note.archived == true && note.pinned == false && note.trashed == false;
            });
        }
    }
}
export const trashed = {
    computed: {
        trash() {
            return this.$store.state.notes.filter(note => {
                return note.trashed == true && note.pinned == false && note.archived == false;
            });
        }
    }
}