export default class TemplateDetails {
  name = "";
  mailSubject = "";
  mailText = "";
  mailHtml = "";

  constructor(data) {
    this.name = data && data.TemplateName ? data.TemplateName : "";
    this.mailSubject = data && data.SubjectPart ? data.SubjectPart : "";
    this.mailText = data && data.TextPart ? data.TextPart : "";
    this.mailHtml = data && data.HtmlPart ? data.HtmlPart : "";
  }

  get amazonSESTemplate() {
    return {
      TemplateName: this.name,
      SubjectPart: this.mailSubject,
      TextPart: this.mailText,
      HtmlPart: this.mailHtml
    };
  }
}
