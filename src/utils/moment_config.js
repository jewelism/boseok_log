import moment from 'moment';

moment.locale('kr');
moment.updateLocale('en', {
  relativeTime: {
    future: "%s 후",
    past: "%s 전",
    s: '방금',
    ss: '%d초',
    m: "1분",
    mm: "%d분",
    h: "1시간",
    hh: "%d시간",
    d: "하루",
    dd: "%d일",
    M: "한달",
    MM: "%d달",
    y: "1년",
    yy: "%d년"
  },
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'YYYY/DD/MM',
    LL: 'D MMMM YYYY',
    LLL: 'YYYY/MM/DD HH:mm',
    LLLL: 'dddd D MMMM YYYY HH:mm'
  }
});