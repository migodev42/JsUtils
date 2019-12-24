### 匹配换行
```
a='成都市武侯区高升桥↵路9号↵罗浮广场'

a.replace(/\r?\n|\r|↵/g, "<br>")

```

### 匹配手机号
```
// const patern=new RegExp("^[1]([3-9])[0-9]{9}$");
const patern= /^[1]([3-9])[0-9]{9}$/

patern.test('17361130207')  // return true/false


```

### 匹配中文/非中文

```
const reg=/[\u4e00-\u9fa5]+/g   <!-- 匹配中文 -->


```