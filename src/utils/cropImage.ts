import { Area } from "react-easy-crop";

export const getCroppedImg = (file: File, croppedArea: Area): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        return reject(new Error("Failed to get canvas context"));
      }

      canvas.width = croppedArea.width;
      canvas.height = croppedArea.height;

      ctx.drawImage(
        image,
        croppedArea.x,
        croppedArea.y,
        croppedArea.width,
        croppedArea.height,
        0,
        0,
        croppedArea.width,
        croppedArea.height
      );

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Failed to create blob"));
          }
        },
        "image/png",
        1
      );
    };

    image.onerror = (error) => {
      reject(error);
    };
  });
};
