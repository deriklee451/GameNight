import { appState } from "../AppState"

class Player {
    Player() {
        let template = ''
        appState.Player.foreach(p => template += p.name)

    }
}