
function $(selector) {
	return document.querySelector(selector)
}

<script>
  // VConsole will be exported to `window.VConsole` by default.
  var vConsole = new window.VConsole();
</script>

// class RtcWidget{
// 	localStream = null
// 	localShareStream = null
// 	mainWindowItem = null
// 	constructor({appId, appKey, serviceUrl, userId}){
// 		this.appId = appId
// 		this.appKey = appKey
// 		this.serviceUrl = serviceUrl
// 		this.userId = userId
// 		this.initSDK()
// 		console.log(this)
// 	}
// 	initSDK(){
// 		const {onMeExit, onAddMember, onRemoveMember, onAddStream, onRemoveStream, onUpdateStream } = this
// 		const emedia = new EmediaSDK({
// 			config: {
// 				LOG_LEVEL: 5
// 			}
// 		})
// 		const service = new emedia.Service({
// 			listeners: {
// 				onMeExit,
// 				onAddMember,
// 				onRemoveMember,
// 				onAddStream,
// 				onRemoveStream,
// 				onUpdateStream
// 			}
// 		})
// 		this.emedia = emedia
// 		this.service = service
// 	}
// 	onMeExit(){
// 		console.log('触发onMeExit，原因:', ...rest)
// 		this.localStream = null
// 		this.mainWindowItem = null
// 		this.$videoList.innerHTML = ""
// 		$('#header').style.display = "flex"
// 		console.log("reset all...")
// 	}
// 	onAddMember = member => {
// 		console.log("member add>>>>", member)
// 		const name = member.ext.nickname || member.nickName || member.name || member.memName 
// 		// 成员播放器创建
// 		this.createVideoPlayer(member.id, name)
// 	}
// 	onRemoveMember = member => {
// 		console.log("member remove>>>>", member)
// 		this.removeVideoPlayer(member.id)
// 	}
// 	onAddStream = stream => {
// 		console.log("stream add>>>>", stream)
// 		const nickname = stream.located() ? "我" : stream.owner.ext.nickname || stream.owner.name
// 		// 针对桌面共享单独处理
// 		if(stream.type == 1){
// 			this.createVideoPlayer(stream.id, nickname + "的桌面")
// 		}
// 	}
// 	onRemoveStream = stream => {
// 		console.log("stream remove>>>>", stream)
// 		// 桌面共享的流单独处理，因为不会触发onRemoveMember
// 		if(stream.type == 1){

// 			// 清除缓存的本地共享流
// 			if(stream.located()){
// 				this.localShareStream = null;
// 			}

// 			this.removeVideoPlayer(stream.id)
// 		}
// 	}
// 	onUpdateStream = stream => {
// 		console.log("stream update>>>>", stream)
// 			const mediaStream = stream.getMediaStream()
			
// 			// 针对桌面共享单独处理
// 			if(stream.type == 1){
// 				$("#" + stream.id + " video").srcObject = mediaStream
// 			}
// 			if(stream.type == 0){
// 				if(stream.located()){
// 					localStream = stream
// 					if(!$('#localstream')){
// 						this.createVideoPlayer("localstream", '我')
// 					}
// 					$("#localstream video").srcObject = mediaStream
// 				}else{
// 					$("#" + stream.memId + " video").srcObject = mediaStream
// 				}
// 			}
// 	}
// 	createVideoPlayer = (id, name) => {
// 		if($('#' + id)){
// 			return $('#' + id)
// 		}
// 		console.log(this.$videoList)
// 		const item = document.createElement("div")
// 		const videoTag = document.createElement("video")
// 		const nameTag = document.createElement("span")
// 		item.id = id
// 		videoTag.autoplay = true
// 		videoTag.playsInline = true
// 		nameTag.innerText = name
// 		if(id === "localstream"){
// 			videoTag.muted = true
// 		}
// 		item.addEventListener("click", () => {
// 			swithVideoToMain(item)
// 		})
// 		item.appendChild(videoTag)
// 		item.appendChild(nameTag)
// 		this.$videoList.appendChild(item)
		
// 		return item
// 	}
// 	removeVideoPlayer(id){
// 		const videoTag = $("#" + id)
// 		if(!videoTag) return
// 		this.$videoList.removeChild(videoTag)
// 	}
// 	setPlayerToMain(ele){
// 		if(this.currentMainScreenItem){
// 			this.currentMainScreenItem.className = ""
// 		}
// 		ele.className = "mainScreen"
// 		this.currentMainScreenItem = item;
// 	}
// 	publishStream = (constaints, success, error) => {
// 		const {service} = this
// 		const	_pubS = new service.AVPubstream({
// 			constaints,
// 			aoff: 0,
// 			voff: 0,
// 			name: 'video'
// 		})
// 		service.openUserMedia(_pubS).then(function () {
// 			console.log('open success')
// 			service.push(_pubS, function(stream){
// 				console.log('push ok')
// 				success && success()
// 			}, function(err){

// 				console.log(err)
// 				error && error(err)
// 			})
// 		}, function(err){
// 			error && error(err)
// 		})
// 	}
// 	joinRoom(roomId, success){
// 		const that = this

// 		if(!roomId){
// 			return
// 		}
		
