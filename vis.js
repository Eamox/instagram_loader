looker.plugins.visualizations.add({
  create: function(element, config) {

  },
  updateAsync: function(data, element, config, queryResponse, details, done) {

    post = data[0][queryResponse.fields.dimensions[0].name].value;

    var block;
    var post_full = `${post}?utm_source=ig_embed&utm_campaign=loading`
    if (block = document.getElementsByTagName('blockquote')[0]) {
      var current = block.getAttribute('data-instgrm-permalink')
      if (current == post_full) {
        return true
      }
    };
    var body = document.getElementsByTagName('body')[0];
    body.innerHTML = "";
    var di = document.createElement('div');
    di.innerHTML = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${post}?utm_source=ig_embed&utm_campaign=loading" data-instgrm-version="13" style=" background:#FFF; border:0;height: 1000px; border-radius:3px; margin: 1px; max-width:540px; min-width:6px; padding:0;width:99%" scrolling=true>

</blockquote>
`;
    body.appendChild(di);
    var tag = document.createElement('script');
    //tag.async = true;
    tag.src = 'https://www.instagram.com/embed.js';
    body.appendChild(tag).remove()
  }
})
