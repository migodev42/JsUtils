(function () {

  const gid = setInterval(ClearAllTimer, 0) // 每轮事件循环执行一次

  function ClearAllTimer() {
    let id = setTimeout(() => { }, 0);
    while (id > 0) {
      if (id !== gid) {
        clearTimeout(id)
      }
      id--;
    }
  }

}
)()
