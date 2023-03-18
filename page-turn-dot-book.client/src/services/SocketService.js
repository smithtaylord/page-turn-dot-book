import Pop from '../utils/Pop'
import { SocketHandler } from '../utils/SocketHandler'
import { logger } from '../utils/Logger.js'
import { AppState } from '../AppState.js'

class SocketService extends SocketHandler {
  constructor() {
    super()
    this
      .on('error', this.onError)
      .on('new:vote', this.newVote)
      .on('joined:room', this.joinedRoom)
      .on('left:room', this.leftRoom)
  }

  onError(e) {
    Pop.toast(e.message, 'error')
  }
  
  newVote(payload){
    try {
      logger.log('[created vote payload]', payload)
      let i = AppState.activeClubBooks.findIndex(b => b.id == payload.id)
      AppState.activeClubBooks.splice(i, 1,)
      AppState.activeClubBooks.push(payload)
    } catch (error) {
      Pop.error(error.message)
    }
  }

  joinedRoom(payload) {
    try {
      logger.log('[JOINING THE ROOM]', payload)
    } catch (error) {
      Pop.error(error.message)
    }
  }
  
  leftRoom(payload) {
    try {
      logger.log('[Left THE ROOM]', payload)
    } catch (error) {
      Pop.error(error.message)
    }
  }
}
export const socketService = new SocketService()
