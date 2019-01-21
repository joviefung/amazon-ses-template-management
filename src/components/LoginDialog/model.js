import { createSES, regions } from "../../modules/ses";

export default {
  name: "login-dialog",
  props: {
    value: Boolean
  },
  created() {
    if (localStorage.amazonSESTemplateManagement) {
      const { accessKeyId, secretAccessKey, region } = JSON.parse(
        localStorage.amazonSESTemplateManagement
      );
      this.accessKeyId = accessKeyId;
      this.secretAccessKey = secretAccessKey;
      this.region = region;
      this.rememberAccount = true;
    }
  },
  data() {
    return {
      accessKeyId: "",
      secretAccessKey: "",
      regions,
      region: "",
      rememberAccount: false
    };
  },
  methods: {
    login() {
      if (this.rememberAccount) {
        const storageValue = JSON.stringify({
          accessKeyId: this.accessKeyId,
          secretAccessKey: this.secretAccessKey,
          region: this.region
        });
        localStorage.setItem("amazonSESTemplateManagement", storageValue);
      } else {
        localStorage.removeItem("amazonSESTemplateManagement");
      }
      createSES(this.accessKeyId, this.secretAccessKey, this.region);
      this.$emit("input", false);
    }
  }
};
