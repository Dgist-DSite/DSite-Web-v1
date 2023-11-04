import React, { useEffect } from 'react'

export default function DisplayAds () {
  useEffect(() => {
    const pushAd = () => {
      try {
        const adsbygoogle = window.adsbygoogle
        // console.log({ adsbygoogle })
        adsbygoogle.push({})
      } catch (e) {
        console.error(e)
      }
    }

    let interval = setInterval(() => {
      // Check if Adsense script is loaded every 300ms
      if (window.adsbygoogle) {
        pushAd()
        // clear the interval once the ad is pushed so that function isn't called indefinitely
        clearInterval(interval)
      }
    }, 300)

    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
  <ins className="adsbygoogle"
       style={{display:'block'}}
       data-ad-client="ca-pub-5311725069729372"
       data-ad-slot="9709674992"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  )
}

