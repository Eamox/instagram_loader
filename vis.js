looker.plugins.visualizations.add({
    create: function(element, config) {

  },
    updateAsync: function(data, element, config, queryResponse, details, done) {
  post=data[0][queryResponse.fields.dimensions[0].name].value


var body = document.getElementsByTagName('body')[0];
var di = document.createElement('div');
di.innerHTML=`
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${post}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="13" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:6px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">

</blockquote>
`
body.appendChild(di)
var tag = document.createElement('script');
tag.async = true;
tag.src = '//www.instagram.com/embed.js';
var body = document.getElementsByTagName('body')[0];
body.appendChild(tag);

  }
})

