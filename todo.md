# todo

| 任务名 | 状态|
| ---- | ----|
|倒计时显示 | ok |
|设备告警 | ok |
|开机 |  |
|暂停 |  |
|停止 |  |
|tab切换 |  |

### 命令发送

||
| -- | -- |
|帧头固定 | 0x55 |
|包长度  |  不包含帧头与自身 |
|命令1～n |
|校验 |  等于除帧头与校验值外所有字节相加之和，取反，再加1 |

启动
0x55 length 0x01 0x04 0x02 校验

```js
function sendGen(){
  let length = arguments.length + 1;
  var args = []
  let verify = Array.call(null,...arguments,length).reduce((a,c,i)=>{
    args.push('0x'+arguments[i-1])
    return a+c
  })
  verify = ((~verify + 1) & 0xff).toString(16);

  return {
    'noti': ['0x55','0x'+length,...args,'0x'+verify]
  }
}
```
