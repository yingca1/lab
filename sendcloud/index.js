var fs    = require('fs'),
    nconf = require('nconf');

var Sendcloud = require('sendcloud');

nconf.argv()
 .env()
 .file({ file: '/opt/.settings/sendcloud.prd.json' });

API_USER = nconf.get('API_USER');
API_KEY  = nconf.get('API_KEY');
EMAIL_FROM_ADDR = nconf.get('EMAIL_FROM_ADDR');
EMAIL_FROM_NAME = nconf.get('EMAIL_FROM_NAME');

// init first
var sc = new Sendcloud(API_USER, API_KEY, EMAIL_FROM_ADDRM, EMAIL_FROM_NAME, 'bgdev_batch');

// send email
sc.send('i@caiying.me','邮件测试','<h1>Hello world!<h1>').then(function(info){
	console.log(info);
});