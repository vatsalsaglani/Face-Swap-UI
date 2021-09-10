import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Box,
  Button,
  Checkbox,
  Text,
  Grid,
  Image,
} from "@chakra-ui/react";

import GlobalContext from "../contexts/global";

// import { defaultPhotos } from "../pages/photos";
import { defaultPhotos } from "./Photos";

export const ImageView = ({
  imgSrc,
  onClickImage,
  height,
  width,
  isSelected,
  props,
}) => (
  <Box>
    {isSelected ? (
      <Image
        src={imgSrc}
        onClick={onClickImage}
        htmlHeight={height}
        htmlWidth={width}
        border="3px solid green"
        borderRadius="md"
        _hover={{
          cursor: "pointer",
          // border: "2px solid blue",
          borderRadius: "md",
          boxShadow: "2px 2px 6px #6d6d74,-2px -2px 6px #93939e",
        }}
        {...props}
      />
    ) : (
      <Image
        src={imgSrc}
        onClick={onClickImage}
        htmlHeight={height}
        htmlWidth={width}
        borderRadius={"md"}
        _hover={{
          cursor: "pointer",
          border: "2px blue",
          borderRadius: "md",
          boxShadow: "2px 2px 6px #6d6d74,-2px -2px 6px #93939e",
        }}
        {...props}
      />
    )}
  </Box>
);

const ImageGrid = ({ props }) => {
  // const [selectedImage, setSelectedImage] = useState("");
  const [defaultImageStates, setDefaultImageStates] = useState([]);
  const [changeCount, setChangeCount] = useState(0);
  const { targetImage, setTargetImage, setIsDefault } =
    useContext(GlobalContext);

  useEffect(() => {
    if (changeCount === 0) {
      for (let ix in defaultPhotos) {
        defaultPhotos[ix].selected = false;
      }
      setDefaultImageStates(defaultPhotos);
    }
  }, [changeCount]);

  const onClickImage = (name) => {
    setChangeCount(changeCount + 1);
    console.log(name);
    setTargetImage(
      defaultPhotos.filter((item) => item.name === name)[0]["src"]
    );
    // setSelectedImage(name);
    // setTargetImage(
    //   `https://vs-bucket-allthings.s3.us-east-2.amazonaws.com/${name}.png`
    // );
    if (
      defaultImageStates.some((photo) => {
        return photo.isSelected;
      })
    ) {
      let _ci = defaultImageStates.findIndex((photo) => photo.isSelected);
      defaultImageStates[_ci].isSelected = false;
    }
    let ci = defaultImageStates.findIndex((photo) => photo.name === name);
    defaultImageStates[ci].isSelected = defaultImageStates.isSelected
      ? false
      : true;
    setDefaultImageStates(defaultImageStates);
    // setIsDefault(true);
  };

  if (defaultImageStates.length > 0) {
    return (
      <Container minWidth="100%" minHeight="100vh">
        <Grid
          templateColumns="repeat(3, 1fr)"
          gap={3}
          mt="20px"
          mb="20px"
          pt="20px"
          pb="20px"
        >
          {defaultImageStates.map((photo, index) => {
            return (
              <ImageView
                key={index}
                imgSrc={photo.src}
                ariaLabel={photo.name}
                onClickImage={() => onClickImage(photo.name)}
                height={500}
                width={400}
                isSelected={photo.isSelected}
                {...props}
              />
            );
          })}
        </Grid>
      </Container>
    );
  } else {
    return <></>;
  }
};

export default ImageGrid;
