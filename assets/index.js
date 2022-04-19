
var vConsole = new window.VConsole();

function $(selector) {
	return document.querySelector(selector)
}

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
    LOG_LEVEL: 3
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
			console.log(new Date().getTime() + "stream add>>>>", stream)
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
			console.log(new Date().getTime() + "stream update>>>>", stream)
			const mediaStream = stream.getMediaStream()
			const videoTrack = mediaStream.getVideoTracks()[0]
			console.warn("+++++++++++++++", mediaStream)
			// console.warn("+++++++++++++++", mediaStream.getVideoTracks())
			console.log(videoTrack)
			for(t in videoTrack){
				console.log(t + " >>>> ", videoTrack[t])
			}
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
					$("#localstream video").play()
					
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
		voff: 0
	})
	service.openUserMedia(_pubS).then(function (a, b) {
		// console.error("pubs", a, b)
		// document.getElementById("testVideo").srcObject = b
		service.push(_pubS, function(stream){
			success && success()
		}, function(err){
			alert("Push Stream Error.")
			error && error(err)
		})
	}, function(err){
		alert("OpenUserMedia Error.")
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
			publishMediaStream({ audio: true, video: true }) // 流配置
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
	// if(localStream){
	// 	const _voff  = !localStream.voff
	// 	emedia.enableVideoTracks(localStream.getMediaStream(), !_voff)
  //   service.current && service.current.voff(localStream, _voff)
	// }
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