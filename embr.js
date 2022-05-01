!function(e){
	if(window.EmbrCheckout && window.EmbrCheckout.init)
		{return window.EmbrCheckout.init(e)
	}
		const c=document.createElement("script");
		c.type="module",
		c.onload=(()=>window.EmbrCheckout.init(e)),
		c.src="https://static.embr.org/checkout.es.js",
		document.querySelector("head").appendChild(c)}({
			"debug":false,
			"element":"#checkout",
			"config":{
				"chain":"brise",
				"exchange":"sphynx",
				"lpAddress":"0xd1292f0701082E663db7faf747905c58E922c9FC",
				"token":{
					"address":"0x71946a5C9dA7C95ee804a9BE561EC15A3F286A7D",
					"name":"Brisepad ",
					"symbol":"BPAD",
					"decimals":8,
					"logoUrl":"https://i.imgur.com/k6uF9Zu.png","tax":0
				}
			}
		});

// 		!(function (e) {
//   if (window.EmbrCheckout && window.EmbrCheckout.init) {
//     return window.EmbrCheckout.init(e)
//   }
//   const c = document.createElement('script')
//   ;(c.type = 'module'),
//     (c.onload = () => window.EmbrCheckout.init(e)),
//     (c.src = 'https://static.embr.org/checkout.es.js'),
//     document.querySelector('head').appendChild(c)
// })({
//   debug: false,
//   element: '#checkout',
//   config: {
//     chain: 'brise',
//     exchange: 'sphynx',
//     lpAddress: '0x81217662b63fC4631b0E32eA77781148044dD8FB',
//     token: {
//       address: '0x11203a00a9134Db8586381C4B2fca0816476b3FD',
//       name: 'Young Parrot',
//       symbol: 'YPC',
//       decimals: 18,
//       logoUrl:
//         'http://youngparrotnft.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo100.611fd018.png&w=64&q=75',
//       tax: 0,
//     },
//   },
// })