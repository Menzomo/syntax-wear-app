import { createFileRoute } from '@tanstack/react-router'

import { Hero } from '../../assets/components/Hero'
import { Categories } from '../../assets/components/Categories'
import { Galery } from '../../assets/components/Galery'


export const Route = createFileRoute('/_app/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <>


            <main className="py-10">
                <Hero />
                <Categories />
                <Galery />
            </main>

        </>
    )
}
