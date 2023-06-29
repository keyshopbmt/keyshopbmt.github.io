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
  }
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
      <input
        id="input_image"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
    </>
  );
};

export const PostCreate = (props) => {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "dbs44uzyv",
  //     apiKey: "768982511158683",
  //     apiSecret: "5zXBTKhIx2U2ZQQdCneb5miCtDM",
  //   },
  // });

  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="title" validate={[required()]} fullWidth />
        <NumberInput source="price" />
        <TextInput source="description" validate={[required()]} fullWidth />
        <TextInput source="category" validate={[required()]} fullWidth />
        <CloudinaryImageInput />
        <DateInput source="date_create" />
      </SimpleForm>
    </Create>
  );
};
