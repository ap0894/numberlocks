var admobid = {};

// TODO: replace the following ad units with your own
if( /(android)/i.test(navigator.userAgent) ) { 
  admobid = { // for Android
    banner: 'ca-app-pub-6268166388384710/7929783380',
    interstitial: 'ca-app-pub-6268166388384710/1883249783'
  };
} else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
  admobid = { // for iOS
    banner: 'ca-app-pub-6268166388384710/2302052184',
    interstitial: 'ca-app-pub-6268166388384710/4836716184'
  };
} else {
  admobid = { // for Windows Phone
   // banner: 'ca-app-pub-6869992474017983/8878394753',
   // interstitial: 'ca-app-pub-6869992474017983/1355127956'
  };
}

function showBanner() {
	if (! AdMob ) { 
		//alert( 'admob plugin not ready' ); 
		return; 
	}

  // this will create a banner on startup
  AdMob.createBanner( {
    adId: admobid.banner,
    position: AdMob.AD_POSITION.BOTTOM_CENTER,
    isTesting: true, // TODO: remove this line when release
    overlap: false,
    offsetTopBar: false,
    autoShow: true,
    bgColor: 'black'
  } );
}

function prepInterstitial() {
	if (! AdMob ) { 
		//alert( 'admob plugin not ready' ); 
		return; 
	}

  // this will load a full screen ad on startup
  AdMob.prepareInterstitial({
    adId: admobid.interstitial,
    isTesting: true, // TODO: remove this line when release
    autoShow: false
  });
}

function showInterstitial() {
	if(AdMob) AdMob.showInterstitial();
}