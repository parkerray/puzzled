export default function Video() {
  return (
    <iframe
      className='responsive-video'
      src='https://www.youtube.com/embed/dQw4w9WgXcQ'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
    ></iframe>
  );
}
