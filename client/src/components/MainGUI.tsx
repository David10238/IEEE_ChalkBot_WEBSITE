
import '../styles.scss'
import BotActionsColumn from './BotActionsColumn'
import MessageInputColumn from './MessageInputColumn'
import MotorDataColumn from './MotorDataColumn'
import TopBar from './TopBar'

export default function MainGUI() {
    return (
        <div className="flex-container-column full-height">
            <TopBar />
            <div className="ui-row">
                <MessageInputColumn />
                <MotorDataColumn />
                <BotActionsColumn />
            </div>
        </div>
    )
}