import { deleteTemplate } from "../../modules/ses";
import TemplateDetails from "../../models/TemplateDetails";

export default {
  name: "template-details",
  props: {
    loading: Boolean,
    template: { type: TemplateDetails, default: () => new TemplateDetails() }
  },
  data() {
    return {
      templateData: {},
      confirmDelete: false,
      showTemplateData: false
    };
  },
  watch: {
    template() {
      if (this.template) {
        this.getTemplateData();
      }
    }
  },
  methods: {
    getTemplateData() {
      this.templateData = {};
      const content =
        this.template.mailSubject +
        this.template.mailHtml +
        this.template.mailText;
      const simpleTemplateDataRegExp = new RegExp("{{(((?![{}]).)+)}}", "g");
      let match = simpleTemplateDataRegExp.exec(content);
      let listTemplateData = this.templateData;
      while (match !== null) {
        if (match[1].startsWith("#each")) {
          this.templateData[match[1].substring(6)] = [{}];
          listTemplateData = this.templateData[match[1].substring(6)][0];
        } else if (match[1] === "/each") {
          listTemplateData = this.templateData;
        } else if (
          match[1] !== "/if" &&
          match[1] !== "else" &&
          !match[1].startsWith("#* inline") &&
          !match[1].startsWith("/inline")
        ) {
          const nestedKeys = match[1].replace("#if ", "").split(".");
          let nestedTemplateData = listTemplateData;
          nestedKeys.forEach((key, index) => {
            if (index === nestedKeys.length - 1) {
              nestedTemplateData[key] = nestedTemplateData[key] || "";
            } else {
              nestedTemplateData[key] = nestedTemplateData[key] || {};
              nestedTemplateData = nestedTemplateData[key];
            }
          });
        }
        match = simpleTemplateDataRegExp.exec(content);
      }
    },
    copyTemplateData() {
      if (!navigator.clipboard) {
        this.$emit(
          "showMessage",
          "Failed to copy template data - browser not supported."
        );
        return;
      }
      navigator.clipboard
        .writeText(JSON.stringify(this.templateData))
        .then(() => {
          this.$emit("showMessage", "Template data copied.");
        });
    },
    remove() {
      this.confirmDelete = false;
      deleteTemplate(this.template.name).then(
        () => {
          this.$emit("showMessage", "Template deleted.");
          this.$emit("delete");
        },
        err => {
          this.$emit("showMessage", err);
        }
      );
    }
  }
};
