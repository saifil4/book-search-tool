'use client';
import { useRouter } from "next/navigation";
export default function Error({ error, reset }) {

    const router = useRouter();

    const goHome = () => {
        router.push('/');
    }

    return (
        <main>
            <div>
                <h1>Something went wrong!</h1>
                <button
                    className="button"
                    onClick={
                        () => reset()
                    }
                >
                    Try again
                </button>
                <br />
                <button className="button" onClick={goHome}>
                    Go to home
                </button>
            </div>
        </main>
    )
}