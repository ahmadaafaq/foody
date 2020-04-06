import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults([]);

    const filterResultsByPrice = price => {
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{error.message}</Text> : null}
            <ScrollView>
                <ResultsList title="Cost Effective" results={filterResultsByPrice(2)} />
                <ResultsList title="Bit Pricer" results={filterResultsByPrice(3)} />
                <ResultsList title="Big Spender" results={filterResultsByPrice(4)} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
})

export default SearchScreen