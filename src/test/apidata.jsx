// import React, { useEffect, useState } from 'react';

// const Apidata = (props) => {
//   const playURL = "https://www.youtube.com/embed/";
//   const url = "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBo-qMxsPlwiFd0ZHPRnrs0ZbfXbf5nHRc";
//           //apiUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=10`;

//   const [LinkUrl, setAllLink] = useState([]);

//   useEffect(() => {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => {
//         const dataWithLink = data.items.map((item) => ({
//           ...item,
//           videoLink: `${playURL}${item.id.videoId}`,
//         }));

//         setAllLink(dataWithLink);
//         console.log(dataWithLink);
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {/* Use parentheses to implicitly return JSX */}
//       {LinkUrl.map((item) => (
//         <iframe key={item.id.videoId} width="560" height="315" src={item.videoLink}></iframe>
//       ))}
//     </div>
//   );
// }

// export default Apidata;
