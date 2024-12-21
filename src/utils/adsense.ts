// Google AdSense Configuration
export const initializeAdsense = () => {
  const script = document.createElement('script');
  script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  // Substitua YOUR_ADSENSE_CLIENT_ID pelo seu ID do cliente AdSense
  script.dataset.adClient = 'YOUR_ADSENSE_CLIENT_ID';
  document.head.appendChild(script);
};

// Função para carregar anúncios em containers específicos
export const loadAd = (containerId: string) => {
  (window.adsbygoogle = window.adsbygoogle || []).push({});
};