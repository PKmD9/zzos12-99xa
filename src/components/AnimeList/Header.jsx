import Link from "next/link"

const Header = ({ title, hrefLink, desc }) => {
    return (
        <div className="flex justify-between items-center p-4 text-color-primary">
            <h1 className="font-bold text-2xl">{title}</h1>
            {
                hrefLink && desc
                    ?
                    <Link href={hrefLink} className="text-xl underline hover:text-color-accent transition-all">{desc}</Link>
                    : null
            }
        </div>
    )
}

export default Header