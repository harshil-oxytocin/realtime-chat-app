import React from 'react';

import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = (props) => {

  const chatProps = useMultiChatLogic(
    '99896e33-c697-4830-b862-1eeb3cb04049',
    props.user.username,
    props.user.secret
  );

  return(
    <>
      <div style={{height:"100vh"}}>
        <PrettyChatWindow
          projectId="99896e33-c697-4830-b862-1eeb3cb04049"
          username={props.user.username}
          secret={props.user.secret}
          style={{ height: '100%' }}
        />

        {/*<MultiChatWindow {...chatProps} style={{height:"100%"}} />*/}
      {/*<MultiChatSocket {...chatProps}  />*/}
      </div>
    </>
  )
}

export default ChatsPage