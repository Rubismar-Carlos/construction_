import Link from "next/link"
export default function Navbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href={'/about'}>
                        About
                    </Link>
                </li>
                <li>
                    hello
                </li>
                <li>
                    hello
                </li>
            </ul>
        </div>
    )
}