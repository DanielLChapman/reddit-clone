import App, {AppProps} from 'next/app';
import Page from '../components/Page';

import { useRouter } from 'next/router'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
                <Page>
                    <Component {...pageProps} />
                </Page>
                
        )
    }
}

export default MyApp;