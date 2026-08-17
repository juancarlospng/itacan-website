/**
 * Editorial image container with a FIXED aspect ratio.
 * Photography is temporary — future shoots drop in by changing `src` only.
 * `position` tunes the crop (object-position) per media item.
 */
const MediaImage = ({
  image,
  ratio = "aspect-[4/5]",
  className = "",
  imgClassName = "",
  eager = false,
  sizes,
}) => (
  <div className={`relative overflow-hidden ${ratio} ${className}`}>
    <img
      src={image.src}
      alt={image.alt}
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
      decoding="async"
      sizes={sizes}
      style={{ objectPosition: image.position || "center" }}
      className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
    />
  </div>
);

export default MediaImage;
