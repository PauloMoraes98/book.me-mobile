import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

export default function BookDetails() {
  const navigation = useNavigation();
  const route = useRoute();
  const [bookId, setBookId] = useState(0);

  const routeParams = route.params;

  useEffect(() => {
    setBookId(routeParams.id);
  }, []);

  return (
    <View>
      <Text>Book {{bookId}}</Text>
    </View>
  )
}