// 		// 获取进入指定房间的ticket
// 		that.getTicket(roomId).then(result => {
	
// 			// 设置要加入房间ticket
// 			that.service.setup(result.ticket, {})
	
// 			// 加入房间并打开设备推流
// 			that.service.join(() => {
// 				// 流配置
// 				that.publishStream({
// 					audio: true,
// 					video: true
// 				})

// 				success && success()
// 			})
// 		})
// 	}
// 	getUserSig({userId, appId, appKey}){
// 		return fetch(`https://private-preview-media.easemob.com/management/room/player/usersig?name=${userId}&sdkAppId=${appId}&sdkAppKey=${appKey}`)
// 	.then(res => res.text())
// 	}
// 	getTicket(roomId){
// 		const {appId, appKey, userSig, userId, serviceUrl} = this
// 		if(userSig){
// 			return fetch(`${serviceUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${userId}&_=${+new Date}`).then(res => res.json())
// 		}else{
// 			return this.getUserSig({userId, appId, appKey}).then(userSig => {
// 				this.userSig = userSig
// 				return fetch(`${serviceUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${userId}&_=${+new Date}`).then(res => res.json())
// 			})
// 		}
// 	}
// 	render(selector){
// 		const container = document.createElement("div")
// 		const list = document.createElement("div")
// 		container.id = "ui-video-container"
// 		list.id = "ui-video-list"
// 		container.appendChild(list)
// 		$(selector).appendChild(container)
// 		this.$videoList = $("#ui-video-list")
// 	}
// }

// const userId = "ae_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)

// const widget = new RtcWidget({
// 	serviceUrl: "https://private-preview-media.easemob.com",
// 	appId: "827212690214645824",
// 	appKey: "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ",
// 	userId
// })

// widget.render('#app')

// $("#joinRoom").addEventListener("click", () => {
// 	const roomId = document.querySelector("input").value || "room001"
// 	widget.joinRoom(roomId, () => {
// 		$('#header').style.display = "none"
// 	})
// })

// return

const username = localStorage.getItem("emedia_username")|| "ae_" + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1) /// 随机一个名字
const serverUrl = "https://private-preview-media.easemob.com"
const appId = "827212690214645824"
const appKey = "Y25Sak9nbnVlN1pLv3Bm5FCJBquhPsL5csn06k3AOlQ"
let userSig = ""
let localStream = null
let localSharedDesktopStream = null
let currentMainScreenItem = null

const $videoMain = $("#ui-video-main video") // 主视频
const $videoList = $('#ui-video-list') // 成员列表

localStorage.setItem("emedia_username", username)


function swithVideoToMain(item){
	if(currentMainScreenItem){
		currentMainScreenItem.className = ""
	}
	item.className = "mainScreen"
	currentMainScreenItem = item;

}

function createMiniVideoPalyer(id, name){
	if($('#' + id)){
		return $('#' + id)
	}
	const item = document.createElement("div")
	const videoTag = document.createElement("video")
	const nameTag = document.createElement("span")
	item.id = id
	videoTag.autoplay = true
	videoTag.playsInline = true
	nameTag.innerText = name
	if(id === "localstream"){
		videoTag.muted = true
	}
	item.addEventListener("click", () => {
		swithVideoToMain(item)
	})
	item.appendChild(videoTag)
	item.appendChild(nameTag)
	$videoList.appendChild(item)
	return item
}

function removeVideoPlayer(id){
  const videoTag = $("#" + id)
	if(!videoTag) return
	$videoList.removeChild(videoTag)
}

const emedia = window.emedia = new EmediaSDK({
	config: {
    LOG_LEVEL: 5
	}
})

