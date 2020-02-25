$(document).ready(function(){
  var userFeed = new Instafeed({
    get: 'user',
    userId: '8006130821',
    accessToken: '8006130821.1677ed0.05c8c0ac4f4941a78854c6ec6411fa79',
    resolution: 'standard_resolution',
    limit: 6,
    sortBy: 'most-recent',
    template: '<a target="_blank" href="{{link}}"><img src="{{image}}" /></a>'
  });
  userFeed.run();
});