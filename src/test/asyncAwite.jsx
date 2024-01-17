import React, { useEffect, useState } from 'react';

const Apidata = (props) => {
  const playURL = "https://www.youtube.com/embed/";
  const apiKey = "AIzaSyBo-qMxsPlwiFd0ZHPRnrs0ZbfXbf5nHRc";
  const [pageToken, setPageToken] = useState(null);
  const [LinkUrl, setAllLink] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let apiUrl = `https://youtube.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&maxResults=20`;

      if (pageToken) {
        apiUrl += `&pageToken=${pageToken}`;
      }

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        const dataWithLink = data.items.map((item) => ({
          ...item,
          videoLink: `${playURL}${item.id.videoId}`,
        }));

        setAllLink((prevLinks) => [...prevLinks, ...dataWithLink]);
        setPageToken(data.nextPageToken);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [pageToken]); // Fetch data whenever pageToken changes

  return (
    <div className='videos-set'>
      {LinkUrl.map((item) => (
        <iframe key={item.id.videoId} width="560" height="315" src={item.videoLink}></iframe>
      ))}
      {/* <div className='element'>123</div>
      <div className='element'>123</div>
      <div className='element'>123</div>
      <div className='element'>123</div>
      <div className='element'>123</div> */}
      <button className='loadBtn' onClick={() => setPageToken(pageToken)}>Load More</button>
    </div>
  );
}

export default Apidata;