const service = window.service = new emedia.Service({
	listeners: {
		onMeExit(...rest) {
			console.log('触发onMeExit，原因:', ...rest)
			localStream = null
			currentMainScreenItem = null
			$videoList.innerHTML = ""
			$('#header').style.display = "flex"
			console.log("reset all...")
		},

		onAddMember(member) {
			console.log("member add>>>>", member)
			const name = member.ext.nickname || member.nickName || member.name || member.memName 
			// 成员播放器创建
			createMiniVideoPalyer(member.id, name)
		},

		onRemoveMember(member) {
			console.log("member remove>>>>", member)
			removeVideoPlayer(member.id)
		},


		// 流的增加，仅用于统计人数，不处理流
		onAddStream(stream) {
			console.log("stream add>>>>", stream)
			const nickname = stream.located() ? "我" : stream.owner.ext.nickname || stream.owner.name
			if(stream.located() && stream.type == 0){
				$('#header').style.display = "none" // 自己的流进来
			}
			// 针对桌面共享单独处理
			if(stream.type == 1){
				createMiniVideoPalyer(stream.id, nickname + "的桌面")
			}
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onUpdateStream(stream, updateObj) {
			console.log("stream update>>>>", stream)
			const mediaStream = stream.getMediaStream()
			
			// 针对桌面共享单独处理
			if(stream.type == 1){
				$("#" + stream.id + " video").srcObject = mediaStream
			}
			if(stream.type == 0){
				if(stream.located()){
					localStream = stream
					if(!$('#localstream')){
						createMiniVideoPalyer("localstream", '我')
					}
					$("#localstream video").srcObject = mediaStream
				}else{
					$("#" + stream.memId + " video").srcObject = mediaStream
				}
			}
		},

		// 某成员的流退出（包含本地流、音视频流，共享桌面等）
		onRemoveStream(stream) {
			console.log("stream remove>>>>", stream)

			// 桌面共享的流单独处理，因为不会触发onRemoveMember
			if(stream.type == 1){

				// 清除缓存的本地共享流
				if(stream.located()){
					localSharedDesktopStream = null;
				}

				removeVideoPlayer(stream.id)
			}
		},

		onNotifyEvent(evt) {
			console.log("event>>>>", evt)
		}
	}
})

// getUserSig接口 可以根据项目经理提供的文档在自己服务实现，此处接口服务仅作演示使用
function getUserSig(userId) {
	return fetch(`https://private-preview-media.easemob.com/management/room/player/usersig?name=${userId}&sdkAppId=${appId}&sdkAppKey=${appKey}`)
	.then(res => res.text())
}

function getTicket(roomId) {
	return fetch(`${serverUrl}/emedia/enter_room?app_id=${appId}&user_sig=${userSig}&room_id=${roomId}&user_id=${username}&_=${+new Date}`).then(res => res.json())
}

function publishMediaStream(constaints, success, error){
	const	_pubS = new service.AVPubstream({
		constaints,
		aoff: 0,
		voff: 0,
		name: 'video'
	})
	service.openUserMedia(_pubS).then(function () {
		service.push(_pubS, function(stream){
			success && success()
		}, function(err){
			error && error(err)
		})
	}, function(err){
		error && error(err)
	})
}

function joinRtcRoom(roomId) {

	if(!roomId){
		return
	}
	
	// 获取进入指定房间的ticket
	getTicket(roomId).then(result => {

		// 设置要加入房间ticket
		service.setup(result.ticket, { role: '', avatar: '', nickname: username })

		// 加入房间并打开设备推流
		service.join(() => {
			// 流配置
			publishMediaStream({
				audio: true,
				video: true
			})
		})
	})
}

// 获取并保存用户签名
getUserSig(username).then(res => userSig = res)

// 加入（创建）房间
$("#joinRoom").addEventListener("click", () => {

	// 自己起个roomId
	const roomId = document.querySelector("input").value || "room001"

	joinRtcRoom(roomId)

})

// 自己退
$("#exitRoom").addEventListener("click", () => {
	service.exit()
})

// 解散房间
$("#destroyRoom").addEventListener("click", () => {
	service.exit(true)
})

// $('#userCamera').addEventListener("click", () => {
// 	if(!localStream) return

// 	service.hungup(localStream.id)
// 	publishMediaStream({
// 		audio: true,
// 		video: true
// 	})
// })

// $('#backCamera').addEventListener("click", () => {
// 	if(!localStream) return

// 	service.hungup(localStream.id)
// 	publishMediaStream({
// 		audio: true,
// 		video: { facingMode: { exact: "environment" } }
// 	}, () => {

// 	}, () => {
// 		publishMediaStream({
// 			audio: true,
// 			video: true
// 		})
// 	})
// })

$("#changeCamera").addEventListener("click", () => {
		let videoOptions = null

		if(!localStream || localStream.voff) return
		
		if(localStream.constaints.video === true) {
			videoOptions = { facingMode: { exact: "environment" } }
		}else if(typeof localStream.constaints.video === "object"){
			if(typeof localStream.constaints.video.facingMode  === "object"){
				videoOptions = true
			}else{
				videoOptions = { facingMode: { exact: "environment" } }
			}
		}

		// 先结束当前流释放出设备 否则有的终端无法直接切换调用其它硬件
		service.hungup(localStream.id)

		publishMediaStream({
			audio: localStream.constaints.audio,
			video: videoOptions
		}, () => {
			console.log("摄像头切换成功")
		}, err => {
			console.log("摄像头切换失败", err)
			publishMediaStream({
				audio: localStream.constaints.audio,
				video: localStream.constaints.video
			})
		})

})

$("#voff").addEventListener("click", () => {
	localStream && service.voff(localStream, !localStream.voff)
})

$('#shareDesktop').addEventListener("click", () => {

	// 无开启的会议
	if(!localStream || localSharedDesktopStream){
		localSharedDesktopStream && service.hungup(localSharedDesktopStream.id)
		return
	}

	// 配置共享桌面选项
	const shareStream = new service.ShareDesktopPubstream({
    voff: 0,
    aoff: 0,
    isAgentShare: true,
    ext: {},
    screenOptions: ['screen', 'window', 'tab']
  })

	// 打开设备并推流
	service.openUserMedia(shareStream).then(() => {
		service.push(shareStream, localShareStream => {

			const deskMediaStream = localShareStream.getLocalMediaStream()

			// 监听桌面共享被取消
			deskMediaStream.getVideoTracks()[0].onended = function(){
				service.hungup(localShareStream.id)
			}
			localSharedDesktopStream = localShareStream
		}, (

		) => {})
	})

})