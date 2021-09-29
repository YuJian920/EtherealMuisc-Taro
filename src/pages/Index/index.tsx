import React from 'react'
import { View, Text } from '@tarojs/components'

import './index.less'

const Index = props => {
  return (
    <View className="Index">
      <Text>Hi YuJian 今日为你推荐</Text>
    </View>
  )
}

export default React.memo(Index)
