voff(pubS, _voff, error, success) {
    var self = this

    if (typeof pubS === 'string') {
      //id
      pubS = self.current._cacheStreams[pubS]
    }

    var oldVoff = pubS.voff
    _voff = _voff ? 1 : 0
    pubS.voff = _voff

    function updateAndDisabled() {
      if (_voff == oldVoff) {
        logger.info('pubstream voff not chanage.')
        return
      }
      emedia.enableVideoTracks(pubS.getMediaStream(), !_voff)
      self.current && self.current.voff(pubS, _voff)
    }

    if (!_voff && pubS.constaints && !pubS.constaints.video) {
      //error && error("When pub. only audio, voff invalidate");
      //throw "When pub. only audio, voff invalidate";

      var preVideo = pubS.constaints.video

      pubS.constaints.video = true
      self._republish(
        pubS,
        function (mediaStream) {
          updateAndDisabled()
          success && success(mediaStream)
        },
        function (_evt) {
          if (_evt instanceof emedia.event.OpenMediaError) {
            //设备可能不支持，比如 没有摄像头，或 被禁止访问摄像头
            pubS.constaints.video = preVideo
            pubS.voff = oldVoff
          }

          error && error(_evt)
        }
      )

      return
    }

    updateAndDisabled()
    success && success(pubS.getMediaStream())
  }