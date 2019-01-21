import TemplateList from "../TemplateList";
import TemplateDetails from "../TemplateDetails";
import EditTemplateDetails from "../EditTemplateDetails";
import LoginDialog from "../LoginDialog";

export default {
  name: "page-layout",
  components: {
    TemplateList,
    TemplateDetails,
    EditTemplateDetails,
    LoginDialog
  },
  data() {
    return {
      showLoginDialog: true,
      templateListPageSplit: 30,
      showEditTemplate: false,
      showSnackbar: false,
      message: "",
      selectedTemplateName: "",
      selectedTemplate: null
    };
  },
  watch: {
    message() {
      this.showSnackbar = true;
    }
  },
  methods: {
    refreshTemplate(isSelectDefaultTemplate = false) {
      if (this.$refs.templateList) {
        this.$refs.templateList.refresh();
      }
      if (!isSelectDefaultTemplate) {
        if (this.$refs.templateDetails) {
          this.$refs.templateDetails.refresh();
        }
      }
    }
  }
};
