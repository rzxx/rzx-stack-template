import { createFileRoute } from '@tanstack/react-router'
import { trpc } from '../utils/trpc';
import { useQuery } from '@tanstack/react-query';

export const Route = createFileRoute('/')({
    component: Index,
})

function Index() {
    const pingQuery = useQuery(trpc.ping.queryOptions())

    return (<>
        <div className="w-full h-dvh flex flex-col justify-center items-center gap-2">
            <h1 className="text-2xl font-bold">Hello, World!</h1>
            <p className="text-sm">rzx Stack App is live!</p>
            <p className="text-sm italic">full package edition</p>

            <p className="text-sm">{pingQuery.data?.status}</p>
            <p className="text-sm">{pingQuery.data?.message}</p>
            <p className="text-sm">{pingQuery.data?.timestamp}</p>
        </div>
    </>
    )
}