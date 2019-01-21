export default class Template {
  name = "";
  createdDatetime = new Date();

  constructor(data) {
    this.name = data.Name || "";
    this.createdDatetime = new Date(data.CreatedTimestamp);
  }

  get createdDatetimeString() {
    const options = {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    const dateString = this.createdDatetime.toLocaleDateString(
      "en-GB",
      options
    );
    const timeString = this.createdDatetime.toLocaleTimeString();
    return `${dateString} ${timeString}`;
  }
}
