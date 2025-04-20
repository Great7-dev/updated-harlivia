import { ThemeProvider } from './components/lib/theme-provider'
import Header from './components/header'
import Policy from './components/policy/components/Policy'

export const PolicyPage = () => {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <main>
                <Header />
                <Policy />
            </main>
        </ThemeProvider>
    )
}
