import { View, Text } from 'react-native';
import React, { FC, forwardRef, useImperativeHandle, useState } from 'react';
import styles from './style';

interface ActiveIndexProps {
    data:any
}

const ActiveIndex: FC<ActiveIndexProps> = (props, ref) => {
  const [index,setIndex] = useState(0)
  // Use useImperativeHandle to expose any functions or values to the parent component
  useImperativeHandle(ref, () => ({
    // Example function to be exposed
    loadData: (d:any) => {
        setIndex(d)
    },
  }));

  return (
    <View style={styles.container}>
      <Text>{props?.data?.length} / {index+1}</Text>
    </View>
  );
};

export default forwardRef(ActiveIndex);
