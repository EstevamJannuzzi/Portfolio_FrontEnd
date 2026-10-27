const Iframe = ({
  src,
  wrapperClass = 'relative flex justify-center items-center w-[220px] sm:w-[200px] lg:w-[240px] xl:w-[340px]',
  className = 'rounded-xl z-10',
}) => {
  return (
    <div className={`${wrapperClass} aspect-video`}>
      <video
        src={src}
        controls
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
};

export default Iframe;
