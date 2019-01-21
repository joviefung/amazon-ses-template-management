import { createTemplate, updateTemplate } from "../../modules/ses";
import TemplateDetails from "../../models/TemplateDetails";
import HtmlEditor from "../HtmlEditor";

export default {
  name: "edit-template-details",
  components: {
    HtmlEditor
  },
  props: {
    isVisible: Boolean,
    template: TemplateDetails
  },
  data() {
    return {
      updatedTemplate: new TemplateDetails()
    };
  },
  computed: {
    isAdding() {
      return !this.template;
    }
  },
  watch: {
    isVisible() {
      if (this.isVisible) {
        if (this.template) {
          this.updatedTemplate = Object.assign(
            new TemplateDetails(),
            this.template
          );
        } else {
          this.updatedTemplate = new TemplateDetails();
        }
        if (this.$refs.htmlEditor) {
          this.$refs.htmlEditor.setContent(this.updatedTemplate.mailHtml);
        }
      }
    }
  },
  methods: {
    save() {
      if (this.isAdding) {
        createTemplate(this.updatedTemplate).then(
          () => {
            this.$emit("showMessage", "Template added.");
            this.$emit("change");
            this.$emit("cancel");
          },
          err => {
            this.$emit("showMessage", err);
          }
        );
      } else {
        updateTemplate(this.updatedTemplate).then(
          () => {
            this.$emit("showMessage", "Template updated.");
            this.$emit("change");
            this.$emit("cancel");
          },
          err => {
            this.$emit("showMessage", err);
          }
        );
      }
    }
  }
};
