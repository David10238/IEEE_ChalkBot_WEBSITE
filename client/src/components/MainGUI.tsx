
import '../styles.scss'
import TopBar from './TopBar'

export default function MainGUI() {
    return (
        <div className="flex-container-column">
            <TopBar />
            <div className="ui-row">
                <div style={{ backgroundColor: 'pink' }}>Hello</div>
                <div style={{ backgroundColor: 'yellow' }}>How Are You</div>
            </div>
        </div>
    )
}