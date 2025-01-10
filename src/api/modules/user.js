import request from "@/utils/request";
export default {
  getUser: () => request.get("/v0/me"),
};
