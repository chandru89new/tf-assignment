import Vue from "vue";
import moment from "moment";

Vue.filter("formatTimeSince", (dateString) => {
  return moment(dateString).fromNow();
});
