import { Outlet, createFileRoute } from '@tanstack/react-router'
import { Header } from '../../assets/components/Header'
import { Footer } from '../../assets/components/Footer'

export const Route = createFileRoute('/_app')({
    component: appLayout,
})

function appLayout() {
    return <div>
        <Header />
        <Outlet />
        <Footer />
    </div>
}
