import { getAllTemplates, getTemplate } from "../../modules/ses";
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
      loadingTemplates: false,
      loadingTemplateDetails: false,
      showLoginDialog: true,
      templateListPageSplit: 30,
      showEditTemplate: false,
      showSnackbar: false,
      message: "",
      templates: [],
      selectedTemplateName: "",
      selectedTemplate: null,
      editingTemplate: null
    };
  },
  watch: {
    showLoginDialog() {
      if (!this.showLoginDialog) {
        this.refresh();
      }
    },
    message() {
      this.showSnackbar = true;
    },
    selectedTemplateName() {
      this.refreshTemplateDetails();
    }
  },
  methods: {
    addTemplate(newTemplateName) {
      this.refreshTemplates();
      this.selectedTemplateName = newTemplateName;
    },
    deleteTemplate() {
      const index = this.templates.findIndex(
        template => template.name === this.selectedTemplateName
      );
      this.templates.splice(index, 1);
      if (this.templates.length) {
        this.selectedTemplateName = this.templates[0].name;
      }
    },
    async refresh() {
      await this.refreshTemplates();
      await this.refreshTemplateDetails();
    },
    refreshTemplates() {
      this.loadingTemplates = true;
      return getAllTemplates()
        .then(
          templates => {
            this.templates = templates.sort(
              (a, b) => b.createdDatetime - a.createdDatetime
            );
            if (!this.selectedTemplateName && this.templates.length) {
              this.selectedTemplateName = this.templates[0].name;
            }
          },
          err => {
            this.$emit("showMessage", err);
          }
        )
        .finally(() => {
          this.loadingTemplates = false;
        });
    },
    refreshTemplateDetails() {
      this.loadingTemplateDetails = true;
      return getTemplate(this.selectedTemplateName)
        .then(
          template => {
            this.selectedTemplate = template;
          },
          err => {
            this.$emit("showMessage", err);
          }
        )
        .finally(() => {
          this.loadingTemplateDetails = false;
        });
    }
  }
};
