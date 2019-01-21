import { getAllTemplates } from "../../modules/ses";

export default {
  name: "template-list",
  data() {
    return {
      templates: [],
      loading: false
    };
  },
  created() {
    this.refresh(true);
  },
  methods: {
    refresh(isSelectDefaultTemplate = false) {
      this.loading = true;
      getAllTemplates().then(
        templates => {
          this.templates = templates;
          if (isSelectDefaultTemplate && this.templates.length) {
            this.$emit("selectTemplate", this.templates[0].name);
          }
          this.loading = false;
        },
        err => {
          this.$emit("showMessage", err);
          this.loading = false;
        }
      );
    }
  }
};
