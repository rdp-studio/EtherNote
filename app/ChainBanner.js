import React from 'react';
import { Alert } from 'antd';

import Ethereum from './Ethereum';

export default function ChainBanner() {
  const { chain } = Ethereum.useContext();
  if (chain === undefined) {
    return <Alert type="info" message="正在连接……" banner />;
  } else if (chain === null) {
    return <Alert type="error" message="连接出错" banner />;
  } else if (chain === 3) {
      return null;
  } else {
      return <Alert type="warning" message="当前在官方笔记本未部署链上！因为我们没有部署官方笔记本rdpstudio.eth到此链，所以官方笔记本rdpstudio.eth在当前链上的内容绝对不是官方内容。如需查看请使用Ropsten测试网络。" banner />;
  }
};
