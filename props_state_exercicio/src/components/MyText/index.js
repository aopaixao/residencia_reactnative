import React, { useState, useEffect } from "react";
import { Text } from "react-native";

import styles from './styles';

const MyText = (props) => {
  const [actualDate, setActualDate] = useState(null);

  useEffect(() => {
    getActualDate();
    console.log(JSON.stringify(actualDate));
  });

  getActualDate = () => {
    setActualDate(new Date().toDateString());
  }

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText}>
        Olá, {props.name} .
        {"\n"}
        A data atual é {actualDate}
      </Text>
    </Text>
  );
};

export default MyText;