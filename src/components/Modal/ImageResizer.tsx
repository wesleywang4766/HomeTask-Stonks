import React, { useState } from "react";
import Cropper, { Area } from "react-easy-crop";
import { getCroppedImg } from "../../utils/cropImage";

type ImageResizerProps = {
  file: File;
};

const ImageResizer: React.FC<ImageResizerProps> = ({ file }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedArea, setCroppedArea] = useState<Area | null>(null);

  const onCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedArea(croppedAreaPixels);
  };

  const handleSave = async () => {
    const croppedImage = await getCroppedImg(file, croppedArea!);
    // handle the cropped image (e.g., upload it or display it)
  };

  return (
    <div className="image-resizer">
      <Cropper
        image={URL.createObjectURL(file)}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        onZoomChange={setZoom}
        onCropComplete={onCropComplete}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ImageResizer;
