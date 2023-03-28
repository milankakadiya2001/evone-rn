import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';

// Custom Imports
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import CHeader from '../../../components/common/CHeader';
import SearchComponent from '../../../components/homeComponent/SearchComponent';
import {styles} from '../../../themes';
import strings from '../../../i18n/strings';
import RenderNullComponent from '../../../components/RenderNullComponent';
import {moderateScale} from '../../../common/constants';

export default function Search() {
  const [search, setSearch] = useState('');

  const onSearchInput = text => setSearch(text);

  return (
    <CSafeAreaView>
      <CHeader title={strings.search} />
      <View style={localStyles.root}>
        <SearchComponent search={search} onSearchInput={onSearchInput} />
        <RenderNullComponent
          title1={strings.notFound}
          title2={strings.notFoundDesc}
        />
      </View>
    </CSafeAreaView>
  );
}

const localStyles = StyleSheet.create({
  root: {
    ...styles.ph20,
    ...styles.flex,
    marginTop: moderateScale(-20),
  },
});
