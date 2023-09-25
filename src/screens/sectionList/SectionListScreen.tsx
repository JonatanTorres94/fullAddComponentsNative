import React from 'react'
import { View, SectionList, Text } from 'react-native'
import { HeaderText } from '../../components/HeaderText'
import { GoBack } from '../../components/GoBack'


interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: "DC Comics",
    data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
  },
  {
    casa: "Marvel Comics",
    data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
  },
  {
    casa: "Anime",
    data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
  }
];


export const SectionListScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <GoBack />
      {/* <HeaderText title='Section List' /> */}
        <SectionList
          style={{left:10}}
          sections={casas}
          keyExtractor={(item, index) => item + index}
          ListHeaderComponent={() => <HeaderText title='Section List' /> }
          ListFooterComponent={() => <Text> {' Total de casas ' + casas.length} </Text>}
          renderItem={({ item }) => <Text> {item} </Text>}
          stickySectionHeadersEnabled
          renderSectionHeader={({ section }) => <HeaderText title={section.casa} />}
        />
      
    </View>
  )
}
