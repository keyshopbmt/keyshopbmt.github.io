import { React, useState, useEffect } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  NumberInput,
} from "react-admin";
import { useFormContext } from "react-hook-form";
import "./postCreate.css"

const CloudinaryImageInput = () => {
  const [image, setImage] = useState("");
  const formContext = useFormContext();

  const openUploadWidget = () => {
    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: "dbs44uzyv",
        uploadPreset: "h1w9iaje",
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false, //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          // console.log("Done! Here is the image info: ", result.info);
          document
            .getElementById("uploadedimage")
            .setAttribute("src", result.info.secure_url);
          setImage(result.info.secure_url);
          // updateImageSoure(result.info.secure_url);
          // document
          //   .getElementById("input_image")
          //   .setAttribute("value", result.info.secure_url);
          // console.log(document.getElementById("input_image"));
        }
      }
    );

    myWidget.open();
  };
  useEffect(() => {
    formContext.setValue("image", image);
  });
  return (
    <>
      <button
        id="upload_widget"
        type="button"
        className="cloudinary-button"
        onClick={() => openUploadWidget()}
      >
        Upload
      </button>
      <img id="uploadedimage" src=""></img>
    </>
  );
};

const convertDateToString = (value) => {
  // value is a `Date` object
  if (!(value instanceof Date) || isNaN(value.getDate())) return "";
  const pad = "00";
  const yyyy = value.getFullYear().toString();
  const MM = (value.getMonth() + 1).toString();
  const dd = value.getDate().toString();
  return `${yyyy}-${(pad + MM).slice(-2)}-${(pad + dd).slice(-2)}`;
};

const dateFormatter = (value) => {
  // null, undefined and empty string values should not go through dateFormatter
  // otherwise, it returns undefined and will make the input an uncontrolled one.
  if (value == null || value === "") return "";
  if (value instanceof Date) return convertDateToString(value);
  // Valid dates should not be converted
  if (dateFormatter.test(value)) return value;

  return convertDateToString(new Date(value));
};
const dateParser = (value) => {
  //value is a string of "YYYY-MM-DD" format
  const match = dateParser.exec(value);
  if (match === null) return;
  const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
  if (isNaN(d.getDate())) return;
  return d;
};

export const PostCreate = (props) => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <NumberInput source="price" />
        <TextInput source="description" validate={[required()]} fullWidth />
        <TextInput source="category" validate={[required()]} fullWidth />
        <CloudinaryImageInput />
        <DateInput
          source="date"
          format={dateFormatter}
          parse={dateParser}
          defaultValue={new Date()}
        />
      </SimpleForm>
    </Create>
  );
};
