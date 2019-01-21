import Vue from "vue";
import App from "./App";
import {
  MdButton,
  MdList,
  MdIcon,
  MdCard,
  MdField,
  MdSnackbar,
  MdDialog,
  MdProgress,
  MdMenu,
  MdCheckbox
} from "vue-material/dist/components";
import "vue-material/dist/vue-material.min.css";
import "codemirror/mode/htmlmixed/htmlmixed.js";

Vue.config.productionTip = false;

Vue.use(MdButton);
Vue.use(MdList);
Vue.use(MdIcon);
Vue.use(MdCard);
Vue.use(MdField);
Vue.use(MdSnackbar);
Vue.use(MdDialog);
Vue.use(MdProgress);
Vue.use(MdMenu);
Vue.use(MdCheckbox);

new Vue({
  render: h => h(App)
}).$mount("#app");
