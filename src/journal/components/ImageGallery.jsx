import { ImageList, ImageListItem } from "@mui/material";

export const ImageGallery = ({ images = [] }) => {
  console.log({ images });
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {images.map((i) => (
        <ImageListItem key={i}>
          <img
            src={`${i}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${i}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
