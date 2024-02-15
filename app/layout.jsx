import '@styles/globals.css';
import Nav from '@components/Nav';
import ProviderSession from '@components/SessionProvider';

export const metadata = {
    title: "NICER CAVES",
    description: "Cave organisms of the Philippines"
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <ProviderSession>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </ProviderSession>
        </body>
    </html>
  )
}

export default RootLayout;