import React from 'react'
import { View, Text, ScrollView, Swiper, SwiperItem } from '@tarojs/components'

import './index.less'

const Discover = props => {
  return (
    <View className="discover">
      <Text className="discover__line">Hi YuJian 今日为你推荐</Text>
      <View className="discover__recommend">
        <ScrollView className="discover__recommend-scroll" scrollX scrollWithAnimation>
          <View className="discover__recommend-FM">
            <View className="FMImages"></View>
            <Text className="FMTitle">个性电台</Text>
          </View>
          <View className="discover__recommend-anyRecommend">
            <View className="recommenImages"></View>
            <Text className="recommendTitle">每日30首</Text>
          </View>
        </ScrollView>
      </View>
      <Text className="discover__line">根据『理想三旬』推荐</Text>
      <View className="discover__single">
        <Swiper className="discover__single-swiper" nextMargin="90px">
          <SwiperItem className="discover__single-list">
            <View className="listItem">
              <View className="listItem-image" />
              <View className="listItem-info">
                <Text className="listItem-songName">The Way You Felt</Text>
                <Text className="listItem-singer">Alec Benjamin-The Way You Felt</Text>
              </View>
            </View>
            <View className="listItem">
              <View className="listItem-image" />
              <View className="listItem-info">
                <Text className="listItem-songName">For him</Text>
                <Text className="listItem-singer">Troye Slivan-Blue Neighbourhood</Text>
              </View>
            </View>
            <View className="listItem">
              <View className="listItem-image" />
              <View className="listItem-info">
                <Text className="listItem-songName">Pasta</Text>
                <Text className="listItem-singer">New Pules-Pasta</Text>
              </View>
            </View>
          </SwiperItem>
        </Swiper>
      </View>
      <Text className="discover__line">为你精选的AI歌单</Text>
      <View className="discover__playlist"></View>
    </View>
  )
}

export default React.memo(Discover)
