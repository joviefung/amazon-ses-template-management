import { getTemplate, deleteTemplate } from "../../modules/ses";
import TemplateDetails from "../../models/TemplateDetails";

export default {
  name: "template-details",
  props: {
    templateName: String
  },
  data() {
    return {
      template: new TemplateDetails(),
      confirmDelete: false,
      loading: false
    };
  },
  watch: {
    templateName() {
      this.refresh();
    }
  },
  methods: {
    refresh() {
      this.loading = true;
      getTemplate(this.templateName).then(
        template => {
          this.template = template;
          this.loading = false;
        },
        err => {
          this.$emit("showMessage", err);
          this.loading = false;
        }
      );
    },
    remove() {
      this.confirmDelete = false;
      deleteTemplate(this.templateName).then(
        () => {
          this.$emit("showMessage", "Template deleted.");
          this.$emit("change");
        },
        err => {
          this.$emit("showMessage", err);
        }
      );
    }
  }
};
