Vue.filter('timeago', function(value){
  var time = new Date(value).getTime();
  var local = Date.now();
  var raw;
  
  var
      offset = Math.abs((local - time) / 1000),
      span = [],
      MINUTE = 60,
      HOUR = 3600,
      DAY = 86400,
      WEEK = 604800,
      MONTH = 2629744,
      YEAR = 31556926,
      DECADE = 315569260;
      
  if (offset <= MINUTE) span = [ '', raw ? 'now' : 'less than a minute' ];
  else if (offset < (MINUTE * 60)) span = [ Math.round(Math.abs(offset / MINUTE)), 'min' ];
  else if (offset < (HOUR * 24)) span = [ Math.round(Math.abs(offset / HOUR)), 'hr' ];
  else if (offset < (DAY * 7)) span = [ Math.round(Math.abs(offset / DAY)), 'day' ];
  else if (offset < (WEEK * 52)) span = [ Math.round(Math.abs(offset / WEEK)), 'week' ];
  else if (offset < (YEAR * 10)) span = [ Math.round(Math.abs(offset / YEAR)), 'year' ];
  else if (offset < (DECADE * 100)) span = [ Math.round(Math.abs(offset / DECADE)), 'decade' ];
  else span = [ '', 'a long time' ];

  span[1] += (span[0] === 0 || span[0] > 1) ? 's' : '';
  span = span.join(' ');

  if (raw === true) {
      return span;
  }
  return (time <= local) ? span + ' ago' : 'in ' + span;
});

new Vue({
  el: '#app',
  data: {
    posts: [
      {
        id: 1,
        title: "Lorem ipsum dolor",
        published: "2017-05-25T11:17:00+01:00"
      },
      {
        id: 2,
        title: "Just another title",
        published: "2017-05-25T11:02:24+01:00"
      }
    ]
  }
});
