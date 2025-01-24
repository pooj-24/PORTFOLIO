export default function Contact() {
    const config = {
        email: 'poojayadav@gmail.com',
        phone: '9978328648',
        linkedin: 'https://www.linkedin.com/in/pooja-m-665b55291/',
        facebook: 'https://www.facebook.com/pooja.yadav'
    };

    return (
        <section id='contact' className='flex flex-col bg-primary px-5 py-32 text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
                <p className='pb-5'>Contact me</p>
                <p className='py-2'>
                    <span className='font-bold'>Email:</span> {config.email}
                </p>
                <p className='py-2'>
                    <span className='font-bold'>Phone:</span> {config.phone}
                </p>
                <p className='py-2'>
                    <span className='font-bold'>LinkedIn:</span>{' '}
                    <a
                        href={config.linkedin}
                        className='hover:underline text-secondary'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {config.linkedin}
                    </a>
                </p>
                <p className='py-2'>
                    <span className='font-bold'>Facebook:</span>{' '}
                    <a
                        href={config.facebook}
                        className='hover:underline text-secondary'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {config.facebook}
                    </a>
                </p>
            </div>
        </section>
    );
}
