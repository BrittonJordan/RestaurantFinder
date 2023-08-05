import react from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ResultDetail from "./ResultDetail";

const ResultsList = ({title, results}) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({item}) => {
            return <ResultDetail result={item}/>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 15
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    }
});

export default ResultsList;