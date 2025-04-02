import { useRef, useState, useEffect, DragEvent } from "react";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  isView: boolean;
  onFileSelect?: (file: File) => void;
}

const FileUpload = ({ isView, onFileSelect }: FileUploadProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const MAX_FILE_SIZE_MB = 1;

  const handleFile = (file: File) => {
    const fileSizeInMB = file.size / (1024 * 1024); // Convert bytes to MB

    if (fileSizeInMB > MAX_FILE_SIZE_MB) {
      alert("File size exceeds 1MB. Please upload a smaller image.");
      return;
    }

    if (file.type === "image/jpeg" || file.type === "image/png") {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      onFileSelect?.(file);
    } else {
      alert("Unsupported file type. Please upload a JPG or PNG image.");
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isView) setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (isView) return;

    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  };

  // Cleanup blob URL on unmount
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700">
        Profile Photo
      </label>

      <div
        onDragOver={handleDragOver}
        onDragEnter={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-xl p-6 text-center mt-2 transition-colors ${
          isDragging ? "border-swimigo-blue bg-blue-50" : "border-gray-300"
        }`}
      >
        {previewUrl ? (
          <div className="flex justify-center">
            <img
              src={previewUrl}
              alt="Preview"
              className="max-h-48 rounded-xl object-cover"
            />
          </div>
        ) : (
          <>
            <p className="text-sm mb-2">Drag and Drop files here</p>
            <p className="text-xs text-gray-400 mb-2">File format: JPG/PNG</p>
            <Button
              variant="outline"
              onClick={handleButtonClick}
              disabled={isView}
              type="button"
              className="bg-swimigo-grey border-swimigo-grey text-white px-5"
            >
              Choose File
            </Button>
            <p className="text-xs text-gray-400 mt-1">Maximum Size: 1mb</p>
          </>
        )}

        <input
          type="file"
          accept="image/jpeg,image/png"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          disabled={isView}
        />
      </div>
    </div>
  );
};

export default FileUpload;
