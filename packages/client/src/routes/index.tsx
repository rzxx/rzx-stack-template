import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    return (<>
        <div className="w-full h-dvh flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Hello, World!</h1>
            <p className="text-sm">rzx Stack App is live!</p>
            <p className="text-sm italic">TanStack Router edition</p>
        </div>
    </>
    )
}