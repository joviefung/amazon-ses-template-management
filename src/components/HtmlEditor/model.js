import CodeMirror from "codemirror/lib/codemirror";

export default {
  name: "html-editor",
  data() {
    return {
      editor: null,
      codeMirrorOptions: {
        mode: "htmlmixed",
        lineNumbers: true
      }
    };
  },
  methods: {
    setContent(content) {
      if (!this.editor) {
        if (this.$refs.textareaContainer.firstChild) {
          this.$refs.textareaContainer.removeChild(
            this.$refs.textareaContainer.firstChild
          );
        }
        this.editor = CodeMirror(
          this.$refs.textareaContainer,
          this.codeMirrorOptions
        );
        this.editor.on("change", () => {
          this.$emit("change", this.editor.getValue());
        });
      }
      this.editor.setValue(content);
    },
    getContent() {
      return this.editor.getValue();
    }
  }
};
