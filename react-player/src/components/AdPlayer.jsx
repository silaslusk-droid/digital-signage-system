import React, { useState, useEffect } from 'react'
import useAds from '../hooks/useAds'

const AdPlayer = ({ station }) => {
  const { ads, loading, error } = useAds(station)
  const [currentAdIndex, setCurrentAdIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex(prev => (prev + 1) % ads.length)
    }, 10000)
    return () => clearInterval(interval)
  }, [ads.length])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error loading ads</div>
  if (!ads.length) return <div>No ads available</div>

  const currentAd = ads[currentAdIndex]

  return (
    <div className="ad-player">
      {currentAd.media.mime.startsWith('video') ? (
        <video autoPlay muted loop>
          <source src={currentAd.media.url} type={currentAd.media.mime} />
        </video>
      ) : (
        <img src={currentAd.media.url} alt={currentAd.title} />
      )}
    </div>
  )
}

export default AdPlayer