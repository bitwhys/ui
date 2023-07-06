import './App.css'
import '@fontsource/irish-grover'
import '@fontsource/fira-mono'
import '@fontsource/rajdhani/700.css'
import { Button } from '@acme/core'

const TaskList = () => (
  <div
    className="TodoList"
    style={{
      width: 542,
      height: 594,
      padding: 24,
      background: 'hsla(160, 7%, 8%, 1)',
      borderRadius: 12,
      border: '1px solid hsla(150, 5%, 24%, 1)',
      overflow: 'hidden',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      gap: 24,
      display: 'inline-flex',
    }}
  >
    <div
      className="Header"
      style={{
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 48,
        display: 'inline-flex',
      }}
    >
      <div
        className="Text"
        style={{
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          gap: 4,
          display: 'inline-flex',
        }}
      >
        <div
          className="ToDoList"
          style={{ color: 'hsla(150, 6%, 93%, 1)', fontSize: 24, fontWeight: '700', wordWrap: 'break-word' }}
        >
          To do list
        </div>
        <div
          className="YourGoalsForThisSession"
          style={{ color: 'hsla(153, 5%, 62%, 1)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}
        >
          Your goals for this session
        </div>
      </div>
      <div
        className="Icon"
        style={{
          padding: 8,
          background: 'hsla(144, 7%, 13%, 1)',
          borderRadius: 4,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          display: 'inline-flex',
        }}
      >
        <div style={{ color: 'black', fontSize: 24, lineHeight: '1.5rem', fontWeight: '800', wordWrap: 'break-word' }}>
          🚀
        </div>
      </div>
    </div>
    <div
      className="Divider"
      style={{ alignSelf: 'stretch', height: 0, border: '0.50px hsla(150, 6%, 20%, 1) solid' }}
    ></div>
    <div
      className="TaskContainer"
      style={{
        alignSelf: 'stretch',
        flex: '1 1 0',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 16,
        display: 'flex',
      }}
    >
      <div
        className="TaskItem"
        style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}
      >
        <div
          className="Checkmark"
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 5,
            borderLeft: '0.50px #3F3F46 solid',
            borderTop: '0.50px #3F3F46 solid',
            borderRight: '0.50px #3F3F46 solid',
            borderBottom: '0.50px #3F3F46 solid',
          }}
        />
        <div
          className="WriteImportantEmail"
          style={{
            width: 343,
            color: 'hsla(153, 5%, 62%, 1)',
            fontSize: 16,

            fontWeight: '500',

            wordWrap: 'break-word',
          }}
        >
          Write important email.
        </div>
      </div>
      <div
        className="TaskItem"
        style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}
      >
        <div
          className="Checkmark"
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 5,
            borderLeft: '0.50px #3F3F46 solid',
            borderTop: '0.50px #3F3F46 solid',
            borderRight: '0.50px #3F3F46 solid',
            borderBottom: '0.50px #3F3F46 solid',
          }}
        />
        <div
          className="EndEssay"
          style={{
            width: 343,
            color: 'hsla(153, 5%, 62%, 1)',
            fontSize: 16,

            fontWeight: '500',

            wordWrap: 'break-word',
          }}
        >
          End essay
        </div>
      </div>
      <div
        className="TaskItem"
        style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}
      >
        <div
          className="Checkmark"
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 5,
            borderLeft: '0.50px #3F3F46 solid',
            borderTop: '0.50px #3F3F46 solid',
            borderRight: '0.50px #3F3F46 solid',
            borderBottom: '0.50px #3F3F46 solid',
          }}
        />
        <div
          className="PrepareNewVlog"
          style={{
            width: 343,
            color: 'hsla(153, 5%, 62%, 1)',
            fontSize: 16,

            fontWeight: '500',

            wordWrap: 'break-word',
          }}
        >
          Prepare new vlog
        </div>
      </div>
      <div
        className="TaskItem"
        style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}
      >
        <div
          className="Checkmark"
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 5,
            borderLeft: '0.50px #3F3F46 solid',
            borderTop: '0.50px #3F3F46 solid',
            borderRight: '0.50px #3F3F46 solid',
            borderBottom: '0.50px #3F3F46 solid',
          }}
        />
        <div
          className="FollowRuyDevOnInstagram"
          style={{
            width: 343,
            color: 'hsla(153, 5%, 62%, 1)',
            fontSize: 16,

            fontWeight: '500',

            wordWrap: 'break-word',
          }}
        >
          Follow @ruy.dev on instagram
        </div>
      </div>
      <div
        className="TaskItem"
        style={{ justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex' }}
      >
        <div
          className="Checkmark"
          style={{
            width: 20,
            height: 20,
            position: 'relative',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 5,
            borderLeft: '0.50px #3F3F46 solid',
            borderTop: '0.50px #3F3F46 solid',
            borderRight: '0.50px #3F3F46 solid',
            borderBottom: '0.50px #3F3F46 solid',
          }}
        />
        <div
          className="GoToAcademy"
          style={{
            width: 343,
            color: 'hsla(153, 5%, 62%, 1)',
            fontSize: 16,

            fontWeight: '500',

            wordWrap: 'break-word',
          }}
        >
          Go to academy
        </div>
      </div>
    </div>
    <div
      className="InputContainer"
      style={{
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 12,
        display: 'inline-flex',
      }}
    >
      <input
        className="Input"
        style={{
          flex: '1 1 0',
          height: 40,
          padding: 8,
          background: 'hsla(144, 7%, 13%, 1)',
          borderRadius: 4,
          border: 'none',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: 8,
          display: 'flex',
        }}
      />
      <Button>Add</Button>
    </div>
  </div>
)
const Header = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div
        style={{
          flexDirection: 'column',
          gap: 4,
          display: 'flex',
        }}
      >
        <div
          style={{
            color: '#E4E4E7',
            fontSize: 40,
            fontWeight: '800',
          }}
        >
          Pomodoro
        </div>
        <div style={{ color: 'hsla(153, 5%, 62%, 1)', fontSize: 20, fontWeight: '500' }}>
          Manage your time in a magical way!
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
        <button
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '2rem',
            width: '2rem',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 6,
            border: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 20, width: 20 }}
            fill="hsla(153, 5%, 62%, 1)"
            viewBox="0 0 256 256"
          >
            <path d="M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z" opacity="0.2"></path>
            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
        <button
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '2rem',
            width: '2rem',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 6,
            border: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 20, width: 20 }}
            fill="hsla(153, 5%, 62%, 1)"
            viewBox="0 0 256 256"
          >
            <path
              d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
              opacity="0.2"
            ></path>
            <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z"></path>
          </svg>
        </button>
        <button
          style={{
            display: 'grid',
            placeItems: 'center',
            height: '2rem',
            width: '2rem',
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 6,
            border: 'none',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: 20, width: 20 }}
            fill="hsla(153, 5%, 62%, 1)"
            viewBox="0 0 256 256"
          >
            <path
              d="M152,192V144c-61.4,0-104.61,37.19-121.07,54.72a4,4,0,0,1-6.9-3.18C31.51,130.45,99.19,80,152,80V32l80,80Z"
              opacity="0.2"
            ></path>
            <path d="M237.66,106.35l-80-80A8,8,0,0,0,144,32V72.35c-25.94,2.22-54.59,14.92-78.16,34.91-28.38,24.08-46.05,55.11-49.76,87.37a12,12,0,0,0,20.68,9.58h0c11-11.71,50.14-48.74,107.24-52V192a8,8,0,0,0,13.66,5.65l80-80A8,8,0,0,0,237.66,106.35ZM160,172.69V144a8,8,0,0,0-8-8c-28.08,0-55.43,7.33-81.29,21.8a196.17,196.17,0,0,0-36.57,26.52c5.8-23.84,20.42-46.51,42.05-64.86C99.41,99.77,127.75,88,152,88a8,8,0,0,0,8-8V51.32L220.69,112Z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

