import request from "@/utils/request";
export default {
  calendar: () => request.get("/calendar"),
};
