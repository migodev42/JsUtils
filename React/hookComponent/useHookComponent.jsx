import React, { useState, useEffect  } from 'react'

function useHooKComponent(friendID){
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}

export default useHooKComponent


/* 
  useAge

  它将 friendID 作为参数，并返回该好友是否在线：
  现在我们可以在两个组件中使用它：
  复用了useFriendStatus的订阅逻辑

  这两个组件的 state 是完全独立的。
  Hook 是一种复用状态逻辑的方式，它不复用 state 本身。
*/

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}