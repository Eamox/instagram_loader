
function waitForElement(done){
    if(typeof window.instgrm !== "undefined"){
	console.log('exists')
	window.instgrm.Embeds.process()
	var iframe = document.getElementsByTagName("iframe");
	iframe[0].addEventListener("load", function() {
	    console.log('done')
	    done()
	})
    }
    else{
        setTimeout(waitForElement, 250);
    }
}

looker.plugins.visualizations.add({
  create: function(element, config) {

    //embed script
    var tag = document.createElement('script')
    tag.src = '//www.instagram.com/embed.js';
    element.appendChild(tag)

    //make container
    this._container = document.createElement('div')
    this._container.id = 'insta-container'
    element.append(this._container)

    //make callback




  },
  updateAsync: function(data, element, config, queryResponse, details, done) {



    post = `${data[0][queryResponse.fields.dimensions[0].name].value}?utm_source=ig_embed&utm_campaign=loading`


    if (this._item && this._item == post) {
	console.log("running same")
	done()
      return true
    }

    this._item = post

    this._container.innerHTML = `
<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${post}" data-instgrm-version="13" style=" background:#FFF; border:0;height: 1000px; border-radius:3px; margin: 1px; max-width:540px; min-width:6px; padding:0;width:99%" scrolling=true>
</blockquote>
`;

      waitForElement(done)
      console.log('done function done.')




  }
})
