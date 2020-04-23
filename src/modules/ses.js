import AWS from "aws-sdk";
import TemplateDetails from "../models/TemplateDetails";
import Template from "../models/Template";

let SES;

export const createSES = (accessKeyId, secretAccessKey, region) => {
  SES = new AWS.SES({
    accessKeyId,
    secretAccessKey,
    region
  });
};

export const regions = [
  "us-east-1",
  "us-west-2",
  "eu-west-1",
  "ap-southeast-2",
  "ap-south-1",
  "ca-central-1",
  "eu-central-1",
  "eu-west-2",
  "sa-east-1"
];

export const getAllTemplates = () => {
  const params = {
    MaxItems: 10000,
    NextToken: ""
  };
  return new Promise((resolve, reject) => {
    SES.listTemplates(params, (err, data) => {
      if (!err) {
        resolve(
          data.TemplatesMetadata.map(templateMetadata => {
            return new Template(templateMetadata);
          })
        );
      } else {
        reject(err);
      }
    });
  });
};

export const getTemplate = templateName => {
  const params = {
    TemplateName: templateName
  };
  return new Promise((resolve, reject) => {
    SES.getTemplate(params, (err, data) => {
      if (!err) {
        resolve(new TemplateDetails(data.Template));
      } else {
        reject(err);
      }
    });
  });
};

export const createTemplate = template => {
  const params = {};
  params.Template = template.amazonSESTemplate;
  return new Promise((resolve, reject) => {
    SES.createTemplate(params, (err, data) => {
      if (!err) {
        resolve(new TemplateDetails(data));
      } else {
        reject(err);
      }
    });
  });
};

export const updateTemplate = template => {
  const params = {};
  params.Template = template.amazonSESTemplate;
  return new Promise((resolve, reject) => {
    SES.updateTemplate(params, (err, data) => {
      if (!err) {
        resolve(new TemplateDetails(data));
      } else {
        reject(err);
      }
    });
  });
};

export const deleteTemplate = templateName => {
  const params = {
    TemplateName: templateName
  };
  return new Promise((resolve, reject) => {
    SES.deleteTemplate(params, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};
