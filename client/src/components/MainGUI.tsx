
import '../styles.scss'
import TopBar from './TopBar'

export default function MainGUI() {
    return (
        <div className="flex-container-column">
            <TopBar />
            <div className="ui-row">
                <div className="ui-box" style={{ backgroundColor: 'pink' }}>
                    <div>Hello</div>
                    <div>dear friend</div>
                </div>
                <div className="ui-box" style={{ backgroundColor: 'violet' }}>
                    <div>How are you</div>
                    <div>dear friend</div>
                </div>
                <div className="ui-box" style={{ backgroundColor: 'turquoise', width: '100%' }}>
                    <div>This is working</div>
                    <div>dear friend</div>
                </div>
            </div>
        </div>
    )
}