type ProfilePhotoCardProps = {
  src: string;
  filename: string;
  sizeInKb: number;
};

export function ProfilePhotoCard({
  src,
  filename,
  sizeInKb,
}: ProfilePhotoCardProps) {
  return (
    <div className="space-y-2 text-sm tracking-wider text-swimigo-grey">
      <p>PROFILE PHOTO</p>
      <div className="bg-gray-100 p-4 rounded-xl w-fit">
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-40">
          <img
            src={src}
            alt="Profile"
            className="w-40 h-40 object-cover"
            onError={(e) =>
              ((e.target as HTMLImageElement).src = "/error-placeholder.png")
            }
          />
        </div>
        <div className="p-2 text-center">
          <p className="text-sm font-medium">{filename}</p>
          <p className="text-xs text-gray-500">{sizeInKb} kb</p>
        </div>
      </div>
    </div>
  );
}
