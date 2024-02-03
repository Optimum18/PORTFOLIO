import Button from './elements/Button'

const navLinks = [
    {
        title: "About",
        link: '',
    },
    {
        title: "Service",
        link: ''
    },
    {
        title: "Blog",
        link: '',
    },
    {
        title: "Faqs",
        link: ''
    }
]
const Navbar = () => {
    return (
        <header>
            <nav className='flex flex-row justify-between p-5'>
                <div>
                </div>
                <div className='flex flex-row space-x-5 items-center' >
                    {
                        navLinks.map(item => (
                            <a className='p-2 rounded-lg hover:underline hover:bg-gray-100' href={item.link}>{item.title}</a>
                        ))
                    }
                    <Button
                        title='Contact Me'
                    />
                </div>
            </nav>
        </header>
    )
}

export default Navbar