const SessionDetails = () => (
  <div
    className="SessionDetails"
    style={{
      width: 542,
      height: 594,
      padding: 24,
      background: 'hsla(160, 7%, 8%, 1)',
      borderRadius: 12,
      overflow: 'hidden',
      border: '1px solid hsla(150, 5%, 24%, 1)',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 24,
      display: 'inline-flex',
    }}
  >
    <div
      className="Top"
      style={{
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        gap: 24,
        display: 'flex',
      }}
    >
      <div
        className="Header"
        style={{ width: 494, justifyContent: 'space-between', alignItems: 'center', gap: 48, display: 'inline-flex' }}
      >
        <div
          className="Text"
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 4,
            display: 'inline-flex',
          }}
        >
          <div
            className="SessionData"
            style={{ color: 'hsla(150, 6%, 93%, 1)', fontSize: 24, fontWeight: '700', wordWrap: 'break-word' }}
          >
            Session data
          </div>
          <div
            className="KeepUpWithTheNextCycles"
            style={{ color: 'hsla(153, 5%, 62%, 1)', fontSize: 16, fontWeight: '400', wordWrap: 'break-word' }}
          >
            Keep up with the next cycles
          </div>
        </div>
        <div
          className="Icon"
          style={{
            padding: 8,
            background: 'hsla(144, 7%, 13%, 1)',
            borderRadius: 4,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            display: 'inline-flex',
          }}
        >
          <div
            style={{ color: 'black', fontSize: 24, lineHeight: '1.5rem', fontWeight: '800', wordWrap: 'break-word' }}
          >
            ⏳
          </div>
        </div>
      </div>
      <div className="Divider" style={{ width: 494, height: 0, border: '0.50px hsla(150, 6%, 20%, 1) solid' }}></div>
      <div
        className="Frame1"
        style={{ width: 494, justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'inline-flex' }}
      >
        <div
          className="Text"
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 4,
            display: 'inline-flex',
          }}
        >
          <div
            className="CurrentMode"
            style={{ color: 'hsla(150, 6%, 93%, 1)', fontSize: 18, fontWeight: '600', wordWrap: 'break-word' }}
          >
            Current mode:
          </div>
          <div
            className="CurrentChronometerCycle"
            style={{ color: 'hsla(153, 5%, 62%, 1)', fontSize: 14, fontWeight: '500', wordWrap: 'break-word' }}
          >
            Current chronometer cycle
          </div>
        </div>
        <div
          className="ModeBadge"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
            background: 'rgba(132, 204, 22, 0.10)',
            borderRadius: 4,
            borderLeft: '0.50px hsla(75, 85%, 60%, 1) solid',
            borderTop: '0.50px hsla(75, 85%, 60%, 1) solid',
            borderRight: '0.50px hsla(75, 85%, 60%, 1) solid',
            borderBottom: '0.50px hsla(75, 85%, 60%, 1) solid',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            display: 'flex',
          }}
        >
          <div className="Brain" style={{ width: 16, height: 16, position: 'relative' }}>
            <div
              className="Vector"
              style={{
                width: 16,
                height: 16,
                left: 0.5,
                top: 1.5,
                display: 'grid',
                placeItems: 'center',
                color: 'hsla(75, 85%, 60%, 1)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M240,124a48,48,0,0,1-32,45.27h0V176a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73h0a48,48,0,0,1,0-90.54V72a40,40,0,0,1,80,0,40,40,0,0,1,80,0v6.73A48,48,0,0,1,240,124Z"
                  opacity="0.2"
                ></path>
                <path d="M248,124a56.11,56.11,0,0,0-32-50.61V72a48,48,0,0,0-88-26.49A48,48,0,0,0,40,72v1.39a56,56,0,0,0,0,101.2V176a48,48,0,0,0,88,26.49A48,48,0,0,0,216,176v-1.41A56.09,56.09,0,0,0,248,124ZM88,208a32,32,0,0,1-31.81-28.56A55.87,55.87,0,0,0,64,180h8a8,8,0,0,0,0-16H64A40,40,0,0,1,50.67,86.27,8,8,0,0,0,56,78.73V72a32,32,0,0,1,64,0v68.26A47.8,47.8,0,0,0,88,128a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a55.87,55.87,0,0,0,7.81-.56A32,32,0,1,1,168,144a8,8,0,0,0,0-16,47.8,47.8,0,0,0-32,12.26V72a32,32,0,0,1,64,0v6.73a8,8,0,0,0,5.33,7.54A40,40,0,0,1,192,164Zm16-52a8,8,0,0,1-8,8h-4a36,36,0,0,1-36-36V80a8,8,0,0,1,16,0v4a20,20,0,0,0,20,20h4A8,8,0,0,1,208,112ZM60,120H56a8,8,0,0,1,0-16h4A20,20,0,0,0,80,84V80a8,8,0,0,1,16,0v4A36,36,0,0,1,60,120Z"></path>
              </svg>
            </div>
          </div>
          <div
            className="Foco"
            style={{ color: 'hsla(75, 85%, 60%, 1)', fontSize: 14, fontWeight: '600', wordWrap: 'break-word' }}
          >
            Focus
          </div>
        </div>
      </div>
      <div
        className="Frame2"
        style={{ width: 494, justifyContent: 'space-between', alignItems: 'center', gap: 24, display: 'inline-flex' }}
      >
        <div
          className="Text"
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 4,
            display: 'inline-flex',
          }}
        >
          <div
            className="NextMode"
            style={{ color: 'hsla(150, 6%, 93%, 1)', fontSize: 18, fontWeight: '600', wordWrap: 'break-word' }}
          >
            Next mode:
          </div>
          <div
            className="WhichCycleWillBeActivated"
            style={{ color: 'hsla(153, 5%, 62%, 1)', fontSize: 14, fontWeight: '500', wordWrap: 'break-word' }}
          >
            Which cycle will be activated
          </div>
        </div>
        <div
          className="ModeBadge"
          style={{
            paddingLeft: 8,
            paddingRight: 8,
            paddingTop: 4,
            paddingBottom: 4,
            background: 'rgba(6, 182, 212, 0.10)',
            borderRadius: 4,
            borderLeft: '0.50px hsla(188, 100%, 40%, 1) solid',
            borderTop: '0.50px hsla(188, 100%, 40%, 1) solid',
            borderRight: '0.50px hsla(188, 100%, 40%, 1) solid',
            borderBottom: '0.50px hsla(188, 100%, 40%, 1) solid',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
            display: 'flex',
          }}
        >
          <div className="Coffee" style={{ width: 16, height: 16, position: 'relative' }}>
            <div
              className="Vector"
              style={{
                width: 16,
                height: 16,
                display: 'grid',
                placeItems: 'center',
                color: 'hsla(188, 100%, 40%, 1)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 256 256">
                <path d="M208,88v48a88,88,0,0,1-51.3,80H83.3A88,88,0,0,1,32,136V88Z" opacity="0.2"></path>
                <path d="M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z"></path>
              </svg>
            </div>
          </div>
          <div
            className="PausaLonga"
            style={{ color: 'hsla(188, 100%, 40%, 1)', fontSize: 14, fontWeight: '600', wordWrap: 'break-word' }}
          >
            Long Break
          </div>
        </div>
      </div>
    </div>
    <div
      className="Bottom"
      style={{
        alignSelf: 'stretch',
        padding: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
      }}
    >
      <div
        className="Timer"
        style={{ width: 224, height: 224, position: 'relative', display: 'grid', placeItems: 'center' }}
      >
        <div
          className="Ellipse2"
          style={{
            width: 224,
            height: 224,
            left: 0,
            top: 0,
            background: 'hsla(75, 85%, 60%, 1)',
            borderRadius: 9999,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div
            className="Bg"
            style={{
              width: 205,
              height: 205,
              left: 0,
              top: 0,
              background: 'hsla(160, 7%, 8%, 1)',
              borderRadius: 9999,
              display: 'grid',
              placeItems: 'center',
            }}
          >
            <div
              className="15"
              style={{
                color: '#F4F4F5',
                fontSize: 64,
                fontWeight: '700',
                fontFamily: 'Rajdhani, sans-serif',
              }}
            >
              25:00
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
function App() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100vh',
          overflow: 'hidden',
          paddingTop: '8rem',
          paddingBottom: '1rem',
          background: 'hsla(160, 7%, 8%, 1)',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ maxWidth: 1120, color: 'white' }}>
          <Header />
          <div style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', columnGap: '2.25rem' }}>
            <SessionDetails />
            <TaskList />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
