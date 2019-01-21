import CodeMirror from "codemirror/lib/codemirror";
import htmlMixedMode from "codemirror/mode/htmlmixed/htmlmixed.js";

export default {
  name: "html-editor",
  props: {
    initialContent: String
  },
  mounted() {
    CodeMirror.keyMap.default["Shift-Tab"] = "indentLess";
    if (this.$refs.textareaContainer.firstChild) {
      this.$refs.textareaContainer.removeChild(
        this.$refs.textareaContainer.firstChild
      );
    }
    this.editor = CodeMirror(
      this.$refs.textareaContainer,
      this.codeMirrorOptions
    );
    if (this.initialContent) {
      this.setContent(this.initialContent);
    }
    this.editor.on("change", () => {
      this.$emit("change", this.editor.getValue());
    });
  },
  data() {
    return {
      editor: null,
      mode: htmlMixedMode,
      codeMirrorOptions: {
        mode: "htmlmixed",
        lineNumbers: true
      }
    };
  },
  methods: {
    setContent(content) {
      if (this.editor) {
        this.editor.setValue(content);
      }
    },
    getContent() {
      return this.editor.getValue();
    }
  }
};
