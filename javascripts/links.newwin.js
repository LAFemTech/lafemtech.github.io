$(document).ready(function() {

  var website = window.location.hostname;

  var internalLinkRegex = new RegExp('^((((http:\\/\\/|https:\\/\\/)(www\\.)?)?'
                                     + website
                                     + ')|(localhost:\\d{4})|(\\/.*))(\\/.*)?$', '');

  $('a').filter(function() {
    var href = $(this).attr('href');
    return !internalLinkRegex.test(href);
  })
  .each(function() {
    $(this).attr('target', '_blank');
  });

});
