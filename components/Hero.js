import HeroImg from '../assets/down.jpeg'

export default function Hero() {
    const config = {
        subtitle: 'I am a Full-stack Developer and Designer'
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-20 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col text-center md:text-left'>
                <h1 className='text-white text-4xl font-extrabold tracking-tight mb-4'>
                    Hi, <br /> I am <span className='text-yellow-300'>Pooja</span>
                </h1>
                <p className='text-xl text-white font-light md:w-3/4 mx-auto md:mx-0'>{config.subtitle}</p>
            </div>
            <div className='md:w-1/3 mt-10 md:mt-0 flex justify-center'>
                <img className='w-72 h-48 md:w-80 md:h-56 rounded-full border-4 border-white shadow-lg object-cover' src={HeroImg} alt="Pooja" />
            </div>
        </section>
    );
}
