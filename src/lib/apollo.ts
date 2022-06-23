import {ApolloClient, InMemoryCache} from '@apollo/client';

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qcj2g03lxf01xk7dxwh0fq/master',
    cache: new InMemoryCache()
})