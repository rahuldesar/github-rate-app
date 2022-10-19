import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { View } from "react-native";

import { GET_REPOSITORIES } from "../graphql/queries";
import Text from "./Text";

const QueriesData = () => {
  const [queryData, setQueryData] = useState('yo')
  const { data, error, loading } = useQuery(GET_REPOSITORIES);
  
  


  return(
    <View>
      <Text> {queryData}</Text>
    </View>
  )


}

export default QueriesData;