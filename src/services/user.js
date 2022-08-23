import client from "../clinent";

class UserService {
  login(payload) {
    return client.post("users/api/auth/obtain/token/", payload);
  }
  register(payload) {
    return client.post("users/api/auth/register/", payload);
  }
  userDetail() {
    return client.get("users/api/auth/me/");
  }
}

export default new UserService();