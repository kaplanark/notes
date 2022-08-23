import client from "../clinent";

class NoteService {
  getAllNote() {
    return client.get("/notes/api/");
  }
  newNote(data) {
    return client.post("/notes/api/",data);
  }
  updateNote(id) {
    return client.put(`/notes/api/${id}`);
  }
  deleteNote(id) {
    return client.get(`/notes/api/${id}`);
  }
}

export default new NoteService();