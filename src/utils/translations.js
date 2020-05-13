import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

const translations = {
  en: {
    controlButtons: {
      add: "Add",
      adding: "Adding...",
      edit: "Edit",
      delete: "Delete",
      reset: "Reset",
      placeholder: "Type todo here...",
    },
    themeText: {
      darkMode: "Dark {mode}",
      lightMode: "Light {mode}",
      fontSizeDefault: "Default",
      fontSizeLarge: "Large",
    },
    aboutPageText: "This is an about page.",
    login: "Login",
  },
  kr: {
    controlButtons: {
      add: "더하다",
      adding: "더하다 ...",
      edit: "변화",
      delete: "없애다",
      reset: "초기화",
      placeholder: "여기에 입력 ...",
    },
    themeText: {
      darkMode: "Dark 색깔",
      lightMode: "Light 색깔",
      fontSizeDefault: "표준",
      fontSizeLarge: "큰",
    },
    aboutPageText: "정보 페이지입니다.",
    login: "Login",
  },
};

export default new VueI18n({
  locale: "en",
  messages: translations,
});